const mongoose = require('mongoose');

let todoSchema = new mongoose.Schema({
  name: String
});

let Todo = mongoose.model('Todo', todoSchema);   

module.exports = Todo;