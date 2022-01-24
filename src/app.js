console.log("Running")

// JSX - Javascript XML

const app = {
    title: 'Indecision App',
    subtitle: 'Time to spin the wheel',

}
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

const user = {
    name: 'Bradley',
    age: 22,
    location: 'Swansea'
}

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    }
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        <p>Age: {user.age}</p>
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);