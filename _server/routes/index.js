const express = require("express");
const router = express.Router();
const Employee = require('../models/employee');

console.log("get employees")

router.get('/employees', function(req, res){
    Employee.find(function(err, employees){
        res.json(employees);
    });
});

module.exports = router;