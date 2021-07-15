const {Router} = require('express');
const healthcheck = require('./healthcheck');

const router = Router();

const getRoutes = () => {
    healthcheck(router);

    return router;
}

module.exports = getRoutes;