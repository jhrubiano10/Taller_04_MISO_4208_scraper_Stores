"use strict";
const express = require("express");
const helmet = require('helmet');
const app = express();
const cons = require("consolidate");
const compression = require('compression');
const bodyParser = require('body-parser');
const router = require('./router');
const server = require('http').createServer(app);

app.enable("trust proxy");

app.use(helmet());
app.use(helmet.hidePoweredBy({ setTo: 'Developed by https://jorger.github.io/page/es/' }));
app.engine("html", cons.swig);
app.set("view engine", "html");
app.set("views", __dirname + "/views");
app.use(compression());
app.use(express.static('public'));	
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use('/', router);
server.listen(process.env.PORT || 5000, (err) => {
    if(err) throw err;
    console.log(`Servidor corriendo en @ http://localhost:${server.address().port}`);
});