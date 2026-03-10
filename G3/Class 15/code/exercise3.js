class Shape {
    constructor(name, color, position) {
        this.name = name;
        this.color = color;
        this.position = position;  //[x, y]   -> [3, 2]
    }

    set name(nameValue) {
        !nameValue ? console.log("no name") : this._name = nameValue;
    }

    get name() {
        console.log("we are getting the name...");
        return this._name;
    }

    set color(colorValue) {
        !colorValue ? console.log("no color") : this._color = colorValue;
    }

    get color() {
        console.log("we are getting the color...");
        return this._color;
    }

    calculateArea() {
        console.log("getArea has no concrete implementation");
    }

    calculatePerimeter() {
        console.log("getPerimeter has no concrete implementation");
    }

    checkPosition(shape) {
        if (shape instanceof Shape) { //checks if the object is an instance of a class
            //the most specific check (if condition) should always go first (be checked first, be on top)
            if (shape.position[0] > this.position[0] && shape.position[1] > this.position[1]) {
                console.log(`Shape ${shape.name} has both x and y coordinates in front of this object`);
                return;
            }
            if (shape.position[0] > this.position[0]) { //this means that shape is in front of this object
                console.log(`Shape ${shape.name} x coordinate is in front of this object`);
                return;
            }
            if (shape.position[1] > this.position[1]) {
                console.log(`Shape ${shape.name} y coordinate is in front of this object`);
                return;
            }

            console.log(`This has both x and y coordinates in front of ${shape.name}`);
        } else {
            console.log("The input is not a shape");
        }
    }

    static move(shape) {
        if (shape instanceof Shape) {
            console.log("Moving....");
            shape.position[0] += 5;
            shape.position[1] += 5;
        } else {
            console.log("The input is not a shape");
        }
    }
}

let shape1 = new Shape("shape1", "red", [5, 6]);
let shape2 = new Shape("shape2", "blue", [2, 3]);

shape1.checkPosition(shape2); //shape1 is this (the object that we are currently working with) and shape2 is shape (the obj that we sent as param)
shape1.calculateArea(); //calls the method from Shape

class Rectangle extends Shape {
    constructor(name, color, position, sideA, sideB) {
        super(name, color, position); //we call the parent constructor
        //specific properties of the rectange
        this.sideA = sideA;
        this.sideB = sideB;
    }

    //override the methods with concrete impl
    calculateArea() {
        return this.sideA * this.sideB;
    }

    calculatePerimeter() {
        return 2 * this.sideA + 2 * this.sideB;
    }
}

let rectangle = new Rectangle("rectangle", "blue", [1,2], 3, 5);
console.log(rectangle.calculateArea()); //calls the impl of Rectangle

const pi = 3.14; //we are using const because we cannot change the value of pi
class Circle extends Shape{
    constructor(name, color, position, radius){
        super(name, color, position); //parent constructor
        this.radius = radius;
    }

      //override the methods with concrete impl

    calculateArea(){
        return this.radius * this.radius *  pi;
    }

    calculatePerimeter(){
        return 2 * this.radius * pi;
    }
}

let circle = new Circle("circle", "red", [3,4], 5);
console.log(circle.calculateArea()); //calls the impl of Circle