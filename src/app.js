// External Imports
import React from 'react'
import ReactDOM from 'react-dom'

// Component Imports
import IndecisionApp from './components/IndecisionApp'

// Final Render
ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

class OldSyntax {
    constructor() {
        this.name = 'Brad'
        this.getGreeting = this.getGreeting.bind(this)
    }
    getGreeting() {
        return `My name is ${this.name}`
    }
}

const oldSyntax = new OldSyntax()
const getGreeting = oldSyntax.getGreeting
console.log(getGreeting())


class NewSyntax {
    name = 'Brad'
    getGreeting = () => `My name is ${this.name}`
}

const newSyntax = new NewSyntax()
const newGetGreeting = newSyntax.getGreeting
console.log(newGetGreeting())
