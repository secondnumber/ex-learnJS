const list = document.querySelector('.result');
const clickMeButton = document.querySelector('.click-me');
const numberPage = document.querySelector('.number');
clickMeButton.addEventListener('click', () => {
  const promise = getImages(numberPage.value);
  promise.then(onDataReceived);
});

function onDataReceived (data) {
  data.forEach(element => {
    const url = element.thumbnail;
    const item = document.createElement('li');
    const image = document.createElement('img');
    image.src = url;
    item.appendChild(image);
    list.appendChild(item);
  })
}