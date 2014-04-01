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
		that = $('div#content div:nth-of-type(' + linenumber + ')');
		that.remove();
		that = $('div#content div:nth-of-type(' + linenumber + ')');
		that.before('<div id="line-1" class="flipline">' + get_array_entry(linenumber,offset) + '</div>');
		that = $('div#content div:nth-of-type(' + linenumber + ')');
		animate_line(that);
	}
	else {
		that = $('div#content div:nth-of-type(' + linenumber + ')');
		that.remove();
		$('div#content div:nth-of-type(' + before + ')').after('<div id="line-' + linenumber + '" class="flipline">' + get_array_entry(linenumber,offset) + '</div>');
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
		}, 6000);
}

function bypassintervall() {
	everybodyDotheFlop();
}

function init() {
	window.setInterval(function() {
		everybodyDotheFlop();
		set_offset();
	}, 25000);
}

$(document).ready(function() {
	bypassintervall();
	// init();
})


// $(document).ready(function() {
	// window.setInterval(
		// function() {
			// var divs = [];
			// divs.push($('div#content > div'));
			// if(divs.length > 7) {
				// $('div#content div:last-child').remove();
			// }
			// $('div#content div:first-of-type').before('<div class="test">Test</div>');
		// }
		// , 1000);
// });

// $(document).ready(function() {
	// var count = 0;
	// $('.split-flap-' + count).splitFlap({
		// 'image' : '../css/images/chars.png',
		// 'speed' : 14,
		// 'speedVariation' : 0
	// });
	// count = count + 1;
	// window.setInterval(
		// function() {
			// $('.split-flap-' + count).splitFlap({
				// 'image' : '../css/images/chars.png',
				// 'speed' : 10,
				// 'speedVariation' : 0
			// });
			// count = count + 1;
		// }
		// ,2000);
// });

