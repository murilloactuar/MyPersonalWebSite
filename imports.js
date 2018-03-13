const components = [
	['components/append-tags.js'],
]

const paths = [
	['scripts.js'],
	['my-tag/my-tag.js'],
	['your-tag/your-tag.js'],
];

let scriptIndex = 0;

(function includeHTML() {

	function insertScript(source, callback) {
		let script = document.createElement('script');
		let prior = document.getElementsByTagName('script')[scriptIndex];
		scriptIndex++;
		script.async = 1;

		script.onload = script.onreadystatechange = function( _, isAbort ) {
			if(isAbort || !script.readyState || /loaded|complete/.test(script.readyState) ) {
				script.onload = script.onreadystatechange = null;
				script = undefined;

				if(!isAbort) {
					if(callback) {
						console.log('innerCallback', callback);
						callback;
					}
				}
			}
		};

		script.src = source;
		prior.parentNode.insertBefore(script, prior);
		// console.log('innerCallback', source);
		callback;
	}

	function importSources(sources, callback) {
		for (let source of sources) {
			insertScript(source, null);
		}
		// console.log('outterCallback', sources);
		callback;
	}

	(function importScripts() {
		// FIRST IMPORT THE COMPONENTS, THEN, AFTER THE CALLBACK, IMPORT THE PATHS
		importSources(paths, importSources(components));
	})();

})();
