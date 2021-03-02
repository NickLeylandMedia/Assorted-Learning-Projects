//Change Color of Header with Button
function changeHeaderColor() {
    document.getElementById('changeTextColorHeader').style.color = 'red';
}

//Change Image with Button
function changeImageBasic() {
    document.getElementById('changingImage').src = './img/cheesy.png';
}

//Basic Slideshow
function imageSlideshow() {
    var i = 0;
    var images = [];

    images[0] = "./img/cheesy.png";
    images[1] = "./img/cheesyHappy.png";
    images[2] = "./img/displeased.png";
    images[3] = "./img/excited.png";
    images[4] = "./img/hahaFun.png";
    images[5] = "./img/happy.png";
    images[6] = "./img/loopy.png";
    images[7] = "./img/nerd.png";
    images[8] = "./img/shocked.png";
    images[9] = "./img/superCheesy.png";

    var nextImage = function() {
        if (i < images.length - 1) {
            i++;
        } else {
            i= 0;
        }
        document.getElementById('buttonSlideshowImage').src = images[i];
    }

    var previousImage = function() {
        if (i>0) {
            i--;
        } else {
            i=images.length-1;
        }
        document.getElementById('buttonSlideshowImage').src = images[i];
    }

    document.getElementById('slideshowBack').addEventListener("click", previousImage);
    document.getElementById('slideshowForward').addEventListener("click", nextImage);
}

//Display Array Basic (Change with Buttons)
function displayArrayBasic() {
    disparray1 = ["Burger King", "McDonalds", "Wendys"];
    document.getElementById('basicArrayText').innerHTML = disparray1;
}

function changeDisplayArrayBasicFWD() {
    disparray2 = "Hamburgers and cheeseburgers work well with fries."
    document.getElementById('basicArrayText').innerHTML = disparray2;
}

function changeDisplayArrayBasicBCK() {
    disparray3 = ["Chilis", "Red Robin", "Ruby Tuesday"]
    document.getElementById('basicArrayText').innerHTML = disparray3;
}
   
//Push Value to Array
var basicArray = [];
    basicArray[0] = 1;
    basicArray[1] = 2;

function renderPushArray() {
    document.getElementById('buttonPushesToArrayDisplay').innerHTML = basicArray;
}    
function pushValueToArrayBasic() {
    basicArray.push(3);
    renderPushArray();
}

//Push Value to Array (INCREMENTING)
var basicArrayLoop = [];
    basicArrayLoop[0] = 1;
    basicArrayLoop[1] = 2;

var pushValue = 3;

function renderPushArrayLoop() {
    document.getElementById('buttonPushesToArrayLoopDisplay').innerHTML = basicArrayLoop;
}    
function pushValueToArrayLoopBased() {
    basicArrayLoop.push(pushValue);
    pushValue = pushValue + 1;
    renderPushArrayLoop();
}

//Operate Value with Buttons
var manipValue = 0;
function valueRender() {
    document.getElementById('buttonValue').innerHTML = manipValue;
}

function minusOneHundred() {
    manipValue = manipValue - 100;
    valueRender();    
}

function minusTen() {
    manipValue = manipValue - 10;
    valueRender();
}

function minusOne() {
    manipValue = manipValue - 1;
    valueRender();    
}

function plusOne() {
    manipValue = manipValue + 1;
    valueRender();    
}

function plusTen() {
    manipValue = manipValue + 10;
    valueRender();    
}

function plusOneHundred() {
    manipValue = manipValue + 100;
    valueRender();    
}

//Enable-Disable Button with Other Buttons
function enableButton() {   
    document.getElementById('controlledButton').disabled = false;
}

function disableButton() {
    document.getElementById('controlledButton').disabled = true;
    document.getElementById('toggledButtonText').style.display = 'none';
}

function toggledButtonText() {
    document.getElementById('toggledButtonText').style.display = 'block';
}

//Add Class With Button Press
function addClass() {
    document.getElementById('classedImage').classList.add('activeImage');
}

//Display JSON as Divs
var basicJson = {Name: "Joe Brown", Age: 22, Location: "New York", FavoriteColor: "Red", FavoriteFood: "Pizza"}

function jsonToString() {
    var outputJson = JSON.stringify(basicJson);
    document.getElementById('jsonDisplayText').innerHTML = outputJson;
}

function renderJsonToDivs() {
    var jsonName = basicJson.Name;
    var jsonAge = basicJson.Age;
    var jsonLocation = basicJson.Location;
    var jsonColor = basicJson.FavoriteColor;
    var jsonFood = basicJson.FavoriteFood;
    document.getElementById('renderName').innerHTML = jsonName;
    document.getElementById('renderAge').innerHTML = jsonAge;
    document.getElementById('renderLocation').innerHTML = jsonLocation;
    document.getElementById('renderFavColor').innerHTML = jsonColor;
    document.getElementById('renderFavFood').innerHTML = jsonFood;
}

//Display mutiple objects to mutiple divs
var complexJson = [
    {Name: "Joe Brown", Age: 22, Location: "New York", FavoriteColor: "Red", FavoriteFood: "Pizza"},
    {Name: "Bob Hope", Age: 67, Location: "San Diego", FavoriteColor: "Blue", FavoriteFood: "Steak"},
    {Name: "Susan Smith", Age: 19, Location: "Los Angeles", FavoriteColor: "Pink", FavoriteFood: "Sushi"}
]


function renderManyDivs() {
    var jsonName1 = complexJson[0].Name;
    var jsonAge1 = complexJson[0].Age;
    var jsonLocation1 = complexJson[0].Location;
    var jsonColor1 = complexJson[0].FavoriteColor;
    var jsonFood1 = complexJson[0].FavoriteFood;
    var jsonName2 = complexJson[1].Name;
    var jsonAge2 = complexJson[1].Age;
    var jsonLocation2 = complexJson[1].Location;
    var jsonColor2 = complexJson[1].FavoriteColor;
    var jsonFood2 = complexJson[1].FavoriteFood;
    var jsonName3 = complexJson[2].Name;
    var jsonAge3 = complexJson[2].Age;
    var jsonLocation3 = complexJson[2].Location;
    var jsonColor3 = complexJson[2].FavoriteColor;
    var jsonFood3 = complexJson[2].FavoriteFood;
    document.getElementById('multiNameOne').innerHTML = jsonName1;
    document.getElementById('multiNameTwo').innerHTML = jsonName2;
    document.getElementById('multiNameThree').innerHTML = jsonName3;
    document.getElementById('multiAgeOne').innerHTML = jsonAge1;
    document.getElementById('multiAgeTwo').innerHTML = jsonAge2;
    document.getElementById('multiAgeThree').innerHTML = jsonAge3;
    document.getElementById('multiLocationOne').innerHTML = jsonLocation1;
    document.getElementById('multiLocationTwo').innerHTML = jsonLocation2;
    document.getElementById('multiLocationThree').innerHTML = jsonLocation3;
    document.getElementById('multiColorOne').innerHTML = jsonColor1;
    document.getElementById('multiColorTwo').innerHTML = jsonColor2;
    document.getElementById('multiColorThree').innerHTML = jsonColor3;
    document.getElementById('multiFoodOne').innerHTML = jsonFood1;
    document.getElementById('multiFoodTwo').innerHTML = jsonFood2;
    document.getElementById('multiFoodThree').innerHTML = jsonFood3;
}

//DYNAMICALLY CREATE ELEMENTS FROM ARRAY
function dynamicArray() {
    var arrayLength = complexJson.length;
    var parentBin = document.getElementById('dynamCont');
    
    for (i = 0; i < arrayLength; i++) {
        var person = complexJson[i];
        var temp = document.getElementById('person-template').content.cloneNode(true);
        temp.querySelector('.dynamicName').innerText = person.Name;
        temp.querySelector('.dynamicAge').innerText = person.Age;
        temp.querySelector('.dynamicLocation').innerText = person.Location;
        temp.querySelector('.dynamicColor').innerText = person.FavoriteColor;
        temp.querySelector('.dynamicFood').innerText = person.FavoriteFood;
        parentBin.appendChild(temp);
    }

}

//Functions triggered on window load
window.onload = imageSlideshow();
window.onload = renderPushArray();
window.onload = displayArrayBasic();
window.onload = valueRender();
window.onload = renderPushArrayLoop();
window.onload = disableButton();
window.onload = jsonToString();