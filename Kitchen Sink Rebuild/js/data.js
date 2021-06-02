let num = 123
let ber = 456

let inpNum

let parString


//Buttons
let floorBtn = document.getElementById("floorBtn")
let ceilBtn = document.getElementById("ceilBtn")
let roundBtn = document.getElementById("roundBtn")
let truncBtn = document.getElementById("truncBtn")

const list = document.querySelector('#baseList');




//Numbers


//Create li 
function createLi(content) {
    let li = document.createElement('li');
    li.textContent = content;
    return li
}

//Number-to-String
function convStringIncBase() {
    for (let i = 2; i < 37; i++) {
        console.log(num.toString(i));
        list.appendChild(createLi(num.toString(i)));
    }
}


//Round Input Number
let grabFromIn = () => {
    inpNum = +document.getElementById('numInp').value
    document.getElementById('mathNum').innerHTML = inpNum
    actBtns()
}

let disBtns = () => {
    floorBtn.disabled = true;
    ceilBtn.disabled = true;
    roundBtn.disabled = true;
    truncBtn.disabled = true;
}

let actBtns = () => {
    floorBtn.disabled = false;
    ceilBtn.disabled = false;
    roundBtn.disabled = false;
    truncBtn.disabled = false;
}

let numFloor = () => {
    document.getElementById('modNum').innerHTML = Math.floor(inpNum)
}

let numCeil = () => {
    document.getElementById('modNum').innerHTML = Math.ceil(inpNum)
}

let numRound = () => {
    document.getElementById('modNum').innerHTML = Math.round(inpNum)
}

let numTrunc = () => {
    document.getElementById('modNum').innerHTML = Math.trunc(inpNum)
}

let roundFixed = (place) => {   
    document.getElementById('modNum').innerHTML = inpNum.toFixed(place)
}

//Check if value is finite
let checkIfFinite = (value) => {
    alert(isFinite(value))
}

//Check if value is NaN
let checkIfNan = (value) => {
    alert(isNaN(value))
}

//Check if two values are the same
let checkSame = (value1, value2) => {
    alert(Object.is(value1, value2))
}

/* Parse from input */
// Grab from input
let grabParseVal = () => {
    parString = document.getElementById('parseInp').value
}

//parseInt
let parseIntString = () => {
    alert(parseInt(parString))
}

//parseFloat
let parseFloatString = () => {
    alert(parseFloat(parString))
}

/* Math Functions */
//Generate Random Number
let genRandom = () => {
    alert(Math.random())
}

//Absolute Value
let absVal = (val) => {
    alert(Math.abs(val))
}

//Acos
let arcCos = (val) => {
    alert(Math.acos(val))
}

//Acos Hyperbolic
let arcCosHyp = (val) => {
    alert(Math.acosh(val))
}


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
//Math.asin()
//Math.asinh()
//Math.atan()
//Math.atanh()
//Math.atan2(y, x)
//Math.cbrt()
//Math.ceil()
//Math.clz32()
//Math.cos()
//Math.cosh()
//Math.exp()
//Math.expm1()
//Math.floor()
//Math.fround()
//Math.hypot()
//Math.imul()
//Math.log()
//Math.log1p()
//Math.log10()
//Math.log2()
//Math.max()
//Math.min()
//Math.pow()
//Math.random()
//Math.round()
//Math.sign()
//Math.sin()
//math.sinh()
//Math.sqrt()
//Math.tan()
//Math.tanh()
//Math.trunc()



//Reset Main Window
function resetMain() {
    list.innerHTML = ""
    document.getElementById('numInp').value = ""
    document.getElementById('modNum').innerHTML = ""
    document.getElementById('mathNum').innerHTML = ""
    disBtns()
}

//Run on Load
disBtns()

