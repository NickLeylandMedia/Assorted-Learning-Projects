let userName;

let askName = () => {
    userName = prompt('What is your name?','');
    return userName;
};

let greeting = () => console.log('Hello ' + userName + '!'); 

let compOne = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600}],
    development: {
        sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    }
}

let compTwo = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600}],
    development: {
        sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    },
    randd: {
        admin: [{name: 'Steve', salary: 10000}],
        sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600}],
        secretaries: {
            bitches: [{name: 'Alison', salary: 1}, {name: 'Maddy', salary: 1}]
        }
    }
}

let buildOne = {
    parkingGarage: [{rooms: 6, tenants: 24}],
    outdoorParking: {
        suv: [{rooms: 1, tenants: 2}],
        sedan: [{rooms: 1, tenants: 3}]
    },
    adirondack: [{rooms: 0, tenants: 10}]
}


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

function sumprop(arr) {
    if (Array.isArray(arr)) {
        return arr.reduce((prev, current) => prev + current.salary, 0)
    } else {
        let sum = 0
        for (let subdep of Object.values(arr)) {
            sum += sumSalaries(subdep)
        }
        return sum
    }
}

function sumTenants(arr) {
    if (Array.isArray(arr)) {
        return arr.reduce((prev, current) => prev + current.tenants, 0)
    } else {
        let sum = 0
        for (let sect of Object.values(arr)) {
            sum += sumTenants(sect)
        }
        return sum
    }
}

function sumRooms(arr) {
    if (Array.isArray(arr)) {
        return arr.reduce((prev, current) => prev + current.rooms, 0)
    } else {
        let sum = 0
        for (let sect of Object.values(arr)) {
            sum += sumRooms(sect)
        }
        return sum
    }
}


//Recursion Exercises
function addBelow(num) {
    if (num == 1) {
        return num
    } else {
        return num + addBelow(num - 1)
    }
}

function addBelowLoop(num) {
    let sum = 0
    for (let i = num; i > 0; i--) {
        sum += i
    }
    return sum 
}


