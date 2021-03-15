//Global Vars
var please = "I love to eat cake and ice cream by the oceanside with my dogs.";
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var basicArray = [1, 5, 10, 25, 50, 100];
var basicItem = "6969420LollerskatesR0fLm@0";
var arrayConcOne = ["Bob", "Jimmy", "Steve"];
var arrayConcTwo = ["Jane", "Stacy", "Charlene"];
var moddableArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var customPushArray = [10, 20, 30, 40, 50, 60, 70, 80 ,90];
var customInputString;
var shiftableArray = ["Lemon", "Pepper", "Zest", "Musk", "Grime"];

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


//Show length of array on button press
function renderBasicLength() {
    document.getElementById('basicArrayDisplay').innerHTML = basicArray;
}

function showBasicLength() {
    document.getElementById('basicLengthDisplay').innerHTML = basicArray.length;
    document.getElementById('basicLengthDisplay').style.color = "green";
}

//Determine whether object is an array.
function renderBasiclogic() {
    document.getElementById('basicArrayTestDisplayOne').innerHTML = basicArray;
    document.getElementById('basicArrayTestDisplayTwo').innerHTML = basicItem;
}

function testIfArray() {
    var resultOne = document.getElementById('basicArrayResultOne');
    var resultTwo = document.getElementById('basicArrayResultTwo');
    resultOne.innerHTML = Array.isArray(basicArray);
    resultOne.style.color = "green";
    resultTwo.innerHTML = Array.isArray(basicItem);
    resultTwo.style.color = "red";
}

//Concate Two Arrays
function renderBeforeConcate() {
    document.getElementById('preConcateOne').innerHTML = arrayConcOne;
    document.getElementById('preConcateTwo').innerHTML = arrayConcTwo;
}

function concatem() {
    document.getElementById('concatActivat').innerHTML = "CONCATED";
    document.getElementById('concatActivat').style.color = "green";
    let textOutput = document.getElementById('postConcate');
    let allPeople = arrayConcOne.concat(arrayConcTwo);
    textOutput.innerHTML = allPeople;
}

//Convert array to string
function renderbeforeString() {
    document.getElementById('preStringArray').innerHTML = basicArray;
}

function arrayToString() {
    let convertedArray = basicArray.toString();
    document.getElementById('postStringArray').innerHTML = convertedArray;
}

//Push value to array
function renderModdable() {
    document.getElementById('moddableArrayDisplay').innerHTML = moddableArray;
}

function pushToArray() {
    moddableArray.push(420);
    renderModdable();
}

//Push value to array from input
function renderPushable() {
    document.getElementById('customPushDisplay').innerHTML = customPushArray;
}

function setPushable() {
    var inputString = document.getElementById('pushableInput').value;
    customInputString = inputString;
}

function pushCustomToArray() {
    customPushArray.push(customInputString);
    renderPushable();
    document.getElementById('pushableInput').value = "";
}

//Shift value from Array
function renderShiftable() {
    document.getElementById('shiftDisplay').innerHTML = shiftableArray;
}

function shiftArrayBasic() {
    shiftableArray.shift();
    renderShiftable();
}

function resetBasicShiftable() {
    shiftableArray = ["Lemon", "Pepper", "Zest", "Musk", "Grime"];
    renderShiftable();
}

//Join Values of Array
function renderBeforeJoin() {
    document.getElementById('joinArrayOne').innerHTML = basicArray;
    document.getElementById('joinArrayTwo').innerHTML = moddableArray;
    document.getElementById('joinArrayThree').innerHTML = shiftableArray;
}

function joinArraysBasic() {
    var x = document.getElementById('joinArrayOne');
    var y = document.getElementById('joinArrayTwo');
    var z = document.getElementById('joinArrayThree');
    x.innerHTML = basicArray.join(" ");
    y.innerHTML = moddableArray.join(" ");
    z.innerHTML = shiftableArray.join(" ");
}

//On load
stringDisplay();
renderMasterTxt();
renderBasicLength();
renderBasiclogic();
renderBeforeConcate();
renderbeforeString();
renderModdable();
renderPushable();
renderShiftable();
renderBeforeJoin();





