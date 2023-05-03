//https://youtu.be/63IurQvsw9w
var express= require("express");
var bodyParser= require("body-parser");
var cors= require("cors");
var path= require ("path");

var app=express();
app.use(bodyParser.json());
app.use(cors());

app.set('views',path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.get('/', function(request,response){})
response.render("index.ejs")
app.listen(3000, function(){console.log("on port 8000")})