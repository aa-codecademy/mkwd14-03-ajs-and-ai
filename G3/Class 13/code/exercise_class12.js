// import { BaseEntity } from "./prototypeChaining";   

// let a = new BaseEntity(1, "Test");

const individualValue = "individual";
const groupValue = "group";

function Person(firstname, lastname, age) {
    debugger
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.getFullName = function () {
        return `${this.firstname} ${this.lastname}`;
    }
}

function Student(firstname, lastname, age, academyName, studentId) {
    debugger
    //inhretance of Person
    Object.setPrototypeOf(this, new Person(firstname, lastname, age));

    //properties and methods specific to student
    this.academyName = academyName;
    this.studentId = studentId;
    this.study = function () {
        //from person                                    //from student directly
        console.log(`${this.getFullName()} is studying in the academy ${this.academyName}`);
    }
}


let student1 = new Student("Petko", "Petkov", 25, "Avenga", 12345);
console.log(student1);

Person.prototype.checkAcademy = function (student) {
    console.log("The academy of the student is " + student.academyName);
}

console.log(student1);

function DesignStudent(firstname, lastname, age, studentId, isStudentOfTheMonth) {
    debugger
    Object.setPrototypeOf(this, new Student(firstname, lastname, age, "Design academy", studentId));
    this.isStudentOfTheMonth = isStudentOfTheMonth;
    this.attendAdobeExam = function () {
        //this references the object that we are curruntly using (the design student)
        //the design student inherits from student which inherits from person - so designStudent has access to firstName
        console.log(`The student ${this.getFullName()} is doing an adobeExam!`)
    }
}

let designStudent = new DesignStudent("Petko", "Petkovski", 25, 1, true);
console.log(designStudent.firstname);
console.log(designStudent.academyName);
console.log(designStudent.isStudentOfTheMonth);


function CodeStudent(firstname, lastname, age, studentId) {
    Object.setPrototypeOf(this, new Student(firstname, lastname, age, "Code academy", studentId));
    //default values - we will set the values via the doProject method
    this.hasIndividualProject = false;
    this.hasGroupProject = false;
    this.doProject = function (type) {
        if (typeof (type) !== "string") {
            console.log("Type must be string");
            return;
        }
        if (type === individualValue) {
            console.log(`The student ${this.getFullName()} has individual project`);
            this.hasIndividualProject = true;
        } else if (type == groupValue) {
            console.log(`The student ${this.getFullName()} has group project`);
            this.hasGroupProject = true;
        }else{
            console.log("Invalid type");
        }
    }
}

let codeStudent = new CodeStudent("Nikola", "Nikolovski", 30, 2);
codeStudent.doProject(individualValue);
console.log(codeStudent.hasGroupProject);
console.log(codeStudent.hasIndividualProject);

function NetworkStudent(firstname, lastname, age, studentId, academyPart){
    Object.setPrototypeOf(this, new Student(firstname, lastname, age, "Network academy", studentId));
    this.academyPart = academyPart;
    this.attendCiscoExam = function(){
        console.log(`This student ${this.getFullName()} is attending Cisco exam!`);
    }
}

let netWorkStudent = new NetworkStudent("Marko", "Markovski", 30, 3, 1);
console.log(netWorkStudent);
console.log(netWorkStudent.firstname);
console.log(netWorkStudent.academyPart);
console.log(netWorkStudent.academyName);