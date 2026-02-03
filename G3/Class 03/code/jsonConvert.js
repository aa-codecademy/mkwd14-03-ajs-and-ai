let academy = {
    trainer: "Tijana Stojanovska",
    group: "G3",
    course: "Advanced JavaScript and AI",
    name: "Avenga Academy",
    students: ["Marija", "Elena", "Valentino"]
};

//in our js file we are working with js objects
//but sometimes we need to convert them to JSON format (ex. when we want to send them to a server)

//convert js object to JSON format - serialization
let academyJSON = JSON.stringify(academy);
console.log(academyJSON);
console.log(typeof academyJSON); //string

//convert JSON format back to js object - deserialization
let academyJS = JSON.parse(academyJSON);
console.log(academyJS);
console.log(typeof academyJS); //object

