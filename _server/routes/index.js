const express = require("express");
const router = express.Router();
const Employee = require('../models/employee');
const auth = require('../middleware/auth');


// @route   GET api/employees
// @desc    Get All Employees
// @access  Private requires the user to have log first


router.get('/', auth, function(req, res){
    Employee.find(function(err, employees){
        res.json(employees);
    });
});

module.exports = router;