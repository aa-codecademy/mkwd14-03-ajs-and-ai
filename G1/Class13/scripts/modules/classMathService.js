
//  If you export only one thing from a module file like this Math class
//  You can export it as 'default'
//  By doing this you are allowed to import it somewhere 
//  By any given name while importing

// If you don't export it using 'default'
// Then you must use the original class name 'Math'
// when importing in another file
export default class Math {
    static PI = 3.14;

    static sum(a, b) {
        return a + b;
    }

    static difference(a, b) {
        return a - b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static division(a, b) {
        if (b === 0)
            throw new Error("DivideByZeroException: Cannot divide by zero!");
        return a / b;
    }
}