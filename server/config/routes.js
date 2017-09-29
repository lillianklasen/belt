var Users = require('../controllers/users');
var Appointments = require('../controllers/appointments');
var path = require('path');

module.exports = function(app) {
    app.post('/users', Users.create);
    app.get('/users', Users.index);
    app.delete('/users', Users.logout);
    app.get('/session', Users.session);

    app.get('/appointments', Appointments.index);
    app.post('/appointments', Appointments.create);
    app.delete('/appointments/:id', Appointments.destroy);

    app.all('*', (req, res) => {
        res.sendFile(path.resolve('./public/dist/index.html'));
    })
}
