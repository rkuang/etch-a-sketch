const container = document.getElementById("container");
let cells = []

function makeGrid(size) {
    container.innerHTML = ''
    container.style.setProperty('--num_rows', size);
    container.style.setProperty('--num_cols', size);
    for (let i = 0; i < size * size; i++) {
        let cell = document.createElement("div");
        cells.push(cell);
        cell.classList.add('cell');
        cell.addEventListener('mouseenter', e => {
            if (isNaN(parseFloat(e.target.style.opacity)))
                e.target.style.opacity = 0.1;
            else
                e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.1
    })
    container.appendChild(cell);
  };
};

makeGrid(16);
