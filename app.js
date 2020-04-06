require('dotenv').config();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get('/', function(req, res){
    res.render('limitedhome');
});

app.listen(3000, function(req, res){
    console.log('server has started succesfully');
});