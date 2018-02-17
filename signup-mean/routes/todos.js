
var express = require("express");
var router = express.Router();

// CONNECTION ON MLAB
// var mongojs = require("mongojs");
// var db = mongojs("mongodb://admin:admin@ds159707.mlab.com:59707/todosdb", ["todos"]);

const Todo = require("../models/todo");

router.get("/todos", (req, res) => {
    Todo.getTodos((err, todos) => {
        if(err) {
            res.send(err);
        }
        res.json(todos);
    });
});

//  Get a single todo user 
router.get("/todo/:id", (req, res) => {
    Todo.getTodoById(req.params.id, (err, todo) => {
        if (err) {
            throw err;
        }
        console.log("Get a single todo");
        res.json(todo);
    });
});

// add new todo
router.post("/todo", (req, res) => {
    var todo = req.body;
    Todo.addTodo(todo, (err, todo) => {
        if (err) {
            throw err;
        }
        res.json(todo);
    });
});

//update todo
router.put("/todo/:id", (req, res) => {
    var id = req.params.id;
    var todo = req.body;
    Todo.updateTodo(id, todo, {}, (err, todo) => {
        if(err) {
            throw err;
        }
        res.json(todo);
    });
});

// remove todo
router.delete("/todo/:id", (req, res) => {
    var id = req.params.id;
    Todo.removeTodo(id, (err, todo) => {
        if (err) {
            throw err;
        }
        res.json(todo);
    });
});

module.exports = router;
