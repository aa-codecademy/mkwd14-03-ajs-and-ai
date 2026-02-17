let countryInput = document.getElementById("countryInput");
let button = document.getElementById("getInfo");

function getCountryByCode(code){
    return fetch("https://restcountries.com/v2/alpha/" + code)
    .then(response => response.json()); //this function will return promise
}

async function getBorderingCountries(bordering){
    console.log("Neighbours:")
    for(let code of bordering){
        let result = await getCountryByCode(code);
        console.log(result);
    }
}

button.addEventListener("click", async function(){
    console.log("Country: ");
    //call the url for the code that was in the input
    // getCountryByCode(countryInput.value)
    // //then call the same url but for all border countries
    // .then(data => {
    //     console.log(data);
    //     getBorderingCountries(data.borders);
    // })

    let response = await getCountryByCode(countryInput.value);
    console.log(response);
    getBorderingCountries(response.borders);
})