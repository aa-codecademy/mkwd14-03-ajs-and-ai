function Cinema(name, address){
    this.name = name;
    this.address = address;
    this.movies = []; //we will add/remove items via the movies methods add/remove cinema
    //TODO print
}

function Movie(title, genre){
    this.title = title;
    this.genre = genre;
    this.cinemas = [];
    this.actors = []; //we will add items here via the actor instance and its method startMovie
    this.printDetails = function(){
        console.log(`${this.title} = ${this.genre}`);
    }
    this.addCinema = function(cinema){  
        //if there is an item in the result array after the filter
        //that means that there is a cinema with the same name already in this.cinemas array
        //we cannot add the same cinema again
        if(this.cinemas.filter(c => c.name === cinema.name).length > 0){
            console.log("Cinema exists");
            return;
        }
        this.cinemas.push(cinema);

        //check if in the list of movies for this cinema there is a movie with this.title
        //if there is not then add this movie to that list
        if(cinema.movies.filter(m => m.title === this.title).length == 0){
             cinema.movies.push(this);
        }
    }

    this.removeCinema = function(cinema){
        //if there is not an item in the result array after filter, then a cinema with that name does not exist
        if(this.cinemas.filter(x => x.name === cinema.name).length ===0){
            console.log("Cinema does not exist");
            return;
        }

        for(let i=0; i< this.cinemas.length; i++){
             if(this.cinemas[i].name === cinema.name){
                   //remove it
                   this.cinemas.splice(i, 1);
             }
        }

        //if a movie with this title exists in te cinema, remove it
        if(cinema.movies.filter(m => m.title === this.title).length > 0){
            for(let i=0; i< cinema.movies.length; i++){
                if(cinema.movies[i].title === this.title){
                      //remove it
                      cinema.movies.splice(i, 1);
                }
           }

        }
    }
}

function Actor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.movies = [];
    this.currentMovie = null;
    this.startMovie = function (movie) {
        if (this.currentMovie != null) {
            this.movies.add(this.currentMovie);
        }
        this.currentMovie = movie;
        movie.actors.push(this);
    }
}