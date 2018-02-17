
const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }
});

const Todo = module.exports = mongoose.model("Todo_traver", TodoSchema);

// Get all todos
module.exports.getTodos = (callback, limit) => {
    Todo.find(callback).limit(limit);
}

// get a single todo by id
module.exports.getTodoById = (id, callback) => {
    Todo.findById(id, callback);
}

// post new todo
module.exports.addTodo = (todo, callback) => {
    Todo.create(todo, callback);
}

// Update Todo
module.exports.updateTodo = (id, todo, options, callback) => {
    var query = { _id: id };
    var update = {
        first_name: reguser.first_name,
        last_name: reguser.last_name,
        phone: reguser.phone
    }
    Todo.findByIdAndUpdate(query, update, options, callback);
}

// remove Todo
module.exports.removeTodo = (id, callback) => {
    var query = { _id: id };
    Todo.remove(query, callback);
}

