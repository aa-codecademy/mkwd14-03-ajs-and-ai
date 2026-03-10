
function sum(a, b) {
    return a + b;
}

function difference(a, b){
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function division(a, b) {
    if(b === 0)
        throw new Error("DivideByZeroException: Cannot divide by zero!");
    return a / b;
}


export default {
    sum: sum,
    difference: difference,
    multiply: multiply,
    division: division
}