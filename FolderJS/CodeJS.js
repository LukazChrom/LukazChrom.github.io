const SP = "!$!WEBpast421";

//alert("SSL: " + sessionStorage.length);

var varP;

var denialCounter = sessionStorage.length;

if(denialCounter == 0){
	varP = prompt("Welcome to L's 100%-self programmed Prototype-Webpage, please enter the password", "");
	sessionStorage.setItem('UserPassword', varP);
}

if(sessionStorage.getItem('UserPassword') == SP && denialCounter == 0) {
	alert("Passwort richtig :D");
}


if(sessionStorage.getItem('UserPassword') == SP) {

	var YTlink = document.getElementById("YT-Channel");
	YTlink.innerHTML = "YT-Glory-ALL";			//HERE I MADE CHANGES IN 2025;
	YTlink.style.display = "inline";

	YTlink.style.color = "#0e274f";							//Waere richtig aetzend hier jetzt anders vorzugehgen XD
	YTlink.style.background = "#0e274f";	           	 	//Also einfach die Farben nutzen :) Ist ja hier nicht sichherheitsrelevant <D

	YTlink.addEventListener("mouseenter", function() {
		YTlink.style.color = "white";
	YTlink.style.background = "red";
	});
	YTlink.addEventListener("mouseleave", function() {
		YTlink.style.color = "#0e274f";
	YTlink.style.background = "#0e274f";
	});


}else if(denialCounter == 0) {
	alert("Passwort nicht richtig eingegeben :(");
}

//alert("Die Eingabe: " + sessionStorage.getItem('UserPassword') + " _ SSL: " + sessionStorage.length);
