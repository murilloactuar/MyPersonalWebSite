const importPaths = [
	['scripts.js'],
	['my-tag/my-tag.js'],
	['your-tag/your-tag.js'],
];

(function includeHTML() {

	function insertScript(source, callback) {
		let script = document.createElement('script');
		let prior = document.getElementsByTagName('script')[0];
		script.async = 1;

		script.onload = script.onreadystatechange = function( _, isAbort ) {
			if(isAbort || !script.readyState || /loaded|complete/.test(script.readyState) ) {
				script.onload = script.onreadystatechange = null;
				script = undefined;

				if(!isAbort) { if(callback) callback(); }
			}
		};

		script.src = source;
		prior.parentNode.insertBefore(script, prior);
	}

	(function importScripts() {
		for (let source of importPaths) {
			insertScript(source, null);
			console.log(source);
		}
	})();

})();
