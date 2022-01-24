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



const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);