const toggle = ['', 'This is some info']
const buttonName = ['Show Details', 'Hide Details']
let curToggle = 0
const toggleVisibility = () => {
    if (curToggle === 1) {
        curToggle = 0
    } else {
        curToggle = 1
    }

    renderVisBuild()
}
const renderVisBuild = () => {
    const template = (
        <div>
            <h1>Visbility Toggle</h1>
            <button onClick={toggleVisibility}>{buttonName[curToggle]}</button>
            <p id="vis">{toggle[curToggle]}</p>
        </div>
        
    )

    ReactDOM.render(template, appRoot)
}

renderVisBuild()