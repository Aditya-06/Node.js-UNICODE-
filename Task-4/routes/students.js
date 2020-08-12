var express = require("express");
var router = express.Router();
var listOfStudents = require('../model/students.js')

// ===================================================================================================================
// ===================================================================================================================
//                                     ROUTES
// ===================================================================================================================
// ===================================================================================================================

// default route will redirect to the home page
router.get("/", function(req, res) {
    res.redirect("/register");
});

// home page route 
router.get("/register", function (req, res) {
    let student;
    res.render("index", {listOfStudents: listOfStudents, student: student});
    
});

// POST ROUTE -- endpoint where the form is stored
router.post("/register", function (req, res) {
    var student = new listOfStudents({
        name: req.body.student.first + " " + req.body.student.last,
        score: {
            engMarks: parseInt(req.body.student.english),
            mathMarks: parseInt(req.body.student.math)
        },
        average: (parseInt(req.body.student.english) + parseInt(req.body.student.math)) / 2
        
    });

    student.save(function(err, students) {
        if(err) {
            res.redirect("/");
        } else {
            listOfStudents.find({}, function(err, students) {
                if (err) {
                    console.log(err);
                } else {
                    res.render("show", {listOfStudents: students});
                }
            });
        }
    });
    
});


module.exports = router;