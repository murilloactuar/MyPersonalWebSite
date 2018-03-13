(function () {

	let urlDev = window.location.href;
	urlDev = urlDev.split('/index')[0];
	const path = '/your-tag/';

	const yourTag = document.getElementsByTagName('your-tag')[0];

	console.log(urlDev + path + 'your-tag.html');

	var xhr= new XMLHttpRequest();
	xhr.open('GET', urlDev + path + 'your-tag.html', true);
	xhr.onreadystatechange= function() {
	    if (this.readyState!==4) return;
	    if (this.status!==200) return;
	    document.getElementsByTagName('your-tag')[0].innerHTML= this.responseText;
	};
	xhr.send();

})();
