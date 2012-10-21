var express = require('express');
var route = require('./route');

var app = express();

app.set('port', process.env.PORT);

app.get('/', route.allTodoLists);

app.listen(app.get('port'));