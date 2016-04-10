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

/**
 * The Function for the Flipper
 */

 function normalize_entries(entry,length) {
 	var entry_length = entry.length;
 	if(entry_length < length) {
 		diff = length - entry_length;
 		for(i = 1;i <= diff; i++) {
 			entry = entry + ' ';
 		}
 		return entry;
 	}
 	else if(entry_length > length) {
     	entry = entry.substring(0,length-1)+"@";
 		return entry;
 	}
 	else {
 		return entry;
 	}
 }

function makemilliseconds(seconds) {
	return seconds * 1000;
}

function animate_line(animate_selector) {
	$(animate_selector + ' .title').splitFlap({
		'image' : 'css/images/chars.png',
		'charWidth' : 40,
		'charHeight' : 80,
		'charsMap' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789.,|@():+-',
		'speed' : 5,
		'speedVariation' : 1
	});
	$(animate_selector + ' .logo').splitFlap({
		'image' : 'css/images/logos.png',
		'charWidth' : 160,
		'charHeight' : 80,
		'charsMap' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ012345678',
		'speed' : 3,
		'speedVariation' : 1
	});
	$(animate_selector + ' .location').splitFlap({
		'image' : 'css/images/chars.png',
		'charWidth' : 40,
		'charHeight' : 80,
		'charsMap' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ',
		'speed' : 3,
		'speedVariation' : 1
	});
}

function set_offset() {
	if (offset == nid.length) {
		offset = 1;
	}
	else {
		offset++;
	};
}

function get_array_entry(linenumber,type) {
	var entrynumber = offset - linenumber;
	if(entrynumber < 0) {
		entrynumber = nid.length + entrynumber;
	}
	switch(type) {
		case 'title':
			var entry = normalize_entries(nid[entrynumber][0],charnumber);
			break;
		case 'logo':
			var entry = nid[entrynumber][1];
			break;
		case 'location':
			var entry = normalize_entries(nid[entrynumber][2],4);
			break;
		default:
			alert('This should not happen!!1!!11!einself');
	}
	return entry;
}

function construct_line(linenumber) {
	var entry = nid[linenumber]
	var title = '<span class="title">' + entry.title + '</span>';
	var logo = '<span class="logo">' + entry.logo + '</span>';
	var locationcode = '<span class="location">' + entry.location + '</span>';
	var line = '<div id="line-' + linenumber + '" class="flipline">' + title + logo + locationcode + '</div>'
	return line;
}

function first_line(linenumber) {
	var animate_selector = 0;
	var that = $('div#content>div:nth-of-type(' + linenumber + ')');
	that.remove();
	that = $('div#content>div:nth-of-type(' + linenumber + ')');
	that.before(construct_line(linenumber));
	that = $('div#content>div:nth-of-type(' + linenumber + ')');
	animate_selector = that.selector;
	animate_line(animate_selector);
}

function else_lines(linenumber,before) {
	var animate_selector = 0;
	var that = $('div#content>div:nth-of-type(' + linenumber + ')');
	that.remove();
	$('div#content>div:nth-of-type(' + before + ')').after(construct_line(linenumber));
	that = $('div#content>div:nth-of-type(' + linenumber + ')');
	animate_selector = that.selector;
	animate_line(animate_selector);
}

function flipper(before) {
	var linenumber = before + 1;
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
			if(counter === linenumbers) {
				set_offset();
   				clearInterval(flipperintervall);
				var resetInterval = setInterval(function () {
					clearInterval(resetInterval);
					everybodyDotheFlop();
				}, makemilliseconds(300 - linenumbers * lineflipintervall))
  			}
		}, makemilliseconds(lineflipintervall));
}

function create_flipper_material() {
	var content = $('#content').html();
	$('#content').html(content + '<div id="line-1" class="flipline"><!-- Init --></div>\n<div id="line-2" class="flipline"><!-- Init --></div>');
}


nid = nid.map(function (entry) {
   return {
	   title: normalize_entries(entry[0], charnumber),
	   logo: entry[1],
	   location: normalize_entries(entry[2], 4)
   }
})

/*
 * Main Function
 */
$(document).ready(function() {
	create_flipper_material();
	everybodyDotheFlop();
});
