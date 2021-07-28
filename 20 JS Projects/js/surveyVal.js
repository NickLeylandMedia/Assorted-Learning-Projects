//Input Variables
let firstName = document.getElementById('fname')
let lastName = document.getElementById('lname')
let email = document.getElementById('email')
let birthday = document.getElementById('dob')
let taco = document.getElementById('taco')
let spy = document.getElementById('illu')
let safeWord = document.getElementById('safe')
let conSafeWord = document.getElementById('safecon')
let formObj = {}
let reqResOne

//Form Constants
const form = document.getElementById('regForm')
const firstElem = document.getElementById('firstnameque')
const lastElem = document.getElementById('lastnameque')
const emailElem = document.getElementById('emailque')
const bdayElem = document.getElementById('bdayque')
const tacoElem = document.getElementById('tacoque')
const illuElem = document.getElementById('illuque')
const safeElem = document.getElementById('safeque')
const safeConElem = document.getElementById('safeconque')
const resultElem = document.getElementById('formResult')
const formRes = document.getElementById('underForm')

//Form Buttons
const nextButt = document.getElementById('next')
const submitButt = document.getElementById('submit')



/* Element Visibility */
//Hide Element
function hide(elem) {
    elem.forEach(function (input) {
        input.style.display = 'none'
    })
}
//Make Element Visible
function makeVis(elem) {
    elem.forEach(function (input) {
        input.style.removeProperty('display')
    })
}

/* Field Names */
//Get Field Name
let getFieldName = (input) => {
    return input.name.charAt(0).toUpperCase() + input.name.slice(1)
}


/* Apply Success or Failure Class */
//Show Success
function showSuccess(elem) {
    let parent = elem.parentElement
    let display = parent.querySelector('small')
    display.innerHTML = 'Good Job'
    elem.classList.remove('formFailure')
    elem.classList.add('formSuccess')
}

//Show Failure
function showFailure(elem, message) {
    let parent = elem.parentElement
    let display = parent.querySelector('small')
    display.innerHTML = message
    elem.classList.remove('formSuccess')
    elem.classList.add('formFailure')
}

/* Check for required fields */
//Check for Required Fields
function checkRequired(input) {
    if (Array.isArray(input)) {
        input.forEach(function (current) {
            if (current.value.trim() === '') {
                showFailure(current, `${getFieldName(current)} is required.`)
                reqResOne = false
            } else {
                showSuccess(current)
                reqResOne = true
            }
        })
    } else {
        if (input.value.trim() === '') {
            showFailure(input, `${getFieldName(input)} is required.`)
            reqResOne = false
        } else {
            showSuccess(input)
            reqResOne = true
        }
    }
}

/* Verify Email */
//Check if Email is Valid
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (re.test(input.value)) {
        showSuccess(input)
        return true
    } else {
        showFailure(input, `Please enter a valid email address.`)
        return false
    }
}

/* Check For Matching Values */
//Check if Inputs Match
function checkMatch(one, two) {
    if (one.value.trim() === two.value.trim()) {
        showSuccess(one)
        showSuccess(two)
        return true
    } else {
        showFailure(one, 'Safe word does not match confirmation.')
        showFailure(two, 'Safe word does not match.')
        return false
    }
}

/* Save Form as Object */
//Save Values to Object
function saveToObj() {
    formObj.fname = firstName.value
    formObj.lname = lastName.value
    formObj.email = email.value
    formObj.bday = birthday.value
    formObj.safeword = safeWord.value
}

/* Perform All Checks and Save */
//Perform Checks - Advance Form
function firstCheck(input) {
    checkRequired(input)
    if (reqResOne == true) {
        let emailResult = checkEmail(email)
        if (emailResult == true) {
            hide([firstElem, lastElem, emailElem, bdayElem, nextButt])
            makeVis([tacoElem, illuElem, submitButt, safeElem, safeConElem])
        } else {
            alert('Please Correct the Form.')
        }
    } else {
        alert('Please Correct the Form.')
    }
}

//Perform Checks - Save to Object
function secondCheck(input) {
    checkRequired(input)
    if (reqResOne == true) {
        let matchResult = checkMatch(safeWord, conSafeWord)
        if (matchResult == true) {
            saveToObj()
            resultElem.innerHTML = 'Thank you for answering the survey!'
            makeVis([formRes])
            alert('Thanks for answering our survey. We will contact you if we remember to.')
            console.log(formObj)
        } else {
            alert('Please Correct the Form.')
        }
    } else {
        alert('Please Correct the Form.')
    }
}

/* Event Listeners */
nextButt.addEventListener('click', function (e) {
    e.preventDefault()
    firstCheck([fname, lname, email, birthday])
})

form.addEventListener('submit', function (e) {
    e.preventDefault()
    secondCheck([taco, spy, safeWord, conSafeWord])
})



//On Load
hide([tacoElem, illuElem, submitButt, safeElem, safeConElem, formRes])