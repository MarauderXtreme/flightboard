/**
 * @author Christoph Kepler
 */

/**
 * Configuration of the flipper and intervall and shit. ^^
 */

var nid = [
	["QUALITY AND COMPLIANCE ASSISTANT","Y","BER"],
	["FLUGBEGLEITER","Y","BRE"],
	["PRAKTIKUM MARKETING UND KOMMUNIKATION",",","DRS"],
	["TOURISMUSKAUFMANN|-FRAU IHK","9","BER"],
	["INTERNATIONALE|R TOURISTIKASSISTENT|IN","9","BER"],
	["SERVICEKAUFMANN|-FRAU IM LUFTVERKEHR","9","BER"],
	["KAUFMANN|-FRAU FUER TOURISMUS","9","BER"],
	["GEPRUEFTER WIRTSCHAFTSFACHWIRT","5","BER"],
	["SERVICEFACHKRAFT IM LUFTVERKEHR","5","BER"],
	["PRUEF. VORBEREITUNG SERVICEKAUFMANN","5","BER"],
	["JUNIOR CONSULTANT","L","HAM"],
	["PRAKTIKUM KUNST- + VERBUNDWERKSTOFFE",".","DRS"],
	["WERKSTUDENT KUNST- + VERBUNDWERKSTOFFE",".","DRS"],
	["VERFAHRENSMECHANIKER KUNSTSTOFFTECHNIK",".","RAD"],
	["AVIONIKER | FLUGGERAETEELEKTRONIKER",":","FREI"],
	["MITARBEITER FUNKTIONALE SICHERHEIT","(","ULM"],
	["PRAKTIKUM ARBEITS- + GESUNDHEITSSCHUTZ","7","BAC"],
	["PRAKTIKUM ENTWICKLUNG DIGITALGERAETE","7","BAC"],
	["PRAKTIKUM CO-SIM. HALBSCHALENFILTER","7","BAC"],
	["PRAKTIKUM AUSWERTESOFTWARE THEODOLITE","7","BAC"],
	["PRAKTIKUM MODEMATCHINGSIMULATOR","7","BAC"],
	["PRAKTIKUM PASSIVE RAUMFAHRTGERAETE","7","BAC"],
	["PRAKTIKUM ENTWICKLUNG RAUMFAHRTGERAETE","7","BAC"],
	["PRAKTIKUM OPTIMIERUNG FILTER CHANNELS","7","BAC"],
	["PRAKTIKUM HR: SCHWERPUNKT RECRUITING","7","BAC"],
	["PRAKTIKUM REGELUNG VON DC|DC-WANDLERN","7","BAC"],
	["(SENIOR) SOFTWARE ENGINEER",")","GIL"],
	["ELECTRICAL ENGINEER: POWER ELECTRONICS",")","GIL"],
	["PRAKTIKUM MECHANIK, KONSTRUKTION",")","GIL"],
	["PRAKTIKUM FLUGREGELUNG UND AVIONIK",")","GIL"],
	["PRAKTIKUM AERODYNAMIK",")","GIL"],
	["PROJEKTLEITER HOCHTECH. SYSTEME","+","FDH"],
	["SOFTWAREENTWICKLER JAVAFX","+","MAN"],
	["SOFTWAREINGENIEUR AVIONIK","+","IGS"],
	["SPEZIALIST PLANUNG UND ANALYSE","+","MAN"],
	["STRUKTURMECHANIKER","+","IGS"],
	["TESTINGENIEUR HARDWAREENTWICKLUNG","+","ULM"],
	["VERFAHRENSMECHANIKER FASERVERBUND","+","IGS"],
	["INGENIEUR SYSTEMENTWICKLUNG","+","ULM"],
	["FLUGGERAETMECHANIKER","+","DON"],
	["ELEKTROTECHNIKER LUFTFAHRT","+","IGS"],
	["ELEKTROTECHNIKER FUER MESSTECHNIK","+","DON"],
	["ELEKTROKONSTRUKTEUR","+","OBK"],
	["UMSCHULUNG FLUGGERAETMECHANIKER|-IN","8","WIL"],
	["LUFTVERKEHRSKAUFMANN|-FRAU","8","BER"],
	["FORTBILDUNG INSTANDHALTUNGSMECHANIKER","8","WIL"],
	["AUSBILDUNG FLUGGERAETMECHANIKER|IN","8","WIL"],
	["AUSBILDUNG FLUGGERAETELEKTRONIKER|-IN","8","WIL"],
	["NAEHER|IN IM FLUGZEUGBAU","U","MEM"],
	["RAUMAUSSATTER|SATTLER IM FLUGZEUGBAU","U","MEM"],
	["SPEZIALIST BEREICH SUPPORT TESTSYSTEME","(","MAN"],
	["SOFTWARE ENGINEER C2","(","FDH"],
	["PRAKTIKUM SOFTWAREENTWICKLUNG","@","LIN"],
	["ABSCHLUSSARBEIT ENTW. - MASCHINENBAU","@","LIN"],
	["PRAKTIKUM ANTRIEBSTECHNIK|MECHATRONIK","@","LIN"],
	["PRAKTIKUM KUNDENDIENST","@","LIN"],
	["SCHNUPPERPRAKTIKUM","@","LIN"],
	["TECHNISCHES PRAKTIKUM LUFTFAHRT","@","LIN"],
	["WERKSTUDENT PROJEKTMANAGEMENT: A350","C","HAM"],
	["LACKIERER IM BEREICH A320 FAL","I","HAM"],
	["FLUGGERAETMECHANIKER A320 FAL","I","HAM"],
	["WERKSTUDENT ZULIEFERERMANAGEMENT","C","STA"],
	["PRAKTIKUM QUALITAETSSICHERUNG A380","C","HAM"],
	["FLUGGERAETMECHANIKER AM A380","I","HAM"],
	["PRAKTIKUM OPTIMIERUNG VON Q-PROZESSEN","D","MAN"],
	["INTERNSHIP ENGINEERING: A350","C","HAM"],
	["ELEKTROGERAETEMECHANIKER IDG","I","HAM"],
	["MECHATRONIKER AUTOMATISIERUNGSTECHNIK","I","STA"],
	["PRAKTIKUM MANUFACTURING ENGINEERING","C","STA"],
	["PRAKTIKUM UMWELTSCHUTZ","F","DON"],
	["INTERNSHIP COMMUNICATIONS NEOSHIELD-2","D","FDH"],
	["WIG-SCHWEISSTECHNIKER","I","BRE"],
	["WERKSTUDENT CHANGE MANAGEMENT SUPPORT","C","HAM"],
	["PRAKTIKUM HR: PERSONALMARKETING","C","HAM"],
	["PRAKTIKUM VERTRIEB: SALES + MARKETING","D","ULM"],
	["PROJEKTASSISTENT FLUGSICHERUNG","I","DON"],
	["PRAKTIKUM BUSINESS IMPROVEMENT","F","DON"],
	["WERKSTUDENT IT: ANALYSETOOLS","C","HAM"],
	["INDUSTRIEMECHANIKER TRIEBWERKSTECHNIK","I","HAM"],
	["WERKSTUDENT SUPPLY CHAIN OPERATIONS","D","MAN"],
	["PRAKTIKUM LEAN-MANAGEMENT","D","MAN"],
	["PRAKTIKUM DIGITALELEKTRONIK RAUMFAHRT","D","FDH"],
	["PRAKTIKUM ZULIEFERERMANAGEMENT","C","STA"],
	["RAUMAUSSTATTER LUFTFAHRTINDUSTRIE","I","FRA"],
	["ABSCHLUSSARBEIT IT: SIMULATION","D","MAN"],
	["SACHBEARBEITER PERSONALADMINISTRATION","I","HAM"],
	["AUSSTATTUNGSMECHANIKER A320 FAL","I","HAM"],
	["PRAKTIKUM SOFTWARE- + TOOLENTWICKLUNG","D","MAN"],
	["PRAKTIKUM ELEKTROMAG. VERTRAEGLICHKEIT","D","FDH"],
	["PRAKTIKUM IT: EMBEDDED PROGRAMMIERUNG","D","BRE"],
	["PERSONALSACHBEARBEITER LUFTFAHRT","I","MAN"],
	["FLUGGERAETELEKTRONIKER A350","I","TLS"],
	["PRAKTIKUM COMPETITIVE INTELLIGENCE","D","ULM"],
	["PRAKTIKUM PERFORMANCE MANAGEMENT A350","C","HAM"],
	["PROZESSINGENIEUR FAL SINGLE-AISLE","I","HAM"],
	["PRAKTIKUM PROZESSANALYSE ENDLINIE A320","C","HAM"],
	["WERKSTUDENT CO: KOSTENTRAEGERANALYSE","C","HAM"],
	["WERKSTUDENT KOMMUNIKATIONSTECHNOLOGIE","C","HAM"],
	["ABSCHLUSSARBEITEN SPACE ENGINEERING","D","FDH"],
	["PH.D. AVIONIC COMMUNICATION TECHNOLOGY","E","MUC"],
	["INTERNSHIP ISS COLUMBUS FLUID SC. LAB","D","FDH"],
	["ING. VERFAHRENSENTW. FLUGZEUGWARTUNG","I","HAM"],
	["FINAL THESIS: SOFT CABLE FAILURES","E","MUC"],
];

var debug = false;
var linenumbers = 10;
var offset = linenumbers;
var charnumber = 39;
var lineflipintervall;
var completeflipintervall;
if (debug) {
	lineflipintervall = 1;
	completeflipintervall = 30;
}
else {
	lineflipintervall = 5;
	completeflipintervall = 70;
}
