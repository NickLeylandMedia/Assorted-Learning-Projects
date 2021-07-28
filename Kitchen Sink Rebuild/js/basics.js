//Variables - Convert To String
let firstConvertText = document.getElementById('booleanText');
let secondConvertText = document.getElementById('numberText');
let firstTypeText = document.getElementById('typeOne');
let secondTypeText = document.getElementById('typeTwo');  
let firstConvert = true;
let firstConvertedString;
let secondConvertedString;
let secondConvert = 123;

//Variables - Convert To Number
let stringNumbers = "123";
let displayStringNumbers = document.getElementById('numberString');
let displayNumberType = document.getElementById('numberType');
let convertedNumber;



//Retrieve and display value from prompt
function retrieveAndRender() {
    let resultText = document.getElementById('textFromPrompt');
    let promptResult = prompt("Enter Text Below", "Right here bruv");

    resultText.innerHTML = promptResult;
}


//Convert To String
function displayBeforeConvert() {
    firstConvertText.innerHTML = firstConvert;
    secondConvertText.innerHTML = secondConvert;
    firstTypeText.innerHTML = typeof(firstConvert);
    secondTypeText.innerHTML = typeof(secondConvert);
}

function convertToString() {
    firstConvertedString = String(firstConvert);
    secondConvertedString = String(secondConvert);
    firstTypeText.innerHTML = typeof(firstConvertedString);
    secondTypeText.innerHTML = typeof(secondConvertedString);
}

//Convert To Number
function basicConversionMath() {
    let mathOne = "6" / "2";
    let displayOne = document.getElementById('resultDisplayOne');
    displayOne.innerHTML = mathOne;
}

function displayNumbers() {
    displayStringNumbers.innerHTML = stringNumbers;
    displayNumberType.innerHTML = typeof(stringNumbers);
}

function convertToNumber() {
    convertedNumber = Number(stringNumbers);
    displayNumberType.innerHTML = typeof(convertedNumber);
}

//IF Functions
function basicIfPrompt() {
    let year = prompt('What year did you graduate high school?', '');

    if (year == 2014) alert("You're correct, champ!")
}

function expandedIfPrompt() {
    let newYear = prompt('What year did you go to Florida with friends?')

    if (newYear == 2017) {
        alert('You are correct, ese!')
    } else {
        alert('Lol, nope, dumbass!')
    }
}

function elseIfPrompt() {
    let year = prompt('What year was your first major Vermont trip?')

    if (year < 2016) {
        alert("Too early...")
    } else if (year > 2016) {
        alert("Too late...")
    } else {
        alert("That's the one!")
    }
}

function complexConditionalOperator() {
    let accessAllowed;
    let age = prompt('Are you legal?', 'Type age here...')
    let displayText = document.getElementById('legalityText');


    if (age >= 18) {
        accessAllowed = true;
        displayText.innerHTML = "Sup girl, whats yo numba? ;)"
        displayText.style.color = "green"
    } else {
        accessAllowed = false;
        displayText.innerHTML = "Want a coloring book?"
        displayText.style.color = "red"
    }

    alert(accessAllowed);
}

function simplifiedConditionalOperator() {
    let displayText = document.getElementById('legalityTextTwo')
    let age = prompt('Legal or jailbait?', 'input age here')
    let accessAllowed = (age >= 18) ? true : false;

    if (accessAllowed == true) {
        displayText.innerHTML = "You eat ass?"
    } else {
        displayText.innerHTML = "Which daycare did you escape from?"
    }
}

function superSimpleConditional() {
    let displayText = document.getElementById('legalityTextThree')
    let age = prompt('What kind of human are you?', '')
    let message = (age < 3) ? 'Hi, baby!' :
    (age < 18) ? 'Hello, young human!' :
    (age > 18 && age < 100) ? 'You have a job yet?' :
    (age > 100) ? 'Who taught you to use a computer?' : 'What kind of human are you??'; 

    displayText.innerHTML = message;
}

function basicOrLogical() {
    let displayText = document.getElementById('orDisplayText');
    let month = prompt('What month is it?', 'Enter a number');

    if (month == 6 || month == 7 || month == 8) {
        displayText.innerHTML = "Yay! It's summer"
    } else {
        displayText.innerHTML = "Who cares..."
    }
}

function basicAndLogical() {
    let displayText = document.getElementById('andDisplayText')
    let age = prompt("Are you in your 20's?", "Enter Age")

    if (age >= 20 && age <= 29) {
        displayText.innerHTML = "Yes you are!!"
    } else {
        displayText.innerHTML = "Nope, gtfo poser."
    }
}

function basicNotLogical() {
    let displayText = document.getElementById('notDisplayText')
    
}


