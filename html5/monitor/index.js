function play() {
	document.getElementById('f0').setAttribute('style', 'display:none!important');
	document.getElementById('song').play();
	document.getElementById('cinema').removeAttribute('class');
}