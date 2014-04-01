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

var offset = 6;
var array_length = 0;
var flipperinterval;

function animate_line(animated_div) {
	animated_div.splitFlap({
		'image' : '../css/images/chars.png',
		'speed' : 10,
		'speedVariation' : 0
	});
}

function set_offset() {
	if (offset = get_array_size() + 1) {
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
	console.log(linenumber);
	linenumber = before + 1;
	if(linenumber == 1) {
		that = $('div#content div:nth-child(' + linenumber + ')');
		that.remove();
		that = $('div#content div:nth-child(' + linenumber + ')');
		that.before('<div id="line-1">' + get_array_entry(linenumber,offset) + '</div>');
		that = $('div#content div:nth-child(' + linenumber + ')');
		// that.animate_line(this);
	}
	else {
		that = $('div#content div:nth-child(' + linenumber + ')');
		that.remove();
		$('div#content div:nth-child(' + before + ')').after('<div id="line-' + linenumber + '">' + get_array_entry(linenumber,offset) + '</div>');
		// that.animate_line(this);
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
  		console.log(counter);
		}, 3000);
}

function init() {
	window.setInterval(function() {
		everybodyDotheFlop();
	}, 25000);
}

$(document).ready(function() {
	init();
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

