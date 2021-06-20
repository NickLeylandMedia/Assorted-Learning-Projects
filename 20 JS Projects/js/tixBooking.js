//Ticket Selector Constants
const tixCont = document.querySelector('#tixSelector-cont')
const seats = document.querySelectorAll('.conseat:not(.occupied)');
const occseats = document.querySelectorAll('.row .conseat.occupied')
const onl = document.querySelectorAll('.row .conseat')
const packageSelect = document.getElementById('package')
const error = document.getElementById('errMess')

//Form Constants
const checkout = document.getElementById('transaction-cont')
const checkoutButt = document.getElementById('checkSub')
const cancelbutt = document.getElementById('checkStop')
const showCheckout = document.getElementById('activCheckout')
const status = document.getElementById('status')

//Ticket Selector Variables
let seatCount = document.getElementById('seatsAmt')
let totalPrice = document.getElementById('grandTotal')
let selLimit = 0
let grand
let baseSeatPrice
let packagePrice
let reqResOne

//Form Vars
let firstName = document.getElementById('fname')
let lastName = document.getElementById('lname')
let email = document.getElementById('email')
let creditCard = document.getElementById('credit')

//Update Base Price Amount
function baseTotal() {
    let sm = document.querySelectorAll('.row .conseat.selected:not(.midVert, .largeVert)') 
    let md = document.querySelectorAll('.row .conseat.midVert.selected')
    let bg = document.querySelectorAll('.row .conseat.largeVert.selected')
    let total = (bg.length * 500) + (md.length * 250) + (sm.length * 50)
    return baseSeatPrice = total
}

//Update Package Price
function grabPackage() {
    packagePrice = packageSelect.value
    return packagePrice
}

//Grab Base Price and Add Package Price for grand total
function grandTotal() {
    baseTotal()
    grabPackage()
    let selSeats = document.querySelectorAll('.row .conseat.selected').length
    return grand = baseSeatPrice + (packagePrice * selSeats)
}

//Update selected count
function updateCount() {
    grandTotal()
    let amtSeats = document.querySelectorAll('.row .conseat.selected').length
    let selSeats = document.querySelectorAll('.row .conseat.selected')
    let seatsIndex = [...selSeats].map((seat) => {
        return [...seats].indexOf(seat)
    })
    console.log(seatsIndex)
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))
    seatCount.innerHTML = amtSeats
    totalPrice.innerHTML = grand
}

//Set Package Data
function setPackage(package, price) {   
    localStorage.setItem('concertPackage', package)
    localStorage.setItem('packagePrice', price)
}

//Populate UI
function populateInfo() {
    let selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))
    let occupiedSeats = JSON.parse(localStorage.getItem('occupiedSeats'))
    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected')
            }
        })
    }

    if (occupiedSeats !== null && occupiedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (occupiedSeats.indexOf(index) > -1) {
                seat.classList.add('occupied')
            }
        })
    }
}

/* Form Functions */
//Get Field Name
let getFieldName = (input) => {
    return input.name.charAt(0).toUpperCase() + input.name.slice(1)
}


//Show Success
function showSuccess(elem) {
    let parent = elem.parentElement
    let display = parent.querySelector('small')
    display.innerHTML = 'Good Job'
    elem.classList.remove('formFailure')
    elem.classList.add('formSuccess')
}

//Show Error
function showFailure(elem, message) {
    let parent = elem.parentElement
    let display = parent.querySelector('small')
    display.innerHTML = message
    elem.classList.remove('formSuccess')
    elem.classList.add('formFailure')
}

//Check for required fields
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

//Check credit card number
function checkNumber(input) {
    if (+input.value.length < 16) {
        showFailure(creditCard, 'Please enter a valid card number.')
        return false
    } else {
        showSuccess(creditCard)
        return true
    }
}

//Check All Fields and Submit/Occupy
function fullCheckConfirm() {
    checkRequired([firstName, lastName, creditCard, email])
    if (reqResOne == true) {
        checkEmail(email)
        if (checkEmail(email) == true) {
            checkNumber(creditCard)
            if (checkNumber(creditCard) == true) {
                confirmSeats()
                displayAndClose()
                updateCount()
            } else {
                console.log('Fix nigga')
            }  
        } else {
            console.log('Fix nigga')
        }
    }
}

//Confirm Seats and make them not clickable/reset window
function confirmSeats() {
    let selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))
    console.log(selectedSeats)
    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.remove('selected')
                seat.classList.add('occupied')
                setOccupied()
            } else {
                console.log('other')
            }
        })
    }
    localStorage.setItem('selectedSeats', [])
}

//Display Success Message and close form
function displayAndClose() {
    status.innerHTML = "Success! The form will close in 3 seconds!"
    setTimeout( () => {
        checkout.style.display = 'none'
        resetForm([firstName, lastName, email, creditCard])
    }, 3000)
}



//Reset Form
function resetForm(input) {
    if (Array.isArray(input)) {
        input.forEach((current) => {
            current.classList.remove('formSuccess', 'formFailure')
            let parent = current.parentElement
            let display = parent.querySelector('small')
            display.innerHTML = ''
            status.innerHTML = ''
        })
    } else {
        input.classList.remove('formSuccess', 'formFailure')
        let parent = input.parentElement
        let display = parent.querySelector('small')
        display.innerHTML = ''
        status.innerHTML = ''
    }


    
}

//Set Seats as occupied/store locally
function setOccupied() {
    let selSeats = document.querySelectorAll('.row .conseat.occupied')
    let seatsIndex = [...selSeats].map((seat) => {
    return [...onl].indexOf(seat)
    })
    localStorage.setItem('occupiedSeats', JSON.stringify(seatsIndex))
}

/* Event Listeners */
//Seat Click Event
tixCont.addEventListener('click', (e) =>{
    let selSeats = document.querySelectorAll('.row .conseat.selected').length

    if(e.target.classList.contains('conseat') && !e.target.classList.contains('occupied') && selSeats < 4) {
        e.target.classList.toggle('selected')
        updateCount()
    } else {
        if(e.target.classList.contains('conseat') && !e.target.classList.contains('occupied')) {
            e.target.classList.remove('selected')
            error.innerHTML = 'You may only select 4 seats'
            updateCount()
        }
        
    }
})

//Change package Price
packageSelect.addEventListener('change', (e) =>{
    grabPackage()
    setPackage(packageSelect.selectedIndex, packageSelect.value)
    updateCount()
})

//Make Checkout Visible
showCheckout.addEventListener('click', (e) => {
    checkout.style.display = 'flex'
})

//Checkout Submit
checkoutButt.addEventListener('click', (e) =>{
    e.preventDefault()
    fullCheckConfirm()

})

//Close Checkout
cancelbutt.addEventListener('click', (e) => {
    e.preventDefault()
    checkout.style.display = ''
})




//On Load
populateInfo()
updateCount()

