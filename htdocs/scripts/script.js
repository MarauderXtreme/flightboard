/**
 * @author Christoph Kepler
 * 
 * 
 * Slipt-Flap Config
 * .splitFlap({
 *	'image' : 'css/images/chars.png',
 * 	'charsMap' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789.,!?#@()+-=',
 * 	'charWidth' : 50,	
 * 	'charHeight' : 100,
 * 	'padDir' : 'left',
 * 	'padChar' : ' ',
 * 	'speed' : 3,
 * 	'speedVariation' : 2
 * });
 * 
 */

var nid = [
	['testtesttesttesttesttesttesttesttesttesttest','b','g'],
	['testtesttesttesttesttestte','a','h'],
	['Stelle  1','f','d'],
	['Stelle  2','c','c'],
	['Stelle  3','a','h'],
	['Stelle  4','g','d'],
	['Stelle  5','d','f'],
	['Stelle  6','e','a'],
	['Stelle  7','h','b'],
	['Stelle  8','d','c'],
	['Stelle  9','b','g'],
	['Stelle 10','h','g'],
	['Stelle 11','a','a'],
	['Stelle 12','b','b'],
	['Stelle 13','a','h'],
	['Stelle 14','f','d'],
	['Stelle 15','d','e'],
	['Stelle 16','g','e'],
	['Stelle 17','g','f'],
	['Stelle 18','h','a'],
	['Stelle 19','b','c']
];

var flipperinterval;
var offset = 7;

function animate_line(animate_selector) {
	title = $(animate_selector + ' .title');
	title.splitFlap({
	'image' : 'css/images/chars.png',
		'speed' : 10,
		'speedVariation' : 0
	});
	title = null;
	logo = $(animate_selector + ' .logo');
	logo.splitFlap({
		'image' : 'css/images/logos.png',
		'charWidth' : 200,
		'charsMap' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
		'speed' : 8,
		'speedVariation' : 2
	});
	logo = null;
	locationcode = $(animate_selector + ' .location');
	locationcode.splitFlap({
		'image' : 'css/images/chars.png',
		'charWidth' : 200,
		'charsMap' : 'ABCDEFGH',
		'speed' : 3,
		'speedVariation' : 2
	});
	locationcode = null;
}

function set_offset() {
	if (offset == get_array_size(nid)) {
		offset = 1;
	}
	else {
		offset++;
	};
}

function get_array_size(array) {
	array_length = array.length;
	return array_length;
}

function normalize_entries(entry) {
	entry_length = entry.length;
	if(entry_length < 26) {
		diff = 26 - entry_length;
		for(i = 1;i <= diff; i++) {
			entry = entry + ' ';
		}
		return entry;
	}
	else if(entry_length > 26) {
    entry = entry.substring(0,25)+"@";
		return entry;
	}
	else {
		return entry;
	}
}

function get_array_entry(linenumber,type) {
	entrynumber = offset - linenumber;
	if(entrynumber < 0) {
		entrynumber = get_array_size(nid) + entrynumber;
	}
	switch(type) {
		case 'title':
			entry = nid[entrynumber][0];
			entry = normalize_entries(entry);
			break;
		case 'logo':
			entry = nid[entrynumber][1];
			break;
		case 'location':
			entry = nid[entrynumber][2];
			break;
		default:
			alert('This should not happen!!1!!11!einself');
	}
	return entry;
}

function construct_line(linenumber) {
	title = '<span class="title">' + get_array_entry(linenumber,'title') + '</span>';
	logo = '<span class="logo">' + get_array_entry(linenumber,'logo') + '</span>';
	locationcode = '<span class="location">' + get_array_entry(linenumber,'location') + '</span>';
	line = '<div id="line-' + linenumber + '" class="flipline">' + title + logo + locationcode + '</div>'
	return line;
}

function first_line(linenumber) {
	animate_selector = 0;
	that = $('div#content>div:nth-of-type(' + linenumber + ')');
	that.remove();
	that = null;
	that = $('div#content>div:nth-of-type(' + linenumber + ')');
	that.before(construct_line(linenumber));
	that =  null;
	that = $('div#content>div:nth-of-type(' + linenumber + ')');
	animate_selector = that.selector;
	that = null;
	animate_line(animate_selector);
}

function else_lines(linenumber,before) {
	animate_selector = 0;
	that = $('div#content>div:nth-of-type(' + linenumber + ')');
	that.remove();
	that = null;
	$('div#content>div:nth-of-type(' + before + ')').after(construct_line(linenumber));
	that = $('div#content>div:nth-of-type(' + linenumber + ')');
	animate_selector = that.selector;
	that = null;
	animate_line(animate_selector);
}

function flipper(before) {
	linenumber = before + 1;
	if(linenumber == 1) {
		first_line(linenumber);
	}
	else {
		else_lines(linenumber,before);
	}
}

function everybodyDotheFlop() {
	var counter = 0;
	flipperintervall =
		setInterval(function() {
			flipper(counter);
			counter++;
			if(counter === 7) {
				set_offset();
   			clearInterval(flipperintervall);
  		}
		},2000);
}

function bypassintervall() {
	everybodyDotheFlop();
}

function init() {
	window.setInterval(function() {
		everybodyDotheFlop();
	}, 45000);
}

function create_flipper_material() {
	content = $('#content').html();
	$('#content').html(content + '<div id="line-1" class="flipline"><!-- Init --></div>\n<div id="line-2" class="flipline"><!-- Init --></div>');
	content = null;
}

/*
 * Main Function
 */
$(document).ready(function() {
	create_flipper_material();
	bypassintervall();
	init();
})