const orderBook = [];

var port;

async function initSerialConnection() {
    var SerialPort = require('serialport');

    port = new SerialPort('COM3', {
        baudRate: 115200
    }, function (err) {
        if (err) {
            return console.log('Error: ', err.message);
        }
    });

    var buffer = '';
    port.on('data', function (chunk) {
        buffer += chunk;
        var answers = buffer.split(/\r?\n/); 
        buffer = answers.pop(); 

        console.log(buffer)
        console.log(answers)
    });
    console.log("Initiated DataBase connection");
}
module.exports = {
    orderBook,
    initSerialConnection
}