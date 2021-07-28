//Variables - Number Comparison
let inpOne;
let inpTwo;


//Functions - Number Comparison
function promptForCompare() {
    inpOne = +prompt('Enter first number','');
    inpTwo = +prompt('Enter second number','');
    renderNumbers()
}

function checkIfGreater() {
    let valComp = inpOne > inpTwo ? true : false;
    return displayResult(valComp), console.log(valComp);
}

function displayResult(input) {
    if (input == true) {
        document.getElementById("resDisp").innerHTML = "Statement is true!";
    } else {
        document.getElementById("resDisp").innerHTML = "Statement is false!";
    }
}

function renderNumbers() {
    document.getElementById("numbDisp").innerHTML = inpOne + " > " + inpTwo;
}

//Function - Membership Fee
function getFee(isMember) {
    return (isMember ? '$2.00' : '$10.00')
}
