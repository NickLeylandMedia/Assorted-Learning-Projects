let num = 123
let ber = 456

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



//Reset Main Window
function resetMain() {
    document.getElementById("baseList").innerHTML = "";
}

