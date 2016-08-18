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

router.put("/:id", (req, res) => {
  Todo.findByIdAndUpdate(req.params.id, req.body, (err, todo) => {
    if(err || !todo) {
      res.status(400).send(err || 'Todo not found')
    } else {
      res.send(todo);
      }
    })
});

router.delete('/:id', (req, res) => {
  Todo.findByIdAndRemove(req.params.id, (err, todo) => {
    if(err) {
      res.status(400).send(err || 'Todo not found!')
    }else {
      res.send('Item deleted!');
    }
  });
});

router.post('/', (req, res) => {
  let todo = new Todo(req.body);

  todo.save((err, savedTodo) => {
    res.status(err ? 400 : 200).send(err || savedTodo);
  });
});

module.exports = router;
