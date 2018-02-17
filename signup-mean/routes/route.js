
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

module.exports = router;
