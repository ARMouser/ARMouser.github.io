var path = require('path');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '/../public/html/index.html'));
    });
    
    app.get('/projects', (req, res) => {
        res.sendFile(path.join(__dirname, '/../public/html/projects.html'))
    });

    app.get('/resume', (req, res) => {
        res.sendFile(path.join(__dirname, '/../public/html/resume.html'))
    });

    app.get('/contact', (req, res) => {
        res.sendFile(path.join(__dirname, '/../public/html/contact.html'))
    });
}