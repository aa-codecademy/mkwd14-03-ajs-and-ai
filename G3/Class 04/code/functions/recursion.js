function countdown(n) {
    // base case (when to stop)
    if (n <= 0) {
        return;
    }

    console.log(n);

    // recursive call (function calls itself)
    countdown(n - 1);
}

countdown(5);
//countdown(5) - prints 5 and calls the function again for 4
//countdown(4) - prints 4 and calls the fucntion again for 3
//countdown(3) - print 3 and calls the function again for 2
//countdown(2) - print 2 and calls the func again for 1
//countdown(1) - print 1 and calls the func again 0
//countdown(0) - return;

function sum(num1, num2){
    return num1 + num2;
}

//sum(sum(sum(sum(1,2), 3), 4),5)\

//we can create a recursion function - a function that calls itself

function sumTo(num){
    console.log(num);

    //in recursion functions we need to have an ending condition - so that our function does not call itself forever
    if(num == 0){
        console.log(0);
        return 0;
    }

    console.log(`return ${num} + sumTo(${num-1})`);
    return num + sumTo(num-1);
}

let result = sumTo(5);
console.log(result);

//sumTo(5)
//5 + sumTo(4) //here the function will not completely return, because it called itself again
//4 + sumTo(3)
//3 + sumTo(2)
//2 + sumTo(1)
//1 + sumTo(0) 
//return 0 - we reached the end of the calls, it does not call itself again, so we can start going back
//1 + 0 (sumTo(1) returned 1)
//2 + 1  = 3 (sumTo(2) returned 3)
//3 + 3 = 6 (sumTo(3) returned 6)
//4 + 6 = 10 (sumTo(4) returned 10)
//5 + 10 = 15
//sumTo(5) = 15