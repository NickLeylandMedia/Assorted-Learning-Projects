//Global Vars
var please = "I love to eat cake and ice cream by the oceanside with my dogs.";
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function basicParamFunc(x, y) {
    let output = x + y;
    document.getElementById('bpfOutput').innerHTML = "ACTIVATED, CHECK CONSOLE";
    return console.log(output);
}

function basicObjectMap() {
    let person = {firstName: "John", lastName: "Doe", age: 50, eyeColor: "Blue"}
    document.getElementById('boFirstName').innerHTML = person.firstName;
    document.getElementById('boLastName').innerHTML = person.lastName;
    document.getElementById('boAge').innerHTML = person.age;
    document.getElementById('boEyeColor').innerHTML = person.eyeColor;
}

function basicObjectMethod() {
    let personTwo = {
        firstName: "Jane", 
        lastName: "Smith", 
        age: 50, 
        eyeColor: "Blue",
        fullName: function() {
            return this.firstName + " " + this.lastName;
        },
        ageXpression: function() {
            return this.age + " Years Old";
        },
        eyeXpression: function() {
            return "Beautiful " + this.eyeColor + " Eyes";
        }
    }
    document.getElementById('methFullName').innerHTML = personTwo.fullName();
    document.getElementById('methFullAge').innerHTML = personTwo.ageXpression();
    document.getElementById('methEyeColor').innerHTML = personTwo.eyeXpression();
}


document.getElementById('clickableText').onclick = function() {clickableText()};


//On Click Event
function clickableText() {
    document.getElementById('clickableText').innerHTML = "YOU HAVE CLICKED ME, PREPARE FOR THE WORST!";
    document.getElementById('clickableText').style.color = "red";
}

//On Blur Event
function onBlurFunc() {
    document.getElementById('onBlurText').style.display = "block";
    let inputText = document.getElementById('activateOnBlur');
    inputText.value = inputText.value.toUpperCase();
}

//On Change Event
function onChangeFunc(){
   var x = document.getElementById('onChangeSelect').value;
   document.getElementById('onChangeText').innerHTML = "You selected: " + x;
}

//On Focus Event
function onFocusFunc() {
    document.getElementById('activateOnFocus').style.border = "5px solid chartreuse";
    document.getElementById('focusedText').innerHTML = "You have activated my true power.";
    document.getElementById('focusedText').style.color = "green";
}

function clearBorder() {
    document.getElementById('activateOnFocus').style.border = "";
    document.getElementById('focusedText').innerHTML = "";
}

//Display Length of String
function stringDisplay() {
    document.getElementById('stringDisplayText').innerHTML = txt;
}

function basicStringLength() {
    var strLength = txt.length;
    document.getElementById('stringLengthText').innerHTML = strLength;
}

//Display Length of string from input.
function grabStringFromInput() {
    var inputString = document.getElementById('stringCountInput').value;
    var inputStringLength = inputString.length;
    document.getElementById('inputStringLength').innerHTML = inputStringLength;
}

//Index of phrase in string.
function renderMasterTxt() {
    document.getElementById('renderText').innerHTML = please;
}

function indexCake() {
    var posTitle = "Position of: Cake";
    var pos = please.indexOf("cake");
    document.getElementById('positionOf').innerHTML = posTitle;
    document.getElementById('displayPosition').innerHTML = pos;
}

function indexIce() {
    var posTitle = "Position of: Ice";
    var pos = please.indexOf("ice");
    document.getElementById('positionOf').innerHTML = posTitle;
    document.getElementById('displayPosition').innerHTML = pos;
}

function indexOceanside() {
    var posTitle = "Position of: Oceanside";
    var pos = please.indexOf("oceanside");
    document.getElementById('positionOf').innerHTML = posTitle;
    document.getElementById('displayPosition').innerHTML = pos;
}


//On load
stringDisplay();
renderMasterTxt();





