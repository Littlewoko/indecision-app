class Person {
    constructor(name = 'Unknown', age = 0) {
        this.name = name
        this.age = age
    }
    getGreeting() {
        return `Hey, i am ${this.name}.`
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, course) {
        super(name, age)
        this.course = course
    }
    hasCourse() {
        return this.course
    }
    getDescription() {
        let description = super.getDescription()

        if (this.hasCourse()) {
            description += ` Their course is ${this.course}`
        }

        return description
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }
    getGreeting() {
        let greeting = super.getGreeting()

        if (this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}`
        }

        return greeting
    }
}

const watkins = new Traveler('Bradley Watkins', 22, 'CompSci')
console.log(watkins.getGreeting())
const newe = new Person('Human')
console.log(newe.getGreeting())