$(document).ready(function() {
    $("#getStudentsBtn").click(function() {
        $.ajax({
            url: "https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/shared_data/students.json",
            success: function(data) {
                console.log("Student Data:", data);
                //we don't have explicit content type (it is text/plain by default, not application/json) so we need to parse it
                const students = JSON.parse(data);
                console.log(students); //object
                for(let student of students.students){
                    $("#students").append(`<li>${student}</li>`);
                }
            },
            error: function(error) {
                console.error("Error fetching student data:", error);
            }
        });
    });

    $("#getAstros").click(function() {
        $.ajax({
            url: "http://api.open-notify.org/astros.json",
            success: function(data) {
                console.log("Astronaut Data:", data);
                //we have explicit content type application/json so jQuery parses it automatically (you can check this in the Network tab on inspect element (or F12 or DevTools))
                for(let person of data.people){
                 $("#astros").append(`<li>${person.name}</li>`);
                }
            },
            error: function(error) {
                console.error("Error fetching astronaut data:", error);
            }
        });
    });
});