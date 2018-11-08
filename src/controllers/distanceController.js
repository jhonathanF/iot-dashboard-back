var serialConnection = require('../models/serialConnection')

function getDistance(request, response) {
    response.statusCode = 200;
    response.write(JSON.stringify({ distance: serialConnection.getDistance() }));
    response.end();
}

module.exports = getDistance;