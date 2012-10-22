var repository = require('../lib/repository');
var TodoList = require('../lib/todolist');

var repo = new repository.local();

exports.retrieveTodoList = function(req, res, next, id) {
    repo.retrieve(id, function(err, todoList){
	if (err) {
	    next(err);
	} else {
	    req.todoList = todoList;
	    next();
	}
    });
}

exports.retrieveTodo = function(req, res, next, id) {
    var todoList = req.todoList;
    if(todoList) {
	var todos = todoList.where({ 'id' : id });
	console.log(id);
	console.log(todos.length);
	if (todos.length === 1) {
	    req.todo = todos[0];
	    next();
	} else {
	    next(new Error("Wrong number of todos"));
	}
    } else {
	next(new Error("todoList not found"));
    }
}

exports.allTodoLists = function(req, res) {
    var ids = [];
    repo.all(function(element, id){ ids.push(id); });
    
    res.json({ ids : ids });
};

exports.createTodoList = function(req, res) {
    var id = repo.store(new TodoList());
    
    res.json({ id : id });
}

exports.allTodos = function(req, res) {
    res.json(req.todoList.toJSON());
}

exports.createTodo = function(req, res) {
    req.todoList.add(req.body);
    res.json(req.body);
}

exports.todo = function(req, res) {
    res.json(req.todo.toJSON());
}