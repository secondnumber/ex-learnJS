const pixels = document.querySelectorAll('.pixel');
const selectColor = document.querySelector('.chosen-color');
const eraser = document.querySelector('.eraser');
let currentColor = selectColor.value;

for (let pixel of pixels) {
    pixel.onclick = () => {
        selectColor.oninput = () => {
            currentColor = selectColor.value;
            return currentColor;
        }
        if (eraser.checked) {
            pixel.style.backgroundColor = 'white';
        } else {
            pixel.style.backgroundColor = currentColor;
        }
    }
}
