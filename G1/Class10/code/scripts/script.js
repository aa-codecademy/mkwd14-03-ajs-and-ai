function Product(name, category, quantity, price) {
    this.name = name;
    this.category = category;
    this.quantity = quantity;
    this.price = price;
    this.inStock = quantity > 0;

    this.updateStock = function (amount) {
        if (amount > this.quantity) {
            // throw error
            console.log('Not enough products');
            return;
        } 

        this.quantity = this.quantity - amount;
        this.inStock = this.quantity > 0;

    }
}

// let product = new Product('Laptop', 'Laptop', 10, 1200);
// console.log(product.inStock);
// product.updateStock(10);
// console.log(product.inStock);


// console.log(this);

function whereIsThis() {
    console.log(this);
}

// whereIsThis();

// window.whereIsThis();

const person = {
  name: 'Alice',
  sayName: function() {
    console.log(this.name);
  }
};
person.whereIsThis = function() {
    console.log(this);
}
// person.sayName();

window.whereIsThis2 = function () {
    console.log(this);
}

// person.whereIsThis();
// window.whereIsThis2();



const person1 = {
  name: 'Bob',
  greet: () => {
    console.log(this);
  },
  greet1: function() {
    const arrow = () => {
      console.log(this);
    };
    arrow();
  }
};
person1.greet();
person1.greet1();

function Car() {
    console.log(this);
    this.name = 'Toyota';

    this.drive = function() {
        console.log(this);
    }

    this.start = () => console.log(this);
}

// Car();
let car = new Car();
car.drive();
car.start();