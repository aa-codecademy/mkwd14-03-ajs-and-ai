function callInOrder() {
    setTimeout(function () {
        console.log('1. First thing, preparing for the second...');
        setTimeout(function () {
            console.log('2. Second thing');
        }, 2000)
    }, 2000)
}

// console.log('First');

// setTimeout(function() {
//     console.log('Second');
// }, 1500)

// console.log('Third');

// callInOrder();


function complexCallInOrder() {
    setTimeout(function () {
        console.log('1. First thing, preparing for second');
        setTimeout(function () {
            console.log('2. Second thing preparing for third');
            setTimeout(function () {
                console.log('3. Third thing, preparing for fourth');
                setTimeout(function () {
                    console.log('4. Fourth thing, preparing for fifth');
                    setTimeout(function () {
                        console.log('5. Fifth thing, preparing for sixth');
                        setTimeout(function () {
                            console.log('6. Finally sixth thing');
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}
// complexCallInOrder();


function workTimeResolvation(workTime) {
    return new Promise((resolve, reject) => {
        if (workTime <= 0) {
            reject("It's too short of a work time. Please try again!");
        }
        setTimeout(function() {
            resolve("This time is correct! Welcome!");
        }, workTime);
    })
}


workTimeResolvation(0)
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
})


let myPromise = new Promise((resolve, reject) => {
    //resolve("This promise was resolved successfully!");
    reject("This promise was rejected!");
});

function showPromiseState(promise, label = 'promise') {
    console.log(label + ': pending');
    promise.then(value => {
        console.log(label + ': fulfilled ->', value);
    }).catch(err => {
        console.log(label + ': rejected ->', err);
    });
}

showPromiseState(myPromise, 'myPromise');


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => {
//         let result = response.json();
//         console.log(result);
//         return result;
//       })
//       .then(data => console.log(data))
