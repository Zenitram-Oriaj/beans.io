exports.description = "Setup For A Basic BEANS Project (Bootstrap Express Angular Node Socket.IO)";

exports.template = function (grunt, init, done) {

	init.process({}, [
			init.prompt("name"),
			init.prompt("description", "A BEANS Project"),
			init.prompt("version", "0.1.0"),
			init.prompt("licenses", "MIT"),
			init.prompt("author_name"),
			init.prompt("author_email"),
			init.prompt("author_url")
		],
		function (err, props) {

			var files = init.filesToCopy(props);
			init.addLicenseFiles(files, props.licenses);
			init.copyAndProcess(files, props);

			init.writePackageJSON("package.json", {
				name:            props.name,
				version:         props.version,
				description:     props.description,
				main:            "server.js",
				author:          {
					name: props.author_name,
					email: props.author_email,
					url:  props.author_url
				},
				scripts:         {
					start: "nodemon server.js",
					test:  "echo \"Error: no test specified\" && exit 1"
				},
				dependencies:    {
					"body-parser":   "~1.15.1",
					"cookie-parser": "~1.4.3",
					"ejs":           "~2.4.1",
					"express":       "~4.13.4",
					"serve-favicon": "~2.3.0",
					"socket.io":     "^1.5.0"
				},
				devDependencies: {
					"grunt":                  "^1.0.1",
					"grunt-contrib-clean":    "^1.0.0",
					"grunt-contrib-concat":   "^1.0.1",
					"grunt-contrib-jshint":   "^1.0.0",
					"grunt-contrib-nodeunit": "^1.0.0",
					"grunt-contrib-uglify":   "^2.0.0",
					"grunt-contrib-watch":    "^1.0.0",
					"nodemon":                "latest"
				}
			});
			done();
		});
};