// Create a constructor function Student with:
// firstName
// lastName
// birthYear
// academy
// grades (array)
// Methods:
// getAge()
// getInfo()
// getGradesAverage()
// Create an array with 3 students

function Student(firstName, lName, birthYear, academy, grades) {
    // if(!firstName) {
    //     this.firstName = "Unnamed";
    // }else{
    //     this.firstName = firstName;
    // }
    this.firstName = !firstName ? "Unnamed" : firstName;
    this.lastName = lName ? lName : "Unnamed";
    this.birthYear = birthYear; //we do not set default value, beacuse we would not know what to set it to
    this.academy = academy ? academy : "Unknown";
    this.grades = grades ? grades : []; //when we use arrasys - it is better to set default value to empty array to avoid errors when using array methods later on
    this.getAge = function () {
        //validation
        if (!birthYear || birthYear > new Date().getFullYear()) {
            return "The student has no birth year set";
        }
        //calculate age - new Date() is an object that represents the current date and time
        //getFullYear() is a method of the Date object that returns the current year
        return new Date().getFullYear() - this.birthYear;
    },
        this.getInfo = function () {
            //validation
            // if(this.firstName === "Unnamed"){
            //     return "The student has no name set";
            // }
            // if(this.lastName === "Unnamed"){
            //     return "The student has no last name set";
            // }
            // if(this.academy === "Unknown"){
            //     return "The student has no academy set";
            // }

            //we used chat-gpt to refactor the validation above
            if (
                this.firstName === "Unnamed" ||
                this.lastName === "Unnamed" ||
                this.academy === "Unknown"
            ) {
                return "The student has missing information";
            }

            return `This is a student named ${this.firstName} ${this.lastName} from the academy ${this.academy}.`;
        },
        this.getGradesAverage = function () {
            if (this.grades.length === 0) {
                return 0; //if there are no grades, the average is 0
            }
            //happy scenario - if all grades are numbers
            // let sum = 0;
            // for (let grade of this.grades) {
            //     sum += grade;
            // }
            // return sum / this.grades.length;

            let sum = 0;
            let counter = 0;
            for (let grade of this.grades) {
                {
                    if (isNaN(grade)) {
                        continue; //skip the non-numeric grades
                    }
                    else {
                        sum += grade;
                        counter++;
                    }
                }
                return sum / counter;
            }
        }
}

let student = new Student("Petko", "Petkovski", null, "Avenga", [4, 5, 5, 3, 4]);
console.log(student.getAge());

let anotherStudent = new Student(null, null, 1995, "Avenga", [5, NaN, 4, 5, 5]);