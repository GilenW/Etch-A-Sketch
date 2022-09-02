const board = document.querySelector('.board');
const size = document.querySelector('#gridSize');
const color = document.querySelector('#colorPicker');
const clean = document.querySelector('.clean');
const buttons = document.querySelectorAll('button');
var r = document.querySelector(':root');
let isDrawing = false;
let grids = document.querySelectorAll('.grid');
let choseColor = color.value;
document.body.onmousedown = () => (isDrawing = true)
document.body.onmouseup = () => (isDrawing = false)
creatDiv(16);

function creatDiv(numberOfGrid){
    r.style.setProperty('--rowN', numberOfGrid);
    r.style.setProperty('--colN', numberOfGrid);
    for(let i = 1; i <= numberOfGrid*numberOfGrid; i++){
        let grid = document.createElement("div");
        grid.setAttribute("class", `grid ${i}`);
        grid.addEventListener('mousedown', draw);
        grid.addEventListener('mouseenter', draw);

        board.appendChild(grid);
    }
    return;
}


function changeSize(){
    grids = document.querySelectorAll('.grid');
    grids.forEach(grid =>{
        grid.remove();
    })
    console.log(this.value);
    creatDiv(this.value);


}

function draw(e){
    if(e.type === 'mouseenter' && !isDrawing) return;
    e.target.style.backgroundColor = `${choseColor}`;
}


function toggleFunction(){
    switch (this.textContent){
        case 'Clean':
            grids = document.querySelectorAll('.grid');
            grids.forEach(grid =>{
                grid.style.backgroundColor = r.style.getPropertyValue('--canvaBackgroundColr');
            })
            break;
        case 'Erase':
            choseColor = r.style.getPropertyValue('--canvaBackgroundColr');
            break;
        case 'Draw':
            console.log(this.textContent);
            choseColor = `${color.value}`;
        
    }

}
size.addEventListener('input', changeSize);
color.addEventListener('input', ()=> choseColor =`${color.value}` );
buttons.forEach(button =>{
    button.addEventListener('click', toggleFunction);
})


