// importing all dependancies 
const express    = require("express"),
      bodyParser = require("body-parser"),
      mongoose   = require("mongoose");

var studentRoutes  = require("./routes/students.js");

//seting up mongoose connection with mongodb
mongoose.connect("mongodb://localhost:27017/student_scores", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to DB!"))
.catch(error => console.log(error.message));

var app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static(__dirname + "/public"));

// setting up default view engine to be ejs
app.set("view engine", "ejs");

// importing the Students Schema from the campground directory
var listOfStudents = require('./model/students.js')

app.use(studentRoutes);

app.listen(3000, function() {
    console.log("The server is up and running!");
})