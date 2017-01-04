/***** 
*	Javascript Function in Common Use
*  Author: Helyao
*/

// Load One Javascript File
function staticJSLoad(js) {
	var addJs = document.createElement("script");
	addJs.setAttribute("type","text/javascript");
	addJs.setAttribute("src",js);
	document.body.appendChild(addJs);
}

// Load Two Javascript Files in Order
// Eg => dynamicJSLoad(<former js file>, <latter js file>);
function addJS(jsurl) {		// internal call
	var addJs = document.createElement("script");
	addJs.setAttribute("type","text/javascript");
	addJs.setAttribute("src",jsurl);
	document.body.appendChild(addJs);
	return addJs;
}
function dynamicJSLoad(jsformer, jslatter) {		// Ex Interface
	former = addJS(jsformer);
	former.onload = former.onreadystatechange = function () {
		if (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') {
			addJS(jslatter);
		}
		former.onload = former.onreadystatechange = null;
	};
}

// Get timestamp as yyyymmddHHMMSS
// Eg => currentTime(); => 20160621171006
function currentTime() {
	var dataStamp = new Date();
	var year = dataStamp.getFullYear().toString();
	var month = (dataStamp.getMonth()+1).toString();
	month = ((month < 10) ? "0" : "") + month;
	var day = dataStamp.getDate().toString();
	day = ((day < 10) ? "0" : "") + day;
	var hour = dataStamp.getHours().toString();
	hour = ((hour < 10) ? "0" : "") + hour;
	var minute = dataStamp.getMinutes().toString();
	minute = ((minute < 10) ? "0" : "") + minute;
	var second = dataStamp.getSeconds().toString();
	second = ((second < 10) ? "0" : "") + second;
	return year+month+day+hour+minute+second;
}

// Add Event Callback when window.onload
// Eg => addLoadEvent(function () { do_something; });
function addLoadEvent(func) {
	var oldonload = window.onload;
	if(typeof  window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

// Get High-precision Decimal
// Eg => round2(1.23564, 2) => 1.24
function round2(number,fractionDigits){
	with(Math){
		return round(number*pow(10,fractionDigits))/pow(10,fractionDigits);
	}
}
