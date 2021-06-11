let student = {
    name: 'John',
    age: 23,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
}

let json = JSON.stringify(student)

let meetup = {
    title: "Conference",
    room: {
        number: 23,
        participants: ["john", "ann"]
    }
}

let nested = JSON.stringify(meetup)

let backCon = JSON.parse(nested)

let room = {
    number: 23
}

let conv = {
    title: "RTX",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room
}

room.occupiedby = conv

let hotelRoom = {
    number: 69,
    toJSON() {
        return this.number
    }
}

let eventCon = {
    title: "wangCon",
    hotelRoom
}

let currentDate = new Date()

let newObj = {
    title : "BoobCon",
    date: currentDate
}

let obJson = JSON.stringify(newObj)

let obParse = JSON.parse(obJson)

let comParse = JSON.parse(obJson, function(key, value) {
    if (key == 'date') return new Date(value)
    return value
})









let stringifyWithFunc = () => {
    JSON.stringify(conv, function replacer (key, value) {
        alert(`${key}: ${value}`)
        return (key == 'occupiedBy') ? undefined : value
    } )
}

let univRend = (elem, content) => {
    document.getElementById(elem).innerHTML = content
}