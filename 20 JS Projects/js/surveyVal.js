//Input Variables
let firstName = document.getElementById('fname')
let lastName = document.getElementById('lname')
let email = document.getElementById('email')
let birthday = document.getElementById('dob')

//Form Constants
const form = document.getElementById('regForm')
const firstElem = document.getElementById('firstnameque')
const lastElem = document.getElementById('lastnameque')
const emailElem = document.getElementById('emailque')
const bdayElem = document.getElementById('bdayque')
const tacoElem = document.getElementById('tacoque')
const illuElem = document.getElementById('illuque')

//Form Buttons
const nextButt = document.getElementById('next')
const submitButt = document.getElementById('submit')



/* Element Visibility */
//Hide Element
function hide(elem) {
    elem.forEach(function(input){
        input.style.display = 'none'
    })
}
//Make Element Visible
function makeVis(elem) {
    elem.forEach(function(input){
        input.style.removeProperty('display')
    })
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
function showFailure(elem) {
    let parent = elem.parentElement
    let display = parent.querySelector('small')
    display.innerHTML = 'Try Again'
    elem.classList.remove('formSuccess')
    elem.classList.add('formFailure')
}

/* Check for required fields */
//Check for Required Fields
function checkRequired(input) {
    if (Array.isArray(input)) {
        input.forEach(function(current) {
            if (current.value.trim() === '') {
                showFailure(current)
            } else {
                showSuccess(current)
            }
        })
    } else {
        if (input.value.trim() === '') {
            showFailure(input)
        } else {
            showSuccess(input)
        }
    }
}

/* Event Listeners */
nextButt.addEventListener('click', function(e) {
    e.preventDefault()
    hide([firstElem, lastElem, emailElem, bdayElem, nextButt])
    makeVis([tacoElem, illuElem, submitButt])
})

form.addEventListener('submit', function(e) {
    e.preventDefault()
    
})



//On Load
hide([tacoElem, illuElem, submitButt])