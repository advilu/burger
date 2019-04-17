const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());