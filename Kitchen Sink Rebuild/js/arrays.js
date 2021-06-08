let arrOne = ["Apple", "Orange", "Plum", "Kiwi", "Pomegranate"]
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Mary"},
    {id: 3, name: "Steve"}
]

let user

let termInpOne = document.getElementById("termInpOne")

let modTerm
let lengRes
let termValOne
let textInpVal
let searchTerm



//Get length of array
let arrLeng = (arr) => {
    lengRes = arr.length
    return lengRes
}

//Display Arrays
let renderUniv = (content, elem) => {
    document.getElementById(elem).innerHTML = content;
}

//Display Array One
let dispArrOne = () => {
    renderUniv(arrOne, "arrOneDisp")
}

//Get Length and render
let lengArrOne = () => {
    arrLeng(arrOne)
    renderUniv(lengRes,"arrOneLeng")
}

//Retrieve modification term
let setModTerm = () => {
    modTerm = termInpOne.value
    return modTerm
}

//Set Term Value
let setTermVal = () => {
    termValOne = arrOne[modTerm]
    return termValOne
}

//Display selected term
let dispSel = () => {
    setModTerm()
    setTermVal()
    renderUniv(termValOne, 'termDispOne')
}

//Set max
let setMax = (elem) => {
    elem.setAttribute("max",arrOne.length - 1)
}

//Grab text from input
let grabTxt = () => {
    textInpVal = document.getElementById("textInpOne").value
    return textInpVal
}

//Modify selected term
let termModify = () => {
    setModTerm()
    setTermVal()
    grabTxt()
    arrOne[modTerm] = textInpVal;
    setMax(termInpOne)
    return dispSel()
}

//Push to array
let arrPush = () => {
    grabTxt()
    arrOne.push(textInpVal)
    setMax(termInpOne)
    return dispArrOne()
}

//Shift From array
let arrShift = () => {
    arrOne.shift()
    dispArrOne()
    return setMax(termInpOne)
}

//Shift From array
let arrPop = () => {
    arrOne.pop()
    dispArrOne()
    return setMax(termInpOne)
}

//Log Array Items
let logArr = () => {
    for (let fruit of arrOne) {
        console.log(fruit)
    }
}

//Splice Array Items
let arrSpl = () => {
    arrOne.splice(1,2)
    dispArrOne()
    return setMax(termInpOne)
}

//Splice and Add to array
let splAdd = () => {
    arrOne.splice(1,2, "Guava", "Passion Fruit")
    dispArrOne()
    return setMax(termInpOne)
}

//Slice Array
let splArr = () => {
    let newArr = arrOne.slice(2,6)
    document.getElementById("newArrDisp").innerHTML = newArr
}

//Concat Array
let concArr = () => {
    let newArr = arrOne.concat("Balls", "Haggis")
    document.getElementById("newArrDisp").innerHTML = newArr
}

//Log Foreach
let forEachLog = () => {
    arrOne.forEach(console.log)
}

let forEachDesc = () => {
    arrOne.forEach((item, index, array) => {
        console.log(`${item} is at ${index} in ${array}`)
    })
}

//indexOf
let grabSearch = () => {
    searchTerm = document.getElementById('searchInp').value
    return searchTerm
}

let searchArr = () => {
    let searchResult = arrOne.indexOf(searchTerm, 0)
    document.getElementById('resDisp').innerHTML = `Position is ${searchResult}`
}

//Check if includes
let inclArr = () => {
    let result = arrOne.includes(searchTerm, 0)
    document.getElementById('resDisp').innerHTML = `Result is ${result}`
}


//Find user
let findUser = () => {
    user = users.find(item => item.id == 2)
    return console.log(user.name)
}


//Run On Load
setMax(termInpOne)



