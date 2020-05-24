deleteTask("c0c5c5c8-4cb4-4dae-819d-4a3e60592104");

const listImg = document.querySelector('.result-img');
const listTasks = document.querySelector('.result-tasks');
const getImgButton = document.querySelector('.get-img');
const numberPage = document.querySelector('.number');
getImgButton.addEventListener('click', () => {
  const promise = getImages(numberPage.value);
  promise.then(onImagesReceived);
});

const getTasksButton = document.querySelector('.get-tasks');
getTasksButton.addEventListener('click', () => {
  const promise = getTasks();
  promise.then(onTasksReceived);
});

function onImagesReceived (data) {
  data.forEach(element => {
    const url = element.thumbnail;
    const item = document.createElement('li');
    const image = document.createElement('img');
    image.src = url;
    item.appendChild(image);
    listImg.appendChild(item);
  })
}

function onTasksReceived (data) {
  listTasks.innerHTML = '';
  data.forEach(element => {
    const item = document.createElement('li');
    item.id = element.id;
    item.innerHTML = element.title;
    listTasks.appendChild(item);
  })
}