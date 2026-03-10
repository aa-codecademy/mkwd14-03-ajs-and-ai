// Make a request to the following link to get all the student objects
// Filter all the students with age higher than 20
// Find the student with highest average grade, the average of all average grades and the average of the age of the filtered students Use reduce for the third requirement.

function getStudents() {
    fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json")
        .then(function (response) {
            //.json() returns a promise
            response.json() //in response we have a complex object. We need to get the data from the response and parse it from json to js object
                .then(function (data) { //this data is already parsed because .json() recognizes the json and parses it to js objects
                    console.log(data);
                    let filteredData = data.filter(student => student.age > 20); //filter returns a new array that contains all the elemnts that satisfy the condition
                    calculateStatistics(filteredData);
                })
                .catch(function (jsonError) {
                    console.log(jsonError);
                })
        })
        .catch(function (error) {
            console.log(error);
        })
}

function calculateStatistics(filteredData) {
    let initialValues = {
        studentWithHigestAverageGrade: filteredData[0],
        highestAverageGrade: filteredData[0].averageGrade, //we use this so that it is clearer (we could use the student object to access its value about avgGrade and compare it in each iteration)
        sumOfAverageGrades: 0,
        sumOfAge: 0
    };
    //res has the value (reference) to initalValues
    let result = filteredData.reduce(function (res, currentFilteredStudent) {
        res.sumOfAge += currentFilteredStudent.age;
        res.sumOfAverageGrades += currentFilteredStudent.averageGrade;

        //here we search for the max (highest avg grade)
        if (currentFilteredStudent.averageGrade > res.highestAverageGrade) {
            res.highestAverageGrade = currentFilteredStudent.averageGrade;
            res.studentWithHigestAverageGrade = currentFilteredStudent;
        }

        // if (currentFilteredStudent.averageGrade > res.studentWithHigestAverageGrade.averageGrade) {
        //     res.studentWithHigestAverageGrade = currentFilteredStudent;
        // }
        return res;
    }, initialValues); //we pass the initialValues by reference
    console.log(`The student with highest avg grade is ${result.studentWithHigestAverageGrade.firstName} ${result.studentWithHigestAverageGrade.lastName} and his avg grade is ${result.studentWithHigestAverageGrade.averageGrade}`);
    console.log(`Average avg grade is ${(result.sumOfAverageGrades / filteredData.length).toFixed(3)}`);
    console.log(`Average age is ${(result.sumOfAge / filteredData.length).toFixed(2)}`);
}

getStudents();
