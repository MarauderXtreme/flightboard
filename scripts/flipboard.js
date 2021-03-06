/**
 * @author Christoph Kepler
 *
 *
 * Slipt-Flap Config
 * .splitFlap({
 *	'image' : 'images/split-flap/chars.png',
 *	'charsMap' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789.,!?#@()+-=',
 *	'charWidth' : 50,
 *	'charHeight' : 100,
 *	'padDir' : 'left',
 *	'padChar' : ' ',
 *	'speed' : 3,
 *	'speedVariation' : 2
 * });
 *
 */

/**
 * array shuffle method
 */
Array.prototype.shuffle = function() {
	var i = this.length, j, temp;
	if ( i === 0 ) return this;
	while ( --i ) {
		j = Math.floor( Math.random() * ( i + 1 ) );
		temp = this[i];
		this[i] = this[j];
		this[j] = temp;
	}
	return this;
}

/**
 * to_milliseconds method vor numbers
 */
Number.prototype.to_milliseconds = function () { return this * 1000; }

/**
 * This function trims or extends the given entry to the length
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

/**
 * animation for every single line
 */
function animate_line(animate_selector) {
	$(animate_selector + ' .title').splitFlap({
		'image' : 'images/split-flap/chars.png',
		'charWidth' : 40,
		'charHeight' : 80,
		'charsMap' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789.,|@():+-',
		'speed' : 5,
		'speedVariation' : 1
	});
	$(animate_selector + ' .logo').splitFlap({
		'image' : 'images/split-flap/logos.png',
		'charWidth' : 160,
		'charHeight' : 80,
		'charsMap' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,@():+- ',
		'speed' : 3,
		'speedVariation' : 1
	});
	$(animate_selector + ' .location').splitFlap({
		'image' : 'images/split-flap/chars.png',
		'charWidth' : 40,
		'charHeight' : 80,
		'charsMap' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ',
		'speed' : 3,
		'speedVariation' : 1
	});
}

/**
 * Setting the offset for continous iteration
 */
function set_offset() {
	if (offset === nid.length) {
		offset = 1;
	}
	else {
		offset++;
	}
}

/**
 * Contruct the line with the linenumber and the array
 */
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

/**
 * Choose which line is to be animated
 */
function line_select(linenumber,first_line=false) {
	var that = $('main#content>div:nth-of-type(' + linenumber + ')');
	that.remove();
	if(first_line) {
		that = $('main#content>div:nth-of-type(' + linenumber + ')');
		that.before(construct_line(linenumber));
	}
	else{
		var before = linenumber - 1;
		$('main#content>div:nth-of-type(' + before + ')').after(construct_line(linenumber));
	}
	that = $('main#content>div:nth-of-type(' + linenumber + ')');
	var animate_selector = that.selector;
	if(!debug){
		animate_line(animate_selector);
	}
}

/**
 * Starts the flipper sub processes
 */
function flipper(before) {
	var linenumber = before + 1;
	if(linenumber === 1) {
		line_select(linenumber,true);
	}
	else {
		line_select(linenumber);
	}
}

/**
 * All the intervals are set here
 */
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

/**
 * Create initial Flipper lines
 */
function create_flipper_material() {
	$('#content').html('<div id="line-1" class="flipline"><!-- Init --></div>\n<div id="line-2" class="flipline"><!-- Init --></div>');
}

/**
 * Maps the array entries to their names
 */
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
