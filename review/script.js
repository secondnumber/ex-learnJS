let reviewButtons = document.querySelectorAll('.review');
let submitButton = document.querySelector('.submit-button');
let errorSignal = document.querySelector('.error');

for (reviewButton of reviewButtons) {
    reviewButton.onchange = function (event) {
            if (event.target.dataset.evaluation === 'bad') {
                errorSignal.classList.add('shown');
                submitButton.setAttribute("disabled", true);
            } else {
                errorSignal.classList.remove('shown');
                submitButton.removeAttribute("disabled", true);
            }
    }
}
