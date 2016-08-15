const mongoose = require('mongoose');

let todoSchema = new mongoose.Schema({
 
});

let Todo = mongoose.model('Todo', todoSchema);   

module.exports = Todo;