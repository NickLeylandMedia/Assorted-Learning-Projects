const form = document.getElementById('regForm')
const username = document.getElementById('usernameInp')
const email = document.getElementById('emailInp')
const password = document.getElementById('passwordInp')
const conPassword = document.getElementById('confPasswordInp')

const nameStatus = document.getElementById('nameStatus')
const emailStatus = document.getElementById('emailStatus')
const passwordStatus = document.getElementById('passwordStatus')
const conPasswordStatus = document.getElementById('conPasswordStatus')

//Functions
function showError(input, message) {
    const formControl = input.parentElement
    formControl.className = 'formError'
    const small = formControl.querySelector('small')
    small.innerText = message
    small.style.color = 'red'
}

function showSuccess(input) {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')
    formControl.className = 'formSuccess'
    small.innerText = ''
}

//Check email validity
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}

//Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        if(input.value.trim() === '') {
            showError(input, `${input.id} is required`)
        } else {
            showSuccess(input)
        }
    })
}

//Event Listeners
form.addEventListener('submit', function(e) {
    e.preventDefault()

    checkRequired([username, email, password, conPassword])

})