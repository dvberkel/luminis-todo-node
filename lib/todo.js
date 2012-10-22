var Backbone = require('backbone');

var Todo = Backbone.Model.extend({
    initialize : function(){ 
	var timestamp = new Date().getTime();
	if(!this.has('timestamp')) {
	    this.set('timestamp', timestamp);
	}
	if (!this.has('id')) {
	    this.set('id', timestamp);
	}
    }
});

module.exports = Todo;