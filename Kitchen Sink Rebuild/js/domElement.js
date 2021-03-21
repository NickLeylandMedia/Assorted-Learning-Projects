//Global Vars
let eventListenerText = document.getElementById('eventListenerText');
//appendChild()
const appendChild = document.querySelector('#appendChild');



//accessKey
document.getElementById('accessKeyButton').accessKey = "b";

function activateAccessKey() {
    document.getElementById('accessKeyText').innerHTML = "ACTIVATED 'ER"
}

//addEventListener()
eventListenerText.addEventListener("click", function() {
    eventListenerText.innerHTML = "YOU HAVE CLICKETH ME!";
});

//appendChild()
function createLi(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}

function populateLi() {
    appendChild.appendChild(createLi('Apples'));
    appendChild.appendChild(createLi('Oranges'));
    appendChild.appendChild(createLi('Bananas'));
}    

//attributes
function howManyAttributes() {
    let attrLength;
    attrLength = document.getElementById('attributesText').attributes.length;
    document.getElementById('attributesDisplayText').innerHTML = "Number of attributes: " + attrLength;
}

//blur()
function blurFocus() {
    document.getElementById('blurText').focus();
}

function blurBlur() {
    document.getElementById('blurText').blur();
}

//childElementCount
function countChildElements() {
    let offspring = document.getElementById('childElementContMain').childElementCount;

    univ("elementCountText", "The div has " + offspring + " children.");

}

//childNodes
function pageChildNodes() {
    let nodeSource = document.body.childNodes;
    let content = "";
    let i;
    for (i = 0; i < nodeSource.length; i++) {
        content = content + nodeSource[i].nodeName + "<br>"; 
    }

    document.getElementById('childNodeDisplayText').innerHTML = content;
}

//children
function pageChildren() {
    let nodeSource = document.body.children;
    let content = "";
    let i;
    for (i = 0; i < nodeSource.length; i++) {
        content = content + nodeSource[i].tagName + "<br>"; 
    }

    document.getElementById('childrenDisplayText').innerHTML = content;
}

//classList
function classListStart() {
    document.getElementById('removeClass').disabled = true;
    document.getElementById('itemClass').disabled = true;
}

function classListAdd() {
    document.getElementById('classListHeader').classList.add("outlined");
    document.getElementById('removeClass').disabled = false;
    document.getElementById('itemClass').disabled = false;
}

function classListContains() {
    let result = document.getElementById('classListHeader').classList.contains("outlined");
    univ("classListText", "Contains class list: " + result);
}

function classListItem() {
    let result = document.getElementById('classListHeader').classList.item(0);
    univ("classListText", result);
}

function classListRemove() {
    document.getElementById('classListHeader').classList.remove("outlined");
    document.getElementById('removeClass').disabled = true;
    document.getElementById('itemClass').disabled = true;
}

function classListToggle() {
    let element = document.getElementById('classListHeader');
    element.classList.toggle("blownUp");
}

//className
function addClassName() {
    document.getElementById('classNameText').className = "redHead";
}

//click()
function simulateClick() {
    document.getElementById('simulateButton').click();
}

function clickAction() {
    window.alert("The button was clicked!");
}

//clientHeight
function getHeight() {
    let elem = document.getElementById('clientHeight');
    let text = "Height with padding: " + elem.clientHeight + "px";
    univ("clientHeightText", text);
}

//clientLeft
function getLeft() {
    let elem = document.getElementById('leftBorderText');
    let text = "Your left border is " + elem.clientLeft + "px";
    univ("leftBorderText", text);
}

//clientTop
function getTop() {
    let elem = document.getElementById('topBorderText');
    let text = "Your top border is " + elem.clientTop + "px";
    univ("topBorderText", text);
}

//clientWidth
function getWidth() {
    let elem = document.getElementById('clientWidth');
    let text = "Width with padding: " + elem.clientWidth + "px";
    univ("clientWidthText", text);
}

//cloneNode
function cloneListItem() {
    let itm = document.getElementById('cloneFromOne').firstElementChild;
    let cln = itm.cloneNode(true);
    document.getElementById('cloneToOne').appendChild(cln);

    let fullItm = document.getElementById('cloneFromTwo');
    let clnTwo = fullItm.cloneNode(true);
    document.getElementById('cloneToTwo').appendChild(clnTwo);
}

//closest()
function applyToClosest() {
    var closestElement = document.getElementById('findMyPar');
    var close = closestElement.closest("#searchForMe");
    if (close) {
        close.style.border = "15px solid blue";
    }
}

//compareDocumentPosition



//contains()
function checkIfContains() {
    let p = document.getElementById('checkForP');
    var divContains = document.getElementById('moduleContains').contains(p);
    document.getElementById('displayPContains').innerHTML = divContains;
    document.getElementById('displayPContains').style.color = "chartreuse";
}

//contentEditable
function makeEditable() {
    document.getElementById('editableText').contentEditable = true;
    univ("editableTextStatus", "The above text is now editable.");
}

function disableEditable() {
    document.getElementById('editableText').contentEditable = false;
    univ("editableTextStatus", "");
}




//Universal Render
function univ(target, content) {
    document.getElementById(target).innerHTML = content;
}

//On load
classListStart()