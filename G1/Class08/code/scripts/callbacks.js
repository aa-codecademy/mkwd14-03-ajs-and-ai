
let url = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

let dataFromApi = [];

let getData = (url, callback) => {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            dataFromApi = data;

            console.log("The request succeeded!");
            callback(dataFromApi);
        })
        .catch(err => console.log(err));
}

let printData = (data) => {
    console.log(data);
}

getData(url, printData);
// printData(dataFromApi);



// console.log(dataFromApi);

// setTimeout(function () {
//     console.log(dataFromApi);
// }, 10)




