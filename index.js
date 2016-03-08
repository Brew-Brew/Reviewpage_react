'use strict';
const express = require('express'),
    routes = require('./routes'),
    http = require('http'),
    path = require('path'),
    ejs = require('ejs');


var app = express();

// all environments
if (!!!process.env.PORT) {
    console.error("need PORT Information. run 'npm start'");
    process.exit(1);
}

app.set('port', process.env.PORT);
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});