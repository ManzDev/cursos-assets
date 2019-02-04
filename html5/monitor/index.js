function play() {
	document.querySelector('.first-slide').style.display = 'none!important';
	document.querySelector('#song').play();
	document.querySelector('#cinema').removeAttribute('class');
}