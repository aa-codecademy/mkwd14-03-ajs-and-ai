function firstGreeting(callBack) {
    setTimeout(() => {
        console.log("First greeting");
        callBack();
    }, 4000)
};

function secondGreeting() {
    console.log("Second greeting");

}

//we send the second function in the first function
firstGreeting(secondGreeting); //this way we can control the order of execution

//AJAX
function makeAjaxCall(callBack1, callBack2){
    fetch("https://swapi.dev/api/people/1/") //promise - delay
    .then(function(response){
        response.json() //promise - delay
        .then(function(data){
            console.log("Data is here");
            callBack1(data); //printPerson()
            callBack2(); //greetOurPerson
        })
        .catch(function(error){
            console.log(error)
        })
    })
    .catch(function(err){
        console.log(err);
    })
}

function printPerson(personObject){
    console.log(personObject);
}

function greetOurPerson(){
    console.log("Hello star wars!")
}
//we want to control the order - we want the data to be fetched and then to greet
makeAjaxCall(printPerson, greetOurPerson);
