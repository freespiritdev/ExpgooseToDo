var express = require('express');
var router = express.Router();

let Todo = require('../models/todo');

//Get todos
router.get('/', (req, res) => {
  Todo.find({}, (err, todos) => { 
    if(err){
      res.status(400).send(err);
    }else{
      res.send(todos);
    }
  });
});

router.get('/:id', (req, res) => {
  Todo.findById(req.params.id, (err, todo) => {
    if(err || !todo) {
      res.status(400).send(err || 'Todo not found' )
    }else {
      res.send(todo);
    }
  });
  Todo.put()
});



router.post('/', (req, res) => {
  let todo = new Todo(re.body);

  todo.save((err, savedTodo) => {
    res.status(err ? 400 : 200).send(err || savedTodo);
  });
});

module.exports = router;
