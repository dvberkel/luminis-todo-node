var Backbone = require('backbone');

var Todo = Backbone.Model.extend({
    initialize : function(){
        this.set('timestamp', new Date().getTime());
    }
});

module.exports = Todo;