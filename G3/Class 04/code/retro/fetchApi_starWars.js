let button = document.getElementById("getPerson");
let id = 1;

button.addEventListener("click", function () {
    fetch("https://swapi.dev/api/people/" + id) //promise
        .then(function(response){ //response object
            response.json() //promise
            .then(function(data){
                console.log(data);
                console.log(data.name);
            })
            .catch(function(errorJson){
                console.log(errorJson);
            })
        })
        .catch(function(error){
            console.log(error)
        })
});