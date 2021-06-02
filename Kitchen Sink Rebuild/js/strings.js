let addOne
let addTwo
let str

let  guestList = `Guests:
*Steven
*John
*Lily
`


/* Grab Values from Inputs and Display String*/
//Add Values Together
let sum = (x, y) => {
    return x + y
}
//Grab Values From Inputs
let grabOne = () => {
    addOne = document.getElementById('addInOne').value
    return addOne
}

let grabTwo = () => {
    addTwo = document.getElementById('addInTwo').value
    return addTwo
}
//Grab Values and Display to Element
let addAndRender = () => {
    grabOne()
    grabTwo()
    return document.getElementById('addDisp').innerHTML = `${addOne} + ${addTwo} = ${sum(+addOne, +addTwo)}`
}

/* Grab String From Input and Operate on It */
let grabString = () => {
    str = document.getElementById('strInput').value
}

let grabAndLeng = () => {
    grabString()
    return document.getElementById('lengDisp').innerHTML = str.length
}