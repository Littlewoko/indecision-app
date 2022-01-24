console.log("Running")

// JSX - Javascript XML

const app = {
    title: 'Indecision App',
    subtitle: 'Time to spin the wheel',
    options: []
}

const appRoot = document.getElementById('app')

const onFormSubmit = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value

    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        renderApp()
    }
}

const onRemoveOptions = () => {
    app.options = []
    renderApp()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I Do?</button>
            <button onClick={onRemoveOptions}>Remove All Options</button>
            <p>{app.options.length > 0 ? 'Here are your options:' : 'No options available'}</p>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    )
    
    
    ReactDOM.render(template, appRoot)
}

renderApp()