var Backbone = require('backbone');
var Todo = require('./todo');

var TodoList = Backbone.Collection.extend({
    model : Todo
});

module.exports = TodoList;