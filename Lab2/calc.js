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
    { txt: '0', row:1, col:'1/5'},
    ];
const init = () => {
    const container = document.createElement('div');
    container.id = 'container';
    
    pola.forEach (el => {
        const div = document.createElement('div');
        div.textContent = el.txt;
        div.style.gridColumn = el.col;
        div.style.gridRow = el.row;
        if (el.txt == '0' && el.row == 1)
        {
            div.id='Display';
                                }
        else
        {
        div.addEventListener('click', handleClick);      
        }
        
        container.appendChild(div);
    });
     
    document.body.appendChild(container); 
    
    


}

let mem=0;
let op=0;
let clearFlag = false;

const handleClick = ev => {
            const disp = document.getElementById('Display');
            const key = ev.target.textContent;
            switch (key) {
                    case'C':
                    op=0;
                    clearFlag = false;
                    mem=0;
                    disp.textContent = '';
                    
                    
                    break;
                    
                case '+':
                    op=1;
                    mem = parseFloat(disp.textContent) ;
                    disp.textContent = '';
                    break;
                case '-':
                    op=-1;
                    mem = parseFloat(disp.textContent) ;
                    disp.textContent = '';
                    break;
                case '=':
                    if (op === -1){
                        mem -= parseFloat(disp.textContent)
                    }
                    else{
                        
                    mem += parseFloat(disp.textContent) ;
                    }
                    disp.textContent=mem;
                    
                    break;
                    
                default:
                    if (key === '0' && disp.textContent === '0')return;
                    if (key === '.' && disp.textContent === '.')return;
                    if (key !== '. || clearflag'){
                        disp.textContent += key;
                    }
                    
                    break;
            }
            }



window.addEventListener('DOMContentLoaded', init);