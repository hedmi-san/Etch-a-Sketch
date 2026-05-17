const container = document.querySelector('.container');
const btn = document.querySelector('button');
let size = 16;

function getGridSize() {
    let n;
    do {
        n = parseInt(prompt('Enter the size of the grid (1-100):'), 10);
    } while (!Number.isInteger(n) || n < 1 || n > 100);
    return n;
}

function createGrid(size) {
    container.innerHTML = '';
    container.style.height = (size * 20) + 'px';
    container.style.width = (size * 20) + 'px';
    for (let i = 1; i <= size; i++) {
        for (let j = 0; j < size; j++) {
            let square = document.createElement('div');
            square.className = 'child';
            container.appendChild(square);
        }
    }
}

btn.addEventListener('click', () => {
    size = getGridSize();
    createGrid(size);
});

createGrid(size);

container.addEventListener('mouseover', function (event) {
    if (!event.target.classList || !event.target.classList.contains('child')) return;
    event.target.style.backgroundColor = 'black';
});
