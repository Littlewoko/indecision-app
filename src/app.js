class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision'
        const subtitle = 'Put Your Life in the Hands of a Computer'
        const options = ['1', '2', '3']
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    handlePick() {
        alert('handlePick')
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should i do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
    }

    handleRemoveAll() {
        console.log(this.props.options)
        // alert('Some message')
    }
    render() {
        return (
            <div>
                {
                    this.props.options.map((option) => <Option key={option} option={option} />)
                }
                <button onClick={this.handleRemoveAll}>Remove All Options</button>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.option}
            </div>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault()

        const option = e.target.elements.option.value.trim()
        if (option) {
            alert(option)
        }
        e.target.elements.option.value = ''
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))