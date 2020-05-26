let keyButtons = document.querySelectorAll('.key');
let clearButton = document.querySelector('.clear');
let displayField = document.querySelector('.display');

displayField.textContent = '';

for (keyButton of keyButtons) {
    keyButton.addEventListener('click', (event) => {
        displayField.textContent = displayField.textContent + event.currentTarget.innerText;
    });
};

clearButton.addEventListener('click', (event) => {
    displayField.textContent = '';
});
