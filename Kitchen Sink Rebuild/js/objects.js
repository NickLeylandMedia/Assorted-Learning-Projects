let oneNameEl = document.getElementById('oneName')
let oneAgeEl = document.getElementById('oneAge')
let oneSpouseEl = document.getElementById('oneWife')
let twoNameEl = document.getElementById('twoName')
let twoAgeEl = document.getElementById('twoAge')
let twoSpouseEl = document.getElementById('twoHusband')

//New Person Info (Constructor Function)
let newName;
let newAge;
let newFood;

let indiv = {
    firstName: "Bob",
    lastName: "Cordova",
    age: 68,
    fullName() {
        return this.firstName + " " + this.lastName;
    }
}

//Property Assignment Objects
let man = {
    name: "Steve",
    age: 49,
    wife: ""
}

let woman = {
    name: "Jane",
    age: 23,
    husband: ""
}

function marriageRender() {
    oneNameEl.innerHTML = man.name
    oneAgeEl.innerHTML = man.age
    oneSpouseEl.innerHTML = man.wife
    twoNameEl.innerHTML = woman.name
    twoAgeEl.innerHTML = woman.age
    twoSpouseEl.innerHTML = woman.husband
}

function marry() {
    woman.husband = man.name;
    man.wife = woman.name;
    marriageRender()
}

function indivRender() {
    document.getElementById("indivFName").innerHTML = indiv.firstName;
    document.getElementById("indivLName").innerHTML = indiv.lastName;
    document.getElementById("indivAge").innerHTML = indiv.age;
    document.getElementById("indivFullName").innerHTML = indiv.fullName();
}

//Constructor function
function User() {
    this.name = newName;
    this.age = newAge;
    this.favoriteFood = newFood;
}

let user = new User();

function personInfo() {
    newName = prompt("Enter name","")
    newAge = prompt("Enter age","")
    newFood = prompt("Enter favorite food","")
}







