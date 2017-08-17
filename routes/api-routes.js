let email = require('../public/assets/javascript/email.js')

module.exports = function(app) {
    app.post('/api/email', (req, res) => {
        email(req.body.email, req.body.message)
        res.redirect('/');
    })
}