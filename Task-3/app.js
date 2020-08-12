// require dependancie
const express = require("express"),
      bodyParser = require("body-parser");

var app = express();


app.use(bodyParser.urlencoded({extended: true}));

// adding "public" dir to path
app.use(express.static(__dirname + "/public"));
// det default view engine to ejs
app.set("view engine", "ejs");

// list of students array
var listOfStudents = [
    {
        name: "Aditya Ajmera",
        score: {
            engMarks: 100,
            mathMarks: 100
        },
        average: 100
    }
]

// ===================================================================================================================
// ===================================================================================================================
//                                     ROUTES
// ===================================================================================================================
// ===================================================================================================================

app.get("/", function(req, res) {
    res.redirect("/register");
});

// home page
app.get("/register", function (req, res) {
    let student;
    res.render("index", {listOfStudents: listOfStudents, student: student});
    
});

//post route where form is submitted
app.post("/register", function (req, res) {
    listOfStudents.push({
        name: req.body.student.first + " " + req.body.student.last,
        score: {
            engMarks: req.body.student.english,
            mathMarks: req.body.student.math
        },
        average: ((parseInt(req.body.student.english) +  parseInt(req.body.student.math)) / 2)
    });
    console.log(listOfStudents);
    res.render("show", {listOfStudents: listOfStudents});
});

app.listen(3000, function() {
    console.log("The server is up and running!");
})