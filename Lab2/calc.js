const pola = [
    { txt: 0, row:5, col:'1/3'},
    { txt: 1, row:4, col:1},
    { txt: 2, row:4, col:2},
    { txt: 3, row:4, col:3},
    { txt: 4, row:3, col:1},
    { txt: 5, row:3, col:2},
    { txt: 6, row:3, col:3},
    { txt: 7, row:2, col:1},
    { txt: 8, row:2, col:2},
    { txt: 9, row:2, col:3},
    { txt:'C', row:2, col:4},
    { txt: '+', row:3, col:4},
    { txt: '-', row:4, col:4},
    { txt: '=', row:5, col:4},
    { txt: '.', row:5, col:3},
    { txt: 'Display', row:1, col:'1/5'},
    ];
const init = () => {
    const container = document.createElement('div');
    container.id = 'container';
    
    pola.forEach(el => {
        const div = document.createElement('div');
        div.textContent = el.txt;
        div.style.gridColumn = el.col;
        div.style.gridRow = el.row;
        container.appendChild(div);
     
    });
    document.body.appendChild(container); 
}


window.addEventListener('DOMContentLoaded', init);