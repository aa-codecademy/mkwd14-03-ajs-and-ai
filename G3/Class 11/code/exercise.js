function Academy(name, students, subjects, start, end) {
    this.name = name ? name : "Unknown Academy";
    this.students = students ? students : []; //when using arrays aleays initialize them as empty arrays, otherwise you will have problems when trying to push new items into them
    this.subjects = subjects ? subjects : [];
    this.start = start;
    this.end = end;
    this.numberOfClasses = this.subjects.length * 10;
    this.printStudents = function () {
        this.students.forEach(student => console.log(student)); //with this.students we access the students property of the current object, and then we use forEach to loop through each student and print it to the console
    }
    this.printSubjects = function () {
        this.subjects.forEach(subject => console.log(subject));
    }
}

function Subject(title, isElective, academy, students) {
    this.title = title ? title : "Unknown Subject";
    this.isElective = isElective ? isElective : false;
    this.academy = academy;
    this.students = students ? students : [];
    this.numberOfClasses = 10; //default value
    this.overrideClasses = function (number) {
        // if (number >= 3) {
        //     this.numberOfClasses = number;
        // } else {
        //     console.log("Number of classes must be at least 3");
        // }
        this.numberOfClasses = number >= 3 ? number : this.numberOfClasses; //if the number is greater than or equal to 3, we set the number of classes to that number, otherwise we keep the default value
    }
}

let advancedJS = new Subject("Advanced JS", false, "Code Academy");
advancedJS.overrideClasses(15);
console.log(advancedJS.numberOfClasses); //15
advancedJS.overrideClasses(2); //2 < 3 -> it will not change the number of classes, because the overrideClasses method does not allow us to set the number of classes to less than 3
console.log(advancedJS.numberOfClasses); //15, because the overrideClasses method does not allow us to set the number of classes to less than 3, so it keeps the previous value of 15

function Student(firstName, lastName, age) {
    this.firstName = firstName ? firstName : "Unknown";
    this.lastName = lastName ? lastName : "Unknown";
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
    this.startAcademy = function (academy) { //by reference
        this.academy = academy; //we set the academy property of the student to the academy that we pass as an argument
        //we need to add the student in the academys array of students
        //here academy is passed by reference (it is an object)
        //that means that when we change the academy property of the student, we are also changing the academy object that is passed as an argument, because they both point to the same object in memory
        this.academy.students.push(this); //we push the current student (this) into the students array of the academy, so that the academy knows which students are enrolled in it
    }
    this.startSubject = function (subject) { //subject is also passed by refrence (it points out for example to advancedJs object that we sent as argumennt)
        debugger
        if (this.academy == null) {
            console.log("The student must be assigned to an academy before starting a subject");
            return;
        }

        //we need to check if the subject is part of the academy's subjects
        //if the subject is a part of the academy the length of the filtered array will be greater than 0, otherwise it will be 0
        if (this.academy.subjects.filter(x => x.title === subject.title).length == 0) {
            console.log("The subject is not part of the academy's subjects");
            return;
        }
        //check if the student already has a current subject. If the student has a current subject, we need to move that subject to the completed subjects array, and then set the current subject to the new subject that we want to start
        if (this.currentSubject != null) {
            this.completedSubjects.push(this.currentSubject); //for example, you are currently studying Advanced JS, and you want to start C#, so we need to move Advanced JS to the completed subjects array, and then set the current subject to C#
        }
        this.currentSubject = subject; //here we set the current subject to the new subject
        //this was also passed by reference, so the current subject, the subject and for example the advancedJS object all point to the same place
        this.currentSubject.students.push(this); //we need to add the student to the students array of the current subject, so that the subject knows which students are studying it
    }
}


let cSharp = new Subject("C#", false);
let student = new Student("Petko", "Petkovski", 25);
let avenga = new Academy("Avenga", [], [advancedJS, cSharp], new Date(), new Date());

console.log(student);
console.log(avenga);
student.startAcademy(avenga);
console.log(student);
console.log(avenga);

student.startSubject(advancedJS);
console.log(student);
console.log(advancedJS);
student.startSubject(cSharp);
console.log(student);
console.log(advancedJS);