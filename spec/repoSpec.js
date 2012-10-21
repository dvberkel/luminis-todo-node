var assert = require('assert');
var Repository = require('../lib/repository');
var Todo = require('../lib/todo');

describe('Todo Repository', function(){
    it('should store todo objects', function(){
        var repo = new Repository();

        repo.add(new Todo());

        assert.equal(repo.size(), 1);
    });
});