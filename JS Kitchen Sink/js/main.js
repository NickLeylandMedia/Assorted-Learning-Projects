function changeHeaderColor() {
    document.getElementById('changeTextColorHeader').style.color = 'red';
}

function changeImageBasic() {
    document.getElementById('changingImage').src = './img/cheesy.png';
}

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

function pushValueToArrayBasic() {
    var basicArray = [];
    basicArray[0] = 1;
    basicArray[1] = 2;

    document.getElementById('buttonPushesToArrayDisplay').innerHTML = basicArray;
}

window.onload = imageSlideshow();
window.onload = pushValueToArrayBasic();