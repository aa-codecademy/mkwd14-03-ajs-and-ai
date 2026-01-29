// Generate an array with all numbers divisible by 3 from 1 to 1000
// Generate an array with all even numbers divisible by 4 from 1 to 1000
// Generate an array with all numbers that end with digit 1 from 1 to 1000

let divisibleBy3 = [];
let evenDivisibleBy4 = [];
let endsWith1 = [];

for(let i = 1; i <= 1000; i++) {
    if(i % 3 === 0) {
        divisibleBy3.push(i);
    }
    //we don't use else because a number can be both divisible by 3 and an even number divisible by 4 (ex. 12)
    if(i % 4 === 0 && i % 2 === 0) {
        evenDivisibleBy4.push(i);
    }

    if(i % 10 === 1) {
        endsWith1.push(i);
    }
}

console.log("Numbers divisible by 3:");
console.log(divisibleBy3);
console.log("Even numbers divisible by 4:");
console.log(evenDivisibleBy4);
console.log("Numbers that end with digit 1:");
console.log(endsWith1);