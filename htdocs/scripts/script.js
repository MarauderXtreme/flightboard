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
	'testtesttesttesttesttesttesttesttesttesttest',
	'testtesttesttesttesttestte',
	'Stelle  1',
	'Stelle  2',
	'Stelle  3',
	'Stelle  4',
	'Stelle  5',
	'Stelle  6',
	'Stelle  7',
	'Stelle  8',
	'Stelle  9',
	'Stelle 10',
	'Stelle 11',
	'Stelle 12',
	'Stelle 13',
	'Stelle 14',
	'Stelle 15',
	'Stelle 16',
	'Stelle 17',
	'Stelle 18',
	'Stelle 19'
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
    entry = entry.substring(0,23)+"...";
		return entry;
	}
	else {
		return entry;
	}
}

function get_array_entry(linenumber) {
	entrynumber = offset - linenumber;
	if(entrynumber < 0) {
		entrynumber = get_array_size(nid) + entrynumber;
	}
	entry = nid[entrynumber];
	entry = normalize_entries(entry);
	return entry;
}

function first_line(linenumber) {
	that = $('div#content>div:nth-of-type(' + linenumber + ')');
	that.remove();
	that = null;
	that = $('div#content>div:nth-of-type(' + linenumber + ')');
	that.before('<div id="line-1" class="flipline">' + get_array_entry(linenumber) + '</div>');
	that =  null;
	that = $('div#content>div:nth-of-type(' + linenumber + ')');
	animate_line(that);
	that = null;
}

function else_lines(linenumber,before) {
	that = $('div#content>div:nth-of-type(' + linenumber + ')');
	that.remove();
	that = null;
	$('div#content>div:nth-of-type(' + before + ')').after('<div id="line-' + linenumber + '" class="flipline">' + get_array_entry(linenumber) + '</div>');
	that = $('div#content>div:nth-of-type(' + linenumber + ')');
	animate_line(that);
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