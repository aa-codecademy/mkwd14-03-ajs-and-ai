let sayHello = (personName) => {
    console.log(`Hello ${personName}! Have a nice day :)`);
}

let sayGoodbye = (personName) => {
    console.log(`Goodbye ${personName}! Hope to see you soon!`);
}

let printInConsole = (text) => {
    if (!text) {
        throw new Error("You must enter some text to be printed");
    }
    console.log(text);
}

//EXPORT to be used in another .js file
module.exports = {
    sayHello: sayHello,
    sayGoodbye: sayGoodbye,
    printInConsole: printInConsole
}