const container = document.querySelector('.container');

function createGrid(size) {
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
createGrid(16);

container.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "black";
});


