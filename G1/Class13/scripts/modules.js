// import { sum, difference, multiply, division } from './modules/mathService.js';
import operations from './modules/mathService.js';
import  MathOperation  from "./modules/classMathService.js"


console.log(operations.sum(10, 25));
console.log(difference(10, 25));
console.log(multiply(10, 25));
console.log(division(10, 25));

console.log(MathOperation.PI);
console.log(MathOperation.sum(22, 33));
