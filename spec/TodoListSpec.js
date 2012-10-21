var assert = require('assert');
var TodoList = require('../lib/todolist');
var Todo = require('../lib/todo');

describe('Todo List', function(){
    it('should store todo objects', function(){
        var repo = new TodoList();

        repo.add(new Todo());

        assert.equal(repo.size(), 1);
    });
    
    it('should allow naked todo objects', function(){
        var repo = new TodoList();
        
        repo.add({ "message" : "work" });
        
        assert.equal(repo.size(), 1);
    });
});