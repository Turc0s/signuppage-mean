
const express = require("express");
const router = express.Router();

const RegUser = require("../models/reg-user");

// Get all registered user
router.get("/regusers", (req, res) => {
    RegUser.getRegUsers((err, regusers) => {
        if (err) {
            throw err;
        }
        console.log("inside getRegUsers()");
        res.json(regusers);
    });
});

//  Get a single registered user 
router.get("/reguser/:id", (req, res) => {
    RegUser.getRegUserById(req.params.id, (err, reguser) => {
        if (err) {
            throw err;
        }
        console.log("Get single reguser");
        res.json(reguser);
    });
});

// add new registered user
router.post("/reguser", (req, res) => {
    var reguser = req.body;
    RegUser.addRegUser(reguser, (err, reguser) => {
        if (err) {
            throw err;
        }
        res.json(reguser);
    });
});

//update registered user
router.put("/reguser/:id", (req, res) => {
    var id = req.params.id;
    var reguser = req.body;
    RegUser.updateRegUser(id, reguser, {}, (err, reguser) => {
        if(err) {
            throw err;
        }
        res.json(reguser);
    });
});

// remove registered user
router.delete("/reguser/:id", (req, res) => {
    var id = req.params.id;
    RegUser.removeRegUser(id, (err, reguser) => {
        if (err) {
            throw err;
        }
        res.json(reguser);
    });
});


// ---------------------------------- todos

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
