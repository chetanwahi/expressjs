const http = require('http');
const express = require('express');
const app = require();
const path = require('path');
const index = require('./index');
const gallery = require('./gallery');
const menu = require('./menu');
const about = require('./about');
const contact = require('./contact');
const food = require('./food');

app.use(express.static(__dirname + '/img'));
app.use(express.static(__dirname + '/css'));

app.use(index);
app.use(gallery);
app.use(menu);
app.use(about);
app.use(contact);
app.use(food);

const server = http.createServer(app);
server.listen(3009);
