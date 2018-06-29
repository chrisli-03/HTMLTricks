function toggle() {
	let text = document.querySelector('#text1');
	if (text.className === 'test' || text.className === 'test reverse') text.className += ' expand'
	else text.className = text.className.replace(' expand', '')

	text = document.querySelector('#text2');
	if (text.className === 'test') text.className += ' expand'
	else text.className = text.className.replace(' expand', '')
}