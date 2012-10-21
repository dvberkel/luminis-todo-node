var _ = require('underscore');

var Local = function(){
    this.storage = [];
};

Local.prototype.store = function(todoList) {
    this.storage.push(todoList);
    return this.storage.length - 1;
};

Local.prototype.all = function(callback) {
    _.each(this.storage, callback, this);
};

Local.prototype.retrieve = function(index) {
    return this.storage[index];
};
 
exports.local = Local;