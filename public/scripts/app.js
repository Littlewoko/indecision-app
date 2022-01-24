'use strict';

console.log("Running");

// JSX - Javascript XML

var app = {
    title: 'Indecision App',
    subtitle: 'Time to spin the wheel',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    app.options.length > 0 ? 'Here are your options:' : 'No options available'
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
