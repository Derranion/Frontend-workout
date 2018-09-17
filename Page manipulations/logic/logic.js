function switchStyle() {
	let elems = [...document.querySelectorAll('button')];
	elems.forEach( el => el.classList == '' ? el.classList.add('highlightBtn') 
											: el.classList = '' );
}

function displayOrNot() {
	let elems = [...document.querySelectorAll('.button-wrapper :nth-child(-n+2)')];
	elems.forEach( el => el.style.display == '' ? el.style.display='none' 
												: el.style.display='' );
}