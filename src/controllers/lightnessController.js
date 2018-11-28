var serialConnection = require('../models/serialConnection')

function getLightness(request, response) {
    response.statusCode = 200;
    response.write(JSON.stringify({ lightness: serialConnection.getLightness() }));
    response.end();
}

module.exports = getLightness;