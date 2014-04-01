/**
 * @author Christoph Kepler
 */

var nid = [
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

var offset = 7;
var array_length = 0;
var flipperinterval;

function animate_line(animated_div) {
	animated_div.splitFlap({
		'image' : '../css/images/chars.png',
		'speed' : 15,
		'speedVariation' : 2
	});
}

function set_offset() {
	if (offset = get_array_size(nid) + 1) {
		offset = 0;
	}
	else {
		offset = offset++;
	};
}

function get_array_size(array) {
	array_length = array.length();
	return array_length;
}
function get_array_entry(linenumber,offset) {
	entrynumber = offset - linenumber;
	entry = nid[entrynumber];
	return entry;
}

function flipper(before) {
	linenumber = before + 1;
	if(linenumber == 1) {
		that = $('div#content>div:nth-of-type(' + linenumber + ')');
		that.remove();
		that = null;
		that = $('div#content>div:nth-of-type(' + linenumber + ')');
		that.before('<div id="line-1" class="flipline">' + get_array_entry(linenumber,offset) + '</div>');
		that =  null;
		that = $('div#content>div:nth-of-type(' + linenumber + ')');
		animate_line(that);
	}
	else {
		that = $('div#content>div:nth-of-type(' + linenumber + ')');
		that.remove();
		that = null;
		$('div#content>div:nth-of-type(' + before + ')').after('<div id="line-' + linenumber + '" class="flipline">' + get_array_entry(linenumber,offset) + '</div>');
		that = $('div#content>div:nth-of-type(' + linenumber + ')');
		animate_line(that);
	}
}

function everybodyDotheFlop() {
	var counter = 0;
	flipperintervall =
		setInterval(function() {
			flipper(counter);
			counter++;
			if(counter === 7) {
   			clearInterval(flipperintervall);
  		}
		},500);
}

function bypassintervall() {
	everybodyDotheFlop();
}

function init() {
	window.setInterval(function() {
		everybodyDotheFlop();
		set_offset();
	}, 15000);
}

$(document).ready(function() {
	bypassintervall();
	init();
})

/**
 * Another Approach if necessary
 */ 
// function another_approach(before)  {
	// linenumber = before + 1;
	// remove_and_animate_values(linenumber);
// }
//
// function insert_values() {
	// for (i=1; i==7; i++) {
		// inverted_i = 7 - i;
		// that = $('div#content div:nth-of-type(' + i + ')');
		// that.after('<div class="flipline flipline-' + i + '">' + get_array_entry(inverted_i,offset) + '</div>');
	// }
// }
// 
// function remove_and_animate_values(linenumber) {
		// that = $('div#content div:nth-of-type(' + linenumber + ')');
		// that.remove();
		// that = $('div#content div:nth-of-type(' + linenumber + ')');
		// animate_line(that);
// }