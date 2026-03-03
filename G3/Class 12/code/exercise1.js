// import { BaseEntity } from "./prototypeChaining";   

// let a = new BaseEntity(1, "Test");

function Person(firstname, lastname, age){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.getFullName = function(){
        return `${this.firstname} ${this.lastname}`;
    }
}

function Student(firstname, lastname, age, academyName, studentId){
    //inhretance of Person
    Object.setPrototypeOf(this, new Person(firstname, lastname, age));

    //properties and methods specific to student
    this.academyName = academyName;
    this.studentId = studentId;
    this.study = function(){
                      //from person                                    //from student directly
        console.log(`${this.getFullName()} is studying in the academy ${this.academyName}`);
    }
}


let student1 = new Student("Petko", "Petkov", 25, "Avenga", 12345);
console.log(student1);  

Person.prototype.checkAcademy = function(student){
    console.log("The academy of the student is "+ student.academyName);
}

console.log(student1);  