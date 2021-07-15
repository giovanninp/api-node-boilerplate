const express = require('express');
const config = require('config');

const createApp = (routes) => {
    const app = express();

    app.set('port', process.env.PORT || config.get('server.port'));
    app.use(express.json());
    app.use(routes);

    return app;
};

module.exports = createApp;