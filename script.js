const board = document.querySelector('.board');
const size = document.querySelector('#gridSize');
var r = document.querySelector(':root');
let grids;
function creatDiv(numberOfGrid){
    r.style.setProperty('--rowN', numberOfGrid);
    r.style.setProperty('--colN', numberOfGrid);
    for(let i = 1; i <= numberOfGrid*numberOfGrid; i++){
        let grid = document.createElement("div");
        grid.setAttribute("class", `grid ${i}`);

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

function setColor(){
    this.style.backgroundColor = "red";
    console.log(this);
}

size.addEventListener('input', changeSize);
creatDiv(16);
