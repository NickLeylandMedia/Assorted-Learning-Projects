let addOne
let addTwo
let str

let searchStr = "Six green slices of ham with the caviar for the bride of the honorable guest."
let substr = "the"

let indices = []

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
    document.getElementById('stringDisp').innerHTML = str
    return document.getElementById('lengDisp').innerHTML = str.length
}

let strPos = (pos) => {
    grabString()
    document.getElementById('stringDisp').innerHTML = str
    return document.getElementById('posDisp').innerHTML = str[pos]
}

//Loop over string and display characters

//Change String to Uppercase
let changeUpper = () => {
    grabString()
    document.getElementById('stringDisp').innerHTML = str
    return document.getElementById('caseDisp').innerHTML = str.toUpperCase()
}

//Change String to Lowercase
let changeLower = () => {
    grabString()
    document.getElementById('stringDisp').innerHTML = str
    return document.getElementById('caseDisp').innerHTML = str.toLowerCase()
}

/* Search String for Value */
//Render String
let renderSearch = () => {
    document.getElementById('searchDisp').innerHTML = searchStr
}

//Search for First Occurrence
let search = (val) => {
    renderSearch()
    document.getElementById('resultDisp').innerHTML = searchStr.indexOf(val, 0)
}

//Search for All Occurrences
function findAll(string, value) {
    let currentIndex = string.indexOf(value)
    while (currentIndex != -1) {
        indices.push(currentIndex)
        currentIndex = string.indexOf(value, currentIndex + value.length)
    }
    document.getElementById('resultDisp').innerHTML = indices
    document.getElementById('totalDisp').innerHTML = indices.length
    return indices;
}

//Check if String Includes
let checkInclude = (value) => {
    document.getElementById('inclDisp').innerHTML = "String includes " + value
    document.getElementById('inclRes').innerHTML = searchStr.includes(value)
}

//Check if String Starts With
let checkStart = (value) => {
    document.getElementById('inclDisp').innerHTML = "String starts with " + value
    document.getElementById('inclRes').innerHTML = searchStr.startsWith(value)
}

//Check if String Ends With
let checkEnd = (value) => {
    document.getElementById('inclDisp').innerHTML = "String ends with " + value
    document.getElementById('inclRes').innerHTML = searchStr.endsWith(value)
}

let sliceFrom = (pos) => {
    renderSearch()
    return document.getElementById('sliceDisp').innerHTML = searchStr.slice(pos)
}