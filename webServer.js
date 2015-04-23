var PythonShell = require('python-shell');
PythonShell.defaultOptions = { scriptPath: '/home/pi/videoServer/camera.py' }
PythonShell.run('/home/pi/videoServer/camera.py');


var http = require('http');
http.createServer(function (req, res) {
  
}).listen(1234, '127.0.0.1');
