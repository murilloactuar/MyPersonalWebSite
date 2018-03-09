(function () {

	// const urlProd = 'https://murilloves.github.io/';

	let urlDev = window.location.href;
	urlDev = urlDev.split('/index')[0];
	const path = '/my-tag/';

	const myTag = document.getElementsByTagName('my-tag')[0];

	console.log(urlDev + path + 'my-tag.html');

	var xhr= new XMLHttpRequest();
	xhr.open('GET', urlDev + path + 'my-tag.html', true);
	xhr.onreadystatechange= function() {
	    if (this.readyState!==4) return;
	    if (this.status!==200) return;
	    document.getElementsByTagName('my-tag')[0].innerHTML= this.responseText;
	};
	xhr.send();

})();
