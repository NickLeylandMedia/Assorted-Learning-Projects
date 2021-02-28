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
        if (i < images.length) {
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

//Functions triggered on window load
window.onload = imageSlideshow();
window.onload = renderPushArray();
window.onload = displayArrayBasic();
window.onload = valueRender();
window.onload = renderPushArrayLoop();