var express = require('express');
var route = require('./route');

var app = express();

app.set('port', process.env.PORT);

app.get('/', route.allTodoLists);
app.post('/', route.createTodoList);

app.listen(app.get('port'));