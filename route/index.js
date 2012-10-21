var repository = require('../lib/repository');
var TodoList = require('../lib/todolist');

var repo = new repository.local();

exports.allTodoLists = function(req, res) {
    var ids = [];
    repo.all(function(element, id){ ids.push(id); });
    
    res.json({ ids : ids });
};

exports.createTodoList = function(req, res) {
    var id = repo.store(new TodoList());
    
    res.json({ id : id });
}