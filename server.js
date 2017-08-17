let express = require('express');
let bodyParser = require('body-parser');

let app = express();
let port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));
app.use(express.static('./public'));

require('./routes/html-routes')(app);
require('./routes/api-routes')(app);

app.listen(port, function() {
    console.log('Running.')
});