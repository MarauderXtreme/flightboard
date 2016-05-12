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
 
Array.prototype.shuffle = function() {
	var i = this.length, j, temp;
	if ( i == 0 ) return this;
	while ( --i ) {
		j = Math.floor( Math.random() * ( i + 1 ) );
		temp = this[i];
		this[i] = this[j];
		this[j] = temp;
	}
	return this;
}

Number.prototype.to_milliseconds = function () { return this * 1000; }

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

function construct_line(linenumber) {
	var entrynumber = offset - linenumber;
	
	if(entrynumber < 0) {
		entrynumber = nid.length + entrynumber;
	}
	
	var entry = nid[entrynumber];
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
	if(!debug){
		animate_line(animate_selector);
	}
}

function else_lines(linenumber,before) {
	var animate_selector = 0;
	var that = $('div#content>div:nth-of-type(' + linenumber + ')');
	that.remove();
	$('div#content>div:nth-of-type(' + before + ')').after(construct_line(linenumber));
	that = $('div#content>div:nth-of-type(' + linenumber + ')');
	animate_selector = that.selector;
	if(!debug){
		animate_line(animate_selector);
	}
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

function everybody_do_the_flop() {
	flipper(0);
	var counter = 1;
	flipperintervall = setInterval(function() {
		flipper(counter);
		counter++;
		if(counter === linenumbers) {
			set_offset();
			clearInterval(flipperintervall);
			var resetInterval = setInterval(function () {
				clearInterval(resetInterval);
				everybody_do_the_flop();
			}, (completeflipintervall - linenumbers * lineflipintervall).to_milliseconds())
		}
	}, lineflipintervall.to_milliseconds());
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
	nid.shuffle();
	create_flipper_material();
	everybody_do_the_flop();
});
