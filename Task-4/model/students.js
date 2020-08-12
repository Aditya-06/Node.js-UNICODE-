const mongoose = require("mongoose");

// creating a schema of students details
var studentsSchema = new mongoose.Schema ({
    name: String,
    score: {
        engMarks: Number,
        mathMarks: Number
    },
    average: Number
});

module.exports = mongoose.model("student", studentsSchema);