let userName;

let askName = () => {
    userName = prompt('What is your name?','');
    return userName;
};

let greeting = () => console.log('Hello ' + userName + '!');

//Recursion
function countDown(n) {
    for (let i=n; i > 0; i--) {
        console.log(i)
    }
}

function reCountDown(n) {
    console.log(n) 
    if (n >= 1) reCountDown(n-1)
}

function reCountUp(n) {
    console.log(n)
    if (n <= 100)  reCountUp(n+1)
}

function pow(base, exp) {
    if (exp == 1) {
        return base
    } else {
        return base * pow(base, exp - 1)
    }
}

function shortPow(base, exp) {
    return (exp == 1) ? base : (base * shortPow(base, exp - 1))
}

