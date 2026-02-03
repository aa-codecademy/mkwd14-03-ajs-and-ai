// Create an array of movie names
// Create input and search button
// Search the array on click
// Show success or failure message
// Input must be case-insensitive

let movies = ["Harry Potter", "Inception", "The Dark Knight", "Pulp Fiction", "Forrest Gump"];
//case-insensitive
//toLowerCase() - harry potter === harry potter
//toUpperCase() - HARRY POTTER === HARRY POTTER
//Harry Potter !== harry potter

let searchInput = document.getElementById("searchInput");
let searchButton = document.getElementById("searchButton");
let result = document.getElementById("result");

searchButton.addEventListener("click", function () {
    //validation 
    if (!searchInput.value) {
        // result.innerText = "Please enter a movie name";
        // return;
        let resultString;
        for (let movie of movies) {
            resultString += movie + "\n";
        }
        result.innerText = "Please enter a movie name. Here are some movies you can search:\n" + resultString;
        return;
    }

    //another way - do nothing
    // if(!searchInput.value){
    //     return;
    // }

    //if we want to set the result based on the return value of searchMovies function
    // let movieFound = searchMovies(searchInput.value);
    // if (movieFound) {
    //     result.textContent = "Movie found!";
    //     result.style.color = "green";
    // } else {
    //     result.textContent = "Movie not found!";
    //     result.style.color = "red";
    // }

    //if we want to set the result inside the method
    searchMoviesWithFlag(searchInput.value);
});

function searchMovies(searchText) {
    for (let movie of movies) {
       //if (movie.toUpperCase() == searchText.toUpperCase()) {
        if (movie.toLowerCase().trim() == searchText.toLowerCase().trim()) {
            return true; //if the movie and the search text are same - we have found the movie, so we return true 
        }
    }
    return false; //if the for loop ends and we have not found the movie, we return false
}

//another way
function searchMoviesWithFlag(searchText) {
    let found = false; //default value is false beacause we have not found the movie yet
    for (let movie of movies) {
        //we cannot return from here because we need to use the flag after the loop
        if (movie.toLowerCase().trim() == searchText.toLowerCase().trim()) {
            found = true; //we have found the movie, so we set found to true. If the movie is not found, found remains false
            break; //we can stop searching further
        }

        //if we want to check if the movie contains the search text
        //if (movie.toLowerCase().includes(searchText.toLowerCase())) {
        //    found = true;
        //    break;
        //}
    }
    
    //we will need to use the flag to indicate if we have found the movie or not so that we can continue with some code here
    if(found){
        result.textContent = "Movie found!";
        result.style.color = "green";
    }else{
        result.textContent = "Movie not found!";
        result.style.color = "red";
    }
}







