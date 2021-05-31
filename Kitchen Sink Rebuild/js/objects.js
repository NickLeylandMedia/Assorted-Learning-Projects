let oneNameEl = document.getElementById('oneName')
let oneAgeEl = document.getElementById('oneAge')
let oneSpouseEl = document.getElementById('oneWife')
let twoNameEl = document.getElementById('twoName')
let twoAgeEl = document.getElementById('twoAge')
let twoSpouseEl = document.getElementById('twoHusband')

//Primitive Conversion Examples
let america_pop = population('USA', 350e6)
let mexico_pop = population('Mexico', 200e6)
let canada_pop = population("Canada", 200e6)

let america_pop_s = populationTwo('USA', 350e6)
let mexico_pop_s = populationTwo('Mexico', 200e6)
let canada_pop_s = populationTwo("Canada", 200e6)

let north_america_pop = america_pop_s + mexico_pop_s + canada_pop_s;



//New Person Info (Constructor Function)
let newName;
let newAge;
let newFood;
let user;

//Object with Method
let indiv = {
    firstName: "Bob",
    lastName: "Cordova",
    age: 68,
    fullName() {
        return this.firstName + " " + this.lastName;
    }
}

//Conditional Chaining Object
let recruit = {
    firstName: "Ludmila",
    lastName: "Stabin",
    age: 19
}

//Object for Primitive Conversion
let convObj = {
    firstName: "Steve",
    lastName: "Jackson",
    age: 68
}


//Conditional Chaining Element (For Display)
let condisp = document.getElementById('condDisp');

//Primitive Conversion Element (For Display)
let vertDisp = document.getElementById("vertDisp");
let vertDispTwo = document.getElementById("vertDispTwo");


/*   Property Assignment   */

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

//Property Assignment Functions
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

/* Render Object with Method */

function indivRender() {
    document.getElementById("indivFName").innerHTML = indiv.firstName;
    document.getElementById("indivLName").innerHTML = indiv.lastName;
    document.getElementById("indivAge").innerHTML = indiv.age;
    document.getElementById("indivFullName").innerHTML = indiv.fullName();
}

/*   Constructor Function   */

//Constructor Function
function User() {
    this.name = newName;
    this.age = newAge;
    this.favoriteFood = newFood;
}

//Prompt for Constructor Info
function personInfo() {
    newName = prompt("Enter name","")
    newAge = prompt("Enter age","")
    newFood = prompt("Enter favorite food","")
}

//Initiate Constructor
function construct() {
    user = new User();
    console.log(user);
}

//Render Constructor
function generate() {
    let disp = document.getElementById("personDisp");
    disp.innerHTML = "Name: " + user.name + ", " + "Age: " + user.age + ", " + "Favorite Food: " + user?.favoriteFood;
}

/*   Conditional Chaining   */
//Conditional Property ?.
let dispSuccess = () => condisp.innerHTML = recruit.firstName;

let dispError = () => condisp.innerHTML = recruit.location.street;

let dispUndef = () => condisp.innerHTML = recruit.location?.street;

//Conditional Method ?.()

//Conditional Property ?.[]

/* Object To Primitive Conversion */
function population(country, pop) {
    return {
        country: country,
        pop: pop
        }
}

function populationTwo(country, pop) {
    return {
        country: country,
        pop: pop,
        toString: function () {
            return "[Population " + "\"" + country + "\" " + pop + "]"
        },
        valueOf: function () {
            return pop;
        }
    };
}

//Value Display Functions
function disPop(fig) {
    document.getElementById("vertDisp").innerHTML = fig;
}

function disPopTs(fig) {
    document.getElementById("vertDispTwo").innerHTML = fig;
}

let disPopTot = (fig) => document.getElementById("dispTot").innerHTML = fig; 




