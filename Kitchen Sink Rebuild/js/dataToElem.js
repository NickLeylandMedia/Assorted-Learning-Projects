/* Standard Arrays */
//Array of Numbers
let numArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
//Array of Strings
let strArr = ['Piranha', 'Shark', 'Turtle', 'Alligator']

/* Arrays of Objects */
//Girls Array
let girlArr = [
    {name: "Janice", age: 18, hairColor: 'Blue'},
    {name: "Jane", age: 19, hairColor: 'Blonde'}
]
//Foods Array
let foodArr = [
    {name: 'cheeseburger', calories: 300, price: 2.99},
    {name: 'pizza', calories: 1000, price: 22.99},
    {name: 'steak', calories: 250, price: 39.99},
    {name: 'salmon', calories: 320, price: 14.99}
]

/* Functions */ 
let analyzeArray = (arr) => {
    let type = typeof(arr)
    let length = arr.length
    return `Array is ${type} with length of ${length}`
}


let convertString = (inp) => {
    let str = JSON.stringify(inp)
    console.log(typeof(str))
    return str
}

//Create Elements Based on Array Values
function createFromArray(arr, type, parent) {

}

//Create Elements Based on Array Values And Ouput To Template
function createToTemplate() {
    
}


/* Event Listeners */