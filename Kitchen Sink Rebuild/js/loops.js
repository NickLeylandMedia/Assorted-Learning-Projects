//Variables
let mainArray = ["John","Jimmy","Lucy","Bob","Fred"]
let arrayText = document.getElementById('arrayDisplay')
let actionText = document.getElementById('actionText')
let multArr = [[2,3],[4,5,6],[7,8,9,10]]

//Display Functions
function checkConsolePrompt() {
    actionText.innerHTML = "DONE! Check Console"
    actionText.style.color = "green"
}

//Action Functions
function mainRender() {
    arrayText.innerHTML = mainArray
}

function clearInput() {
    document.getElementById('arrayInput').value =""
}

function inputToArray() {
    mainArray.push(document.getElementById('arrayInput').value)
    mainRender()
    clearInput()
}

function printToConsoleBasic() {
    let i;
    for (i=0; i < 11; i = i+1) {
        console.log(i)
    }
    checkConsolePrompt()
}

function printToConsoleSimplified() {
    for (let i=0; i < 11; i++) {
        console.log(i)
    }
    checkConsolePrompt()
}

function printOddToConsole() {
    for (let i = 0; i < 101; i++) {
        if (i % 2 == 0) {
            continue
        }
        console.log(i + ' is an odd number')
    }
    checkConsolePrompt()
}

function addToPrompt() {
    let mathValue = parseInt(prompt("What value would you like to be added?",""))
    for (let i=0; i < 11; i++) {
        if (!mathValue) {
            actionText.innerHTML = "Please enter a value."
            actionText.style.color = "red"
            break;
        } 
        mathValue = mathValue + 1
        console.log(mathValue) 
        checkConsolePrompt()
    }  
}

function nestedLoopLogging() {
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 11; j++){
            console.log(i,j)
        }
    }

}

function nestedLoopMult() {
    for (let i = 0; i < multArr.length; i++) {
        for (let j = 0; j < multArr[i].length; j++) {
            let x = 2 * multArr[i][j]
            console.log(x)
            checkConsolePrompt()
        }
    }
}

function iterateToList() {
    
}

function testOutput() {

}









//Always at end
function hardReset() {
    mainArray = ["John","Jimmy","Lucy","Bob","Fred"]
    actionText.innerHTML = ""
    console.clear()
    mainRender()
}

//Execute on load
mainRender()
