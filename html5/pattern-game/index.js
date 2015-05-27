// Esperamos a que cargue el DOM
document.addEventListener("DOMContentLoaded", function(event) { 

	var content = document.getElementById('content')
	var userinput = document.querySelector('#userinput')
	userinput.oninput = function(e) { 
		
		// input = e.target.value
		//

		//RegExp(e.target.value).test()
		var heads = document.querySelectorAll('#content .user')
		var targets = document.querySelectorAll('#content .target');

		for (var i = 0; i < targets.length; i++) {

			try {
				r = RegExp("^" + e.target.value + "$").test(targets[i].textContent)
			}
			catch (e) {
				console.log("r:", r)
				//console.log("error: ", e.message)
			}
			if (r) {
				heads[i].classList.add('ok');
				//heads[i].classList.remove('fail');
			}
			else {
				//heads[i].classList.add('fail');
				heads[i].classList.remove('ok');
			}

		}

	}

	addUser('55138491T', ['dance']); //, 'Un usuario que ha introducido su DNI en el formulario...')
	addUser('88193745c', ['smile'])
	addUser('44216634R', ['mustache'])
	addUser('H74AFXF-3', ['angrymouth', 'orc', 'fangs', 'brows'])
	addUser('X2476171F', ['black'])

});

function createDiv(class) {
	var div = document.createElement('div')
	div.classList.add(class)
	return div
}

function addUser(text, options, tooltip) {

	var options = options || []
	options.exists = function(i) {
		if (this.indexOf(i) > -1)
			return true
		else
			return false
	}

	// Head
	var head = createDiv('head')
	if (options.exists('black'))
		head.classList.add('black')
	if (options.exists('orc'))
		head.classList.add('orc')

	// Eyes
	var pupil = createDiv('pupil')
	var eyeL = createDiv('eye')
	eyeL.appendChild(pupil)
	var eyeR = createDiv('eye')
	var pupilR = pupil.cloneNode()
	eyeR.appendChild(pupilR)
	head.appendChild(eyeL)
	head.appendChild(eyeR)

	// Brows
	if (options.exists('brows')) {
		var browL = createDiv('brows')
		var browR = createDiv('brows')
		eyeL.appendChild(browL)
		eyeR.appendChild(browR)	
	}

	// Mustache/nose
	if (options.exists('mustache')) {
		var mustache = createDiv('mustache')
		head.appendChild(mustache)
	}

	// Mouth
	if (options.exists('happymouth'))
		var mouth = createDiv('happymouth')
	else if (options.exists('angrymouth'))
		var mouth = createDiv('angrymouth')
	else if (options.exists('smile'))
		var mouth = createDiv('smile')
	else
		var mouth = createDiv('mouth')

	if (options.exists('fangs')) {
		var fangL = createDiv('fangs')
		var fangR = createDiv('fangs')
		mouth.appendChild(fangL)
		mouth.appendChild(fangR)
	}

	head.appendChild(mouth)

	// User
	var user = createDiv('user');
	if (options.exists('dance'))
		user.classList.add('dance')
	user.appendChild(head)

	var target = createDiv('target')
	target.textContent = text
	user.appendChild(target)

	//if (tooltip)
	//	user.setAttribute('data-tooltip', tooltip)

	content.appendChild(user)
	return user

}

function clearLevel() {
	content.innerHTML = ''
}