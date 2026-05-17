const container = document.querySelector('.container');

function createGrid(size) {
    container.style.height = (size * 20) + 'px';
    container.style.width = (size * 20) + 'px';
    let square;
    for (let i = 1; i <= size; i++) {
        for (let j = 0; j < size; j++) {
            square = document.createElement('div');
            square.className = 'child';
            container.appendChild(square);
        }
    }
    square.addEventListener('mouseenter', () => {
        document.square.style.backgroundColor = 'black';
    });
    square.addEventListener('mouseleave', () => {
        document.square.style.backgroundColor = 'black';
    });
}



createGrid(16);