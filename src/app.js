import React from 'react'
import ReactDOM from 'react-dom'

import AddOption from './components/AddOption'
import Option from './components/Option'
import Action from './components/Action'
import Header from './components/Header'

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: []
        }
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if (options) {
                this.setState(() => ({ options }))
            }
        } catch (e) {
            // Fallback on default
        }
        
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.options.length !== prevState.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }
    componentWillUnmount() {
        console.log('unmount')
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option!==optionToRemove)
        }))
    }
    handlePick() {
        const rand = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[rand]
        alert(option)
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }

        this.setState((prevState) => ({ options: prevState.options.concat([option]) }))
        
    }
    render() {
        const subtitle = 'Put Your Life in the Hands of a Computer'
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick} 
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions} 
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

const Options = (props) => {
    return (
        <div>
            <button 
                onClick={props.handleDeleteOptions}
            >
                Remove All Options
            </button>
            {
                props.options.length === 0 && 
                <p>Please add an option to get started</p>
            }
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        option={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))   
            } 
        </div>
    )
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
