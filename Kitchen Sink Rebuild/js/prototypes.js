//Animal Protos
let animal = {
    eats: true,
    walk() {
        alert('animal walk')
    }
}

let rabbit = {
    jumps: true
}

let bear = {
    scavenges: true,
    __proto__: animal
}

rabbit.__proto__ = animal

//User Proto
let user = {
    name: 'John',
    surname: 'Smith',
    set fullName(value) {
        [this.name, this.surname] = value.split(" ")
    },
    get fullName() {
        return `${this.name} ${this.surname}`
    }
}

let admin = {
    __proto__: user,
    isAdmin: true
}


/* Functions */
let doesRabbitEat = () => {
    return console.log(rabbit.eats)
} 

let displayProtoProps = () => {
    console.log(`Admin fullname (pre assignment): ${admin.fullName}`)
    admin.fullName = 'Steve Buscemi'
    console.log(`Admin fullname (post assignment): ${admin.fullName}`)
    console.log(`User fullname - unchanged: ${user.fullName}`)
}