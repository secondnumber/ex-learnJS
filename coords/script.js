const init = () => {
    const map = document.getElementById('map');
    map.onmousemove = showCoords;
}

const showCoords = (e) => {
    const coords = document.getElementById('coords');
    let x = e.pageX;
    let y = e.pageY;
    coords.innerHTML = `Map coordinates: ${x}, ${y}`;
}

window.onload = init;
