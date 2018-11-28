const orderBook = [];

var port;

async function initSerialConnection() {
    var SerialPort = require('serialport');

    port = new SerialPort('COM3', {
        baudRate: 115200
    }, function (err) {
        console.log('asaaa')
        if (err) {
            return console.log('Error: ', err.message);
        }
    });
    var buffer = '';
    port.on('data', function (chunk) {
      
        buffer += chunk;
        if (buffer.length > 1000)
            buffer = '';
        var regex = /({.+})/
        var objects = buffer.match(regex);
        if (objects && objects.length) {
            var object = objects.pop();
            buffer = '';
            try {
                obj = JSON.parse(object);
            } catch (e) {console.error(e); console.log(object) }
            console.log('consegui', obj);
        }
        console.log(buffer)
    });
    console.log("Initiated DataBase connection");
}

var obj = {
    distance: 0,
    lightness: 1,
    temperature: 1
}
getDistance = () => obj.distance;
getLightness = () => obj.lightness;
module.exports = {
    orderBook,
    initSerialConnection,
    getDistance,
    getLightness
}