const {express} = require('./config');
const {routes} = require('./app/');

const app = express(routes());
const port = app.get('port');

app.listen(port, () => {
    console.log(`Listening into localhost:${port}`)
});