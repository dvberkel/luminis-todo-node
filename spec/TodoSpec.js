var assert = require('assert');
var Todo = require('../lib/todo');

describe("A Todo", function(){
    it("should have a default id", function(){
	var todo = new Todo();

	assert.ok(todo.get('id') != undefined);
    });
});