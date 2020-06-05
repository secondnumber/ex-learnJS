const init = () => {
    const images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
        images[i].onmouseover = showAnswer;
    }
}

const showAnswer = (e) => {
    const image = e.target;
    let name = image.id;
    name = name + '.jpg';
    image.src = '../assets/' + name;
    setTimeout(reblur, 2000, image);
}

const reblur = (image) => {
    let name = image.id;
    name = name + 'blur.jpg';
    image.src = '../assets/' + name;
}

window.onload = init;
