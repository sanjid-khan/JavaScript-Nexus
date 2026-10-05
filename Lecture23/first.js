// ==========================
// Event Handling Examples
// ==========================

// Directly attach event to each button
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const green = document.getElementById("green");
const orange = document.getElementById("orange");
const purple = document.getElementById("purple");
const body = document.body;

// Individual button listeners
red.addEventListener('click', () => {
    body.style.backgroundColor = 'red';
});

blue.addEventListener('click', () => {
    body.style.backgroundColor = 'blue';
});

green.addEventListener('click', () => {
    body.style.backgroundColor = 'green';
});

orange.addEventListener('click', () => {
    body.style.backgroundColor = 'orange';
});

purple.addEventListener('click', () => {
    body.style.backgroundColor = 'purple';
});


// ==========================
// Using querySelectorAll + forEach
// ==========================
const buttons = document.querySelectorAll('button');
console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.id);
        body.style.backgroundColor = button.id;
    });
});


// ==========================
// Event Delegation
// ==========================
const root = document.getElementById('root');

root.addEventListener('click', (event) => {
    // Check if the clicked element is a button
    if (event.target.tagName === 'BUTTON') {
        document.body.style.backgroundColor = event.target.id;
    }
});

