
function convertGrade(grade) {

    let result = "";

    if (grade >= 90) {
        result = "A";
    } else if (grade >= 80 && grade < 90) {
        result = "B";
    } else if (grade >= 70 && grade < 80) {
        result = "C";
    } else if (grade >= 60 && grade < 70) {
        result = "D";
    } else if (grade < 60 && grade >= 0) {
        result = "F";
    } else {
        result = "Nota Inválida"
    }

    console.log(result);
}


convertGrade(91);
convertGrade(85);
convertGrade(75);
convertGrade(65);
convertGrade(50);



