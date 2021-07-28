let john = { name: "John" }

let obj = {
    name: "John",
    age: 30,
    city: "New York",
    street: "Digby Street"
}

let map = new Map()

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
])

let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['apple', 3],
    ['sirloin', 5],
    ['filet', 10]
])

let wangMap = new Map()

wangMap.set('Mandingo', 11)
wangMap.set('Lex Steele', 13)
wangMap.set('Seabiscuit', 15)
wangMap.set('Godzilla', 1043)

let newObj = Object.fromEntries(wangMap.entries())

let objMap = new Map(Object.entries(obj))

let set = new Set()

let steve = { name: "Steve" }
let pete = { name: "Pete" }
let mary = { name: "Mary" }

set.add(steve)
set.add(steve)
set.add(john)
set.add(pete)
set.add(mary)
set.add(mary)

let setMap = () => {
    map.set('1', 'str1')
    map.set(1, 'num1')
    map.set(true, 'bool1')
    map.set(john, 123)
}

/* Map Iteration */
//Iterate Over Keys
let iterateKeys = () => {
    for (let vegetable of recipeMap.keys()) {
        console.log(vegetable)
    }
}

//Iterate Over Values
let iterateValues = () => {
    for (let amount of recipeMap.values()) {
        console.log(amount)
    }
}

//Iterate Over Entries
let iterateEntries = () => {
    for (let entry of recipeMap) {
        console.log(entry)
    }
}

//Map forEach
let forEachMap = () => {
    recipeMap.forEach( (value, key, map) => {
        console.log(`${key}: ${value}`)
    })
}


/* Map From Object */
let listObjMap = () => {
    console.log(objMap.get('name'))
    console.log(objMap.get('age'))
    console.log(objMap.get('city'))
    console.log(objMap.get('street'))
}

/* Object From Map */
let logObjFromMap = () => {
    console.log(prices.banana)
    console.log(prices.orange)
    console.log(prices.apple)
    console.log(prices.sirloin)
    console.log(prices.filet)
}

/*
//Map Wangs
let mapWangs = () => {
    wangMap.set('Mandingo', 11)
    wangMap.set('Lex Steele', 13)
    wangMap.set('Seabiscuit', 15)
    wangMap.set('Godzilla', 1043)
}

*/

//Iterate Over Set
let iterateSet = () => {
    for (let value of set) console.log(value)
}

let iterateSetForEach = () => {
    set.forEach((value, valueAgain, set) => {
        console.log(value, valueAgain, set)
    })
}

