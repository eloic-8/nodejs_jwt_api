const api_controller = require('../controller/api.controller');
const auth = require('../config/auth');

module.exports = function(app) {
    app.get('/', (req, res) => {
        res.status(501).send('Forbidden');
    });

    app.get('/api', auth.verifyToken, api_controller.indexApi);
    app.post('/login', api_controller.doLoginApi);
}