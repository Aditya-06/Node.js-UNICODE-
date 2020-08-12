var names = [];
var marks_avg;
var listOfStudents = [];

var info = ["Aditya Ajmera 100 100", "oompa loompa 200 10", "Abhishek Ajmera 20 50", "uivfnd dbbvfjdv 100 99", "jack grease 40 70"];

function listToObject(info) {
    info.forEach(function(pieceOfInfo) {
        student = pieceOfInfo.split(" ");
        engMarks = parseInt(student[2]);
        mathMarks = parseInt(student[3]);
        var name = student[0] + " " + student[1];
        marks_avg = (Number(student[2]) + Number(student[3])) / 2;
        listOfStudents.push({name: name, score: {eng: engMarks, math: mathMarks}, average: marks_avg});

    });
    return listOfStudents;
}

console.log(listToObject(info));

listOfStudents.sort(function(a, b) {
    return ((b.score.engMarks + b.score.mathMarks) / 2) - ((a.score.engMarks + a.score.mathMarks) / 2);
});

console.log(listOfStudents);

listOfStudents.forEach(function(v){ delete v.average });