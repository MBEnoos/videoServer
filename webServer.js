var PythonShell = require('python-shell');
var http = require('http');
var fs = require('fs');
PythonShell.defaultOptions = { scriptPath: '/home/pi/videoServer/camera.py' };
PythonShell.run('/home/pi/videoServer/camera.py');

http.createServer(function (req, res) {stream = fs.createReadStream('home/pi/PathToFile');
stream.on('open', function () {
    res.writeHead(206, {
        "Content-Range": "bytes " + start + "-" + end + "/" + total,
            "Accept-Ranges": "bytes",
            "Content-Length": chunksize,
            "Content-Type": "video/mp4"
    });});}).listen(1234, '127.0.0.1');


