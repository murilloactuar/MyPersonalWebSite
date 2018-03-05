window.onload = function() {
	(function replaceAge() {
		let template = document.getElementById('age').innerHTML;

		const bornDate = new Date('10/02/1990');
		const difference_ms = Date.now() - bornDate.getTime();
		let yearsOld = new Date(difference_ms);

		template = template.replace('{{ Age }}', yearsOld.getUTCFullYear() - 1970);

		document.getElementById('age').innerHTML = template;
	})();
};
