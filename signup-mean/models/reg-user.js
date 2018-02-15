
const mongoose = require("mongoose");

const RegUserSchema = mongoose.Schema({
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

var RegUser = module.exports = mongoose.model("Reg-user", RegUserSchema);

// Get registered users
module.exports.getRegUsers = (callback, limit) => {
    RegUser.find(callback).limit(limit);
}

// get a single registered user by id
module.exports.getRegUserById = (id, callback) => {
    RegUser.findById(id, callback);
}

// post new registered user
module.exports.addRegUser = (reguser, callback) => {
    RegUser.create(reguser, callback);
}

// Update registered user
module.exports.updateRegUser = (id, reguser, options, callback) => {
    var query = {_id: id};
    var update = {
        first_name: reguser.first_name,
        last_name: reguser.last_name,
        phone: reguser.phone
    }
    RegUser.findByIdAndUpdate(query, update, options, callback);
}

// remove registered user
module.exports.removeRegUser = (id, callback) => {
    var query = {_id: id};
    RegUser.remove(query, callback);
}
