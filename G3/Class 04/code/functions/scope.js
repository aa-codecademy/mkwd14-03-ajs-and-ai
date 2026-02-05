let fName = "Petko";
let lastName = "Petkovski";
console.log(lastName); //will have the value "Petkovski" - of the global variable - we are in the global scope
console.log(fName); //we can access firstName because it is a global variable
let exampleVariable; //we declare it here - so it exists in the global scope

function getFullName(firstName, lastName){
    console.log(firstName); //this is the firstName that is a param of this function; It exists only in the scope of this function (function scope)
     console.log(lastName); //will have the value of the param lastName
    let number = 10;
    exampleVariable = 5; //here we can give/change values of the global variables
    if(firstName.length > 5){
        let blockResult = `${firstName} ${lastName}`; //block scope - it oly exists in this if (in this block scope)
        console.log(number); //it exists because we are still in the function

        if(3>2){
            let anotherBlockVariable = "I live in this if";
            console.log(anotherBlockVariable); //valid
        }

        //console.log(anotherBlockVariable); - this variable only exists in the if(3>2) block
    }

   // console.log(blockResult); //error - this is a block variable that only exists in the if
    console.log(fName); //global scope - valid
    console.log(number); //function scope - this is valid;
}

//console.log(firstName); //error -> firstName is a param of getFullName - it only exists in the scope of that function
 //console.log(number);// error - function scope

 getFullName("Marko", "Markovski");