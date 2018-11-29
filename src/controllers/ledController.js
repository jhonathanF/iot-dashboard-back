var serialConnection = require('../models/serialConnection')

function toggleLed(request, response) {
    response.statusCode = 200;
    serialConnection.toggleLed();
    response.end();
}

module.exports = toggleLed;