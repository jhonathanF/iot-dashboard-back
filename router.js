const url = require('url');
const getDistance = require('./src/controllers/distanceController');
const getLightness = require('./src/controllers/lightnessController');
const toggleLed= require('./src/controllers/ledController');
const notFound = require('./src/controllers/notFoundController');
const routes = {
    '/distance': {
        'GET': getDistance
    },
    '/lightness': {
        'GET': getLightness
    },
    '/led': {
        'GET': toggleLed
    }
};

function router(request, response) {
    const parsedUrl = url.parse(request.url);

    const routeHandler = routes[parsedUrl.pathname] &&
        routes[parsedUrl.pathname][request.method];

    if (!routeHandler) {
        return notFound(request, response);
    }

    return routeHandler(request, response);
}

module.exports = router;