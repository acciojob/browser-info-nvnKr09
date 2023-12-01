//your JS code here. If required.
const div = document.getElementById('browser-info');

div.innerHTML = `
	You are using ${navigator.appName} ${navigator. appVersion} ${navigator.userAgent}.
`