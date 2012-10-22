var assert = require('assert');

var repository = require('../lib/repository');
var TodoList = require('../lib/todolist');


describe('A Repository', function(){
    describe('(local)', function(){
        it('should be able to store TodoList', function(){
            var repo = new repository.local();            

            repo.store(new TodoList());
            
            var count = 0;
            repo.all(function(){ count++ });
            assert.equal(count, 1);
        });
        
        it('should be able to retrieve a TodoList', function(){
            var repo = new repository.local();
            var id = repo.store(new TodoList());
            
            var list = repo.retrieve(id);
            
            assert.ok(list != null);
        });
        
        it('should accept a callback', function(){
            var repo = new repository.local();
            var id = repo.store(new TodoList());
            
	    var list;
            repo.retrieve(id, function(err, todoList){
		list = todoList;
	    });
            
            assert.ok(list != null);
        });
    });
});