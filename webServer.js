var PythonShell = require('python-shell');
var http = require('http');
var fs = require('fs');
PythonShell.defaultOptions = { scriptPath: '/home/pi/videoServer/camera.py' };
http.createServer(function (req, res) {PythonShell.run('/home/pi/videoServer/camera.py');}).listen(1234, '127.0.0.1');


