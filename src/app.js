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

const user = {
    name: 'Bradley',
    age: 22,
    location: 'Swansea'
}

const getLocation = (location) => {
    if (location) {
        return <p>Location: {location}</p>
    }
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >=18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);