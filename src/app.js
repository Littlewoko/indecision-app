console.log("Running")

// JSX - Javascript XML

const app = {
    title: 'Indecision App',
    subtitle: 'Time to spin the wheel',
    options: ['One', 'Two']
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options.length > 0 ? 'Here are your options:' : 'No options available'}
    </div>
);

let count = 0;
const addOne = () => {
    count++;
    renderCount();
}
const minOne = () => {
    count--
    renderCount()
}
const reset = () => {
    count = 0
    renderCount()
}

const appRoot = document.getElementById('app');

const renderCount = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCount();