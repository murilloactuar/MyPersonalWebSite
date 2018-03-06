(function () {

	const urlBase = 'https://murilloves.github.io/'

	const myTag = document.getElementsByTagName('my-tag')[0];
	// const myTagModule = document.getElementById('my-tag').load('my-tag.html');

	var xhr= new XMLHttpRequest();
	xhr.open('GET', urlBase + 'contato.html', true);
	xhr.onreadystatechange= function() {
	    if (this.readyState!==4) return;
	    if (this.status!==200) return; // or whatever error handling you want
	    document.getElementsByTagName('my-tag')[0].innerHTML= this.responseText;
	};
	xhr.send();

	console.log(myTag);
	// console.log(myTagModule);
})();
