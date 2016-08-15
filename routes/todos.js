var express = require('express');
var router = express.Router();

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

module.exports = router;
