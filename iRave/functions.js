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

function date() {
	var today = new Date();
	var d = today.getDate();
	var m = today.getMonth()+1;
	var y = today.getFullYear();
			
	if(d<10) {d = "0" + d};
	if(m<10) {m = "0" + m};		
		document.getElementById('date').innerHTML = d + "/" + m + "/" + y;
		console.log("today");
}

function changeScreens() {
	
}