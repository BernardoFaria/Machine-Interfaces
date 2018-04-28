function time() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	h = checkTime(h);
	m = checkTime(m);
	document.getElementById('hours').innerHTML = h + ":" + m;
	var t = setTimeout(time, 500);
}
		
function checkTime(i) {
	if (i < 10) {i = "0" + i}; //add zero in front of numbers < 10
		return i;
	}
