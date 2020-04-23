require('dotenv').config();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
Post = require('./api/models/postModel');
Comment = require('./api/models/postModel');
const passport = require('passport');
mongoose.connect('mongodb://localhost:27017/skrawlDB', { useNewUrlParser: true , useUnifiedTopology : true});

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.static("uploads"));



const routes = require('./api/routes/postRoutes');

routes(app);
// const Post = new mongoose.model("Post", postSchema);


app.listen(3000, function(req, res){
    console.log('server has started succesfully');
});




