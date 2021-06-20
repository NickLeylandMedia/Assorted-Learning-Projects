const tixCont = document.querySelector('#tixSelector-cont')
const seats = document.querySelectorAll('.seat:not(.occupied)');
const packageSelect = document.getElementById('package')
const error = document.getElementById('errMess')

let seatCount = document.getElementById('seatsAmt')
let totalPrice = document.getElementById('grandTotal')
let selLimit = 0
let amount
let grand

let baseSeatPrice
let packagePrice

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
    let selSeats = document.querySelectorAll('.row .conseat.selected').length
    seatCount.innerHTML = selSeats
    totalPrice.innerHTML = grand
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
packageSelect.addEventListener('change', () =>{
    grabPackage()
    updateCount()
})
