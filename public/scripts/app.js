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

var count = 0;
var addOne = function addOne() {
    count++;
    renderCount();
};
var minOne = function minOne() {
    count--;
    renderCount();
};
var reset = function reset() {
    count = 0;
    renderCount();
};

var appRoot = document.getElementById('app');

var renderCount = function renderCount() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        )
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCount();
