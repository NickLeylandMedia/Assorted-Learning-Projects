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

//Mapping/Manipulating Object
let market = {
    "Banana": 3,
    "Paper": 1,
    "Onion": 2,
    "Potion": 5,
    "Gold Bar": 50,
    "Marigold": 15
}

//Market Map
let dubbed = Object.fromEntries(Object.entries(market).map(([key, val]) => [key, val * 2]))

/* DeStructuring */
let huManArr = ["John","Smith"] 
let huWomanArr = ["Jane","Doe"]

let [manName, manSur] = huManArr
let [womanName, womanSur] = huWomanArr

let [species, subSpecies] = "Godzillus Taractus".split(' ')

let [a, b, c] = "abc"

let [one, two, three] = new Set([1, 2, 3])

let youngWoman = {};
[youngWoman.name, youngWoman.surname, youngWoman.profession] = "Taylor Smith Programmer".split(' ') 

let detective = new Map()
detective.set("name", "FlyntCoal")
detective.set("age", 30)

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"]

let {firstName, lastName, age, fullName} = indiv

let options = {
    title: "Menu",
    width : 100,
    height: 200
}

let {width: w, height: h, title} = options

let specs = {
    display: "Viewport"
}

let {vWidth = 1920, vHeight = 1080, display} = specs

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

/* Getters and Setters */
//Setter
let traveler = {
    Name: 'Dostin',
    Surname: 'Joob',
    TrailFirst: '',
    TrailSur: '',
    set learn(language) {
        this.langs.push(language)
    },
    langs : [],
    get fullName() {
        return `${this.Name} ${this.Surname}`
    },
    set trailName(value) {
        [this.TrailFirst, this.TrailSur] = value.split(" ")
    },
    get trailName() {
        return `${this.TrailFirst} ${this.TrailSur}`
    }
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


/* Iterate Over Objects */
//Display Keys
let displayKeys = (obj) => {
    let keys = Object.keys(obj)
    return document.getElementById("keyDisp").innerHTML = keys
}
//Display Values
let displayVals = (obj) => {
    let vals = Object.values(obj)
    return document.getElementById("valDisp").innerHTML = vals
}
//Display Entries
let displayEnts = (obj) => {
    let ents = Object.entries(obj)
    return document.getElementById("entDisp").innerHTML = ents
}

//Object Transformation
let logThings = () => {
    console.log(dubbed)
    console.log(dubbed.Marigold)
    console.log(dubbed['Gold Bar'])
}

//Object Destructuring
let logStruct = () => {
    console.log(manName)
    console.log(manSur)
    console.log(womanName)
    console.log(womanSur)
}

let logSpecies = () => {
    console.log(species)
    console.log(subSpecies)
}

let logAlpha = () => {
    console.log(a)
    console.log(b)
    console.log(c)
}

let logNum = () => {
    console.log(one)
    console.log(two)
    console.log(three)
}

let logWoman = () => {
    console.log(youngWoman.name)
    console.log(youngWoman.surname)
    console.log(youngWoman.profession)
}

let loopEntries = () => {
    for (let [key, value] of Object.entries(market)) {
        console.log(`${key}: ${value}`)
    }
}

let logDetective = () => {
    for (let [key, value] of detective) {
        console.log(`${key}: ${value}`)
    }
}

let logWoRest = () => {
    console.log(name1)
    console.log(name2)
}

let logRest = () => {
    console.log(rest[0])
    console.log(rest[1])
}

let logOptions = () => {
    console.log(title)
    console.log(w)
    console.log(h)
}

let logSpecs = () => {
    console.log(vWidth)
    console.log(vHeight)
    console.log(display)
}

//Setter Functions
let learnLang = () => {
    traveler.learn = 'EN'
    traveler.learn = 'FR'
    console.log(traveler.langs)
}

