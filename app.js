var express = require('express');
var route = require('./route');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.bodyParser());

app.param('todolistid', route.retrieveTodoList);

app.get('/', route.allTodoLists);
app.post('/', route.createTodoList);
app.get('/:todolistid', route.allTodos);
app.post('/:todolistid', route.createTodo);

app.listen(app.get('port'));