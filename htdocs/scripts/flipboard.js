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
 * Configuration of the flipper and intervall and shit. ^^
 */
var nid = [
	['INGENIEUR FUER VERFAHRENSTECHNIK','A','KOUR'],
	['PRAKTIKANT TECHNICAL SALES','B','DUS'],
	['WERKSTUDENT ENGINEERING: CABIN + CARGO','C','HAM'],
	['PRAKTIKUM IM BEREICH LEAN LOGISTICS','C','HAM'],
	['WERKSTUDENT: MATERIALIEN UND PROZESSE','C','BRE'],
	['ABSCHLUSSARBEIT: A400M FLUEGELMONTAGE','C','STAD'],
	['PRAKTIKUM: SPACE EXPLORATION','D','BRE'],
	['PRAKTIKUM: SIMUL. HINDERNISWARNSYSTEM','D','FDH'],
	['PRAKTIKUM: HIGH PERFORMANCE COMPUTING','D','ULM'],
	['FINAL THESIS: HIGH VOLTAGE DC NETWORK','E','HAM'],
	['DOKTORARBEIT: MIKROWELLENTECHNOLOGIEN','E','MUC'],
	['VIE: HELICOPTER TRAINING SIMULATION','F','MUC'],
	['PRAKTIKUM PROJEKTMANAGEMENT TIGER','F','DONW'],
	['PRAKTIKUM SIMULATION | SOFTWAREENTW.','F','MAN'],
	['PROJEKTINGENIEURE AERODYNAMIK','G','BUND'],
	['AUSBILDUNG ZUM INDUSTRIEMECHANIKER','H','WILD'],
	['JUNIOR VBA ENTWICKLER IN DER LUFTFAHRT','I','MAN'],
	['QUALIFIZIERUNG FLUGGERAETMECHANIKER','I','HAM'],
	['FACHHELFER LOGISTIK','I','DONW'],
	['PRAKTIKANT|DIPLOMAND AEROSPACE','J','MUC'],
	['PRAKTIKANT|IN SALES + MARKETING','K','FRA'],
	['JUNIOR SUPPLY CHAIN MANAGER ','L','HAM'],
	['DIPLOM-INGENIEUR LUFT- UND RAUMFAHRT','M','DRS'],
	['AUSBILDUNG TECHNISCHER PRODUKTDESIGNER','N','GERS'],
	['MINT: SPITZENFORSCH. ENERGIE + VERKEHR','O','BUND'],
	['WERKSTUDENT IM MANAGEMENT CONSULTING','P','BER'],
	['STUDENT. AUSHILFE KUNSTSTOFFFERTIGUNG','Q','DRS'],
	['PRAKTIKUM PROGRAMMMANAGEMEMENT A330 ','Q','DRS'],
	['BERUFSEINSTIEG KONSTRUKTIONSINGENIEUR','R','FDH'],
	['AUSBILDUNG TECHNISCHER ZEICHNER','S','BLAN'],
	['PRAKTIKUM: BETREUUNG FLUGSIMULATOREN','T','FRA'],
	['PRAKTIKANT INFLIGHT + CATERING','U','HAM'],
	['HIWI IM FORSCHUNGSPROJEKT AIRPORT2030','V','HAM'],
	['WISS. MITARBEITER SATELLITENTECHNIK','W','BER'],
	['PRAKTIKANT|IN IM BEREICH LOGISTIK','X','BUND'],
	['WERKSTUDENT: SATELLITENKOMMUNIKATION','Y','MUC'],
	['PRAKTIKUM UNTERNEHMENSENTWICKLUNG','Z','MUC'],
	['PRAKTIKUM IN DER PRODUKTION','Z','MUC'],
	['PROMOTIONSSTIPENDIUM:  TRAEGERRAKETEN','0','MUC'],
	['PRAKTIKANT ARBEITSVORBEREITUNG ','1','ARNS'],
	['TRAINEEPROGRAMM LUFTFAHRT KONSTRUKTION','2','BRE'],
	['PRAKTIKANT IM BEREICH QM SYSTEMS','3','NOR'],
	['PRAKTIKANT|BACHELOR TEILEFERTIGUNG','3','NOR'],
	['DIPLOM-, MASTER- ODER BACHELORARBEIT','4','FRA'],
	['WEITERBD. SERVICEFACHKRAFT LUFTVERKEHR','5','BER'],
	['INTERN: ALLIANCE + NETWORK DEVELOPMENT','6','FRA'],
	['PRAXISSTUDENT DESIGN FOR MANUFACTURING','7','BACK'],
	['PRAKT. RAUMFAHRT: MECHANISCHE EFFEKTE ','7','BACK'],
	['LUFTVERKEHRSKAUFMANN|-FRAU BERUFSBEGL.','8','BER'],
	['FORTBILDUNG AIRCRAFT MAINTEN. MECHANIC','8','BER'],
]

var flipperinterval;
var linenumbers = 12;
var offset = linenumbers;
var charnumber = 37;
var lineflipintervall = 12;
var completeflipintervall = 300;

function makemilliseconds(seconds) {
	return seconds * 1000;
}

function animate_line(animate_selector) {
	title = $(animate_selector + ' .title');
	title.splitFlap({
		'image' : 'css/images/chars.png',
		'charsMap' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789.,|@():+-',
		'speed' : 5,
		'speedVariation' : 1
	});
	title = null;
	logo = $(animate_selector + ' .logo');
	logo.splitFlap({
		'image' : 'css/images/logos.png',
		'charWidth' : 200,
		'charsMap' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ012345678',
		'speed' : 3,
		'speedVariation' : 1
	});
	logo = null;
	locationcode = $(animate_selector + ' .location');
	locationcode.splitFlap({
		'image' : 'css/images/chars.png',
		'charsMap' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ',
		'speed' : 3,
		'speedVariation' : 1
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

function normalize_entries(entry,length) {
	entry_length = entry.length;
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

function get_array_entry(linenumber,type) {
	entrynumber = offset - linenumber;
	if(entrynumber < 0) {
		entrynumber = get_array_size(nid) + entrynumber;
	}
	switch(type) {
		case 'title':
			entry = nid[entrynumber][0];
			entry = normalize_entries(entry,charnumber);
			break;
		case 'logo':
			entry = nid[entrynumber][1];
			break;
		case 'location':
			entry = nid[entrynumber][2];
			entry = normalize_entries(entry,4);
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
			if(counter === linenumbers) {
				set_offset();
   			clearInterval(flipperintervall);
  		}
		}, makemilliseconds(lineflipintervall));
}

function bypassintervall() {
	everybodyDotheFlop();
}

function init() {
	window.setInterval(function() {
		everybodyDotheFlop();
	}, makemilliseconds(completeflipintervall));
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