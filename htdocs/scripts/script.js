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
 */

var nid = [
	['testtesttesttesttesttesttesttesttesttesttest','a','c'],
	['testtesttesttesttesttestte','a','c'],
	['Stelle  1','a','c'],
	['Stelle  2','a','c'],
	['Stelle  3','a','c'],
	['Stelle  4','a','c'],
	['Stelle  5','a','c'],
	['Stelle  6','a','c'],
	['Stelle  7','a','c'],
	['Stelle  8','a','c'],
	['Stelle  9','a','c'],
	['Stelle 10','a','c'],
	['Stelle 11','a','c'],
	['Stelle 12','a','c'],
	['Stelle 13','a','c'],
	['Stelle 14','a','c'],
	['Stelle 15','a','c'],
	['Stelle 16','a','c'],
	['Stelle 17','a','c'],
	['Stelle 18','a','c'],
	['Stelle 19','a','c']
];

var flipperinterval;
var offset = 7;

function animate_line(animated_div) {
	animated_div.splitFlap({
		'image' : 'css/images/chars.png',
		'speed' : 15,
		'speedVariation' : 2
	});
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
	that = $('div#content>div:nth-of-type(' + linenumber + ')');
	that.remove();
	that = null;
	that = $('div#content>div:nth-of-type(' + linenumber + ')');
	that.before(construct_line(linenumber));
	that =  null;
	that = $('div#content>div:nth-of-type(' + linenumber + ')');
	// animate_line(that);
	that = null;
}

function else_lines(linenumber,before) {
	that = $('div#content>div:nth-of-type(' + linenumber + ')');
	that.remove();
	that = null;
	$('div#content>div:nth-of-type(' + before + ')').after(construct_line(linenumber));
	that = $('div#content>div:nth-of-type(' + linenumber + ')');
	// animate_line(that);
	that = null;
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
		},1500);
}

function bypassintervall() {
	everybodyDotheFlop();
}

function init() {
	window.setInterval(function() {
		everybodyDotheFlop();
	}, 15000);
}

function create_flipper_material() {
	content = $('#content').html();
	$('#content').html(content + '<div id="line-1" class="flipline"><!-- Init --></div>\n<div id="line-2" class="flipline"><!-- Init --></div>');
	content = null;
}

$(document).ready(function() {
	create_flipper_material();
	bypassintervall();
	init();
})