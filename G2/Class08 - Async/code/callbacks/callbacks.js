console.log("======================= Callback functions recap =======================");
// Callback => function that is passed as an argument to another function and is expected to be executed after some async operation is completed

// ===> BAD APPROACH => results in unmaintainable and unscalable code
// function someFunction(operator) {
//     let result = 100;
//     setTimeout(() => {
//         result = 500;
//         switch (operator) {
//             case "+":

//                 break;
//             case "add100":

//                 break;
//             // .....
//             default:
//                 break;
//         }
//     }, 1000);
// }

// ===> GOOD APPROACH => using CALLBACK function
function someFunction(calculationFunc) {
    let result = 100;
    setTimeout(() => {
        result = 500;
        calculationFunc(result);
    }, 1000);
}

function add100(num) {
    console.log(`${num + 100}`);
}

// debugger;

// someFunction(add100)
// someFunction((num) => console.log(num * 10))
// someFunction(num => console.log(num * num))
// someFunction(num => console.log(num - 1))


console.log("======================= Solving problems with callback functions =======================");

// Example: Execute the functions with async tasks in particular order (from step1..step2..etc.)

// function step1() {
//     setTimeout(() => {
//         console.log("Step 1 completed");
//     }, 3000);
// }

// function step2() {
//     setTimeout(() => {
//         console.log("Step 2 completed");
//     }, 1000);
// }

// function step3() {
//     setTimeout(() => {
//         console.log("Step 3 completed");
//     }, 2000);
// }

// step1();
// step2();
// step3();

// OUTPUT (WRONG ORDER)
// Step 2 completed
// Step 3 completed
// Step 1 completed


// Solution => CALLBACKS !

function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 completed");
        callback();
    }, 3000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 completed");
        callback();
    }, 4000);
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3 completed");
        callback();
    }, 2000);
}

// step1(() => {
//     step2(() => {
//         step3(() => {
//             console.log("Finally, all steps completed!");
//         })
//     })
// })

// Now.. let's add more steps to the whole process...

function step4(callback) {
    setTimeout(() => {
        console.log("Step 4 completed");
        callback();
    }, 1000);
}

function step5(callback) {
    setTimeout(() => {
        console.log("Step 5 completed");
        callback();
    }, 1000);
}

function step6(callback) {
    setTimeout(() => {
        console.log("Step 6 completed");
        callback();
    }, 1000);
}

function step7(callback) {
    setTimeout(() => {
        console.log("Step 7 completed");
        callback();
    }, 1000);
}

function step8(callback) {
    setTimeout(() => {
        console.log("Step 8 completed");
        callback();
    }, 1000);
}


console.time("Piramid of doom");
step1(() => {
    step2(() => {
        step3(() => {
            step4(() => {
                step5(() => {
                    step6(() => {
                        step7(() => {
                            step8(() => {
                                console.log("Callback hell!");
                                console.timeEnd("Piramid of doom");
                            })
                        })
                    })
                })
            })
        })
    })
})

// NOTE:
// Using callbacks was a common way to handle asynchronous tasks in JavaScript
// HOWEVER, they should be used with caution to avoid writing code that is difficult to manage and debug
// Instead, consider using Promises or Async/Await for a more elegant solution !
