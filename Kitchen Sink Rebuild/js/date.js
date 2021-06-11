let now = new Date()

let milliDate = new Date(0)

let flor2017 = new Date(2017, 03, 28, 09, 00, 00)

//Inputs
let year
let month
let day
let hour
let minute
let second 
let ms
let inDate

let justYear
let justMonth
let justDay
let justHour
let justMinute
let justSecond
let justMs






let showCurrent = () => {
    alert(now)
}

let showFlor = () => {
    alert(flor2017)
}

let grabDate = () => {
    year = +document.getElementById('year').value
    month = +document.getElementById('month').value
    day = +document.getElementById('day').value
    hour = +document.getElementById('hour').value
    minute = +document.getElementById('minute').value
    second = +document.getElementById('second').value
    ms = +document.getElementById('ms').value
}

let createFromIn = () => {
    grabDate()
    inDate = new Date(+year, +month, +day, +hour, +minute, +second, +ms)
    return console.log(inDate)
}

let grabYear = () => {
    createFromIn() 
    justYear = inDate.getFullYear()
    return console.log("Year: " + justYear)
}

let grabMonth = () => {
    createFromIn() 
    justMonth = inDate.getMonth()
    return console.log("Month: " + justMonth)
}

let grabDay = () => {
    createFromIn() 
    justDay = inDate.getDate()
    return console.log("Date: " + justDay)
}

let grabHours = () => {
    createFromIn()
    justHour = inDate.getHours()
    return console.log("Hour: " + justHour)
} 

let grabMinutes = () => {
    createFromIn()
    justMinute = inDate.getMinutes()
    return console.log("Minute: " + justMinute)
}

let grabSeconds = () => {
    createFromIn()
    justSecond = inDate.getSeconds()
    return console.log("Second: " + justSecond)
}

let grabMs = () => {
    createFromIn()
    justMs = inDate.getMilliseconds()
    return console.log("Millisecond: " + justMs)
}

let grabWeekDay = () => {
    createFromIn()
    justWd = inDate.getDay()
    return console.log("Day: " + justWd)
}