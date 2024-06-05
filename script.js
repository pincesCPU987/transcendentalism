var elems = document.querySelectorAll('p');

for (var i = 0; i < elems.length; i++) {
	elems[i].innerHTML = elems[i].innerHTML.split('e').join('<span class="e">e</span>');
}
