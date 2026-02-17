let url = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

let getData = (url) => {
    return fetch(url)
        .then((res) => res.json())
        .then((data) => {
            let averageAboveThree = data.filter(st => st.averageGrade > 3 );
            console.log(averageAboveThree);

            let femaleWithAvgAboveFive = data
            .filter(st => st.gender === "Female" && st.averageGrade === 5)
            .map(femaleName => femaleName.firstName)
            console.log(femaleWithAvgAboveFive);

        })
}
getData(url);

