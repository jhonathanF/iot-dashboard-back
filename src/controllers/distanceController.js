
function getDistance(request, response) {
    var random = Math.floor(Math.random() * 100);
    response.statusCode = 200;
    response.write(JSON.stringify({ distance: random }));
    response.end();
}

module.exports = getDistance;