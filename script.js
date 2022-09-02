const board = document.querySelector('.board');
const size = document.querySelector('#gridSize');
function creatDiv(numberOfGrid){
    for(let i = numberOfGrid; i > 0; i--){
        let grid = document.createElement("div");
        grid.setAttribute("class", `grid ${i}`);
        // grid.textContent = `This is grid ${i}`;

        board.appendChild(grid);



    }
    return;
}

function changeSize(){
    
    const widthHeightOfGrid = board.offsetWidth / this.value;
    console.log('range value:' + this.value)
;    console.log('board\'s width:' + board.offsetWidth);
    console.log('single grid size:' + widthHeightOfGrid);
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid =>{
        grid.remove();
    })
    creatDiv(this.value * this.value);
    grids.forEach(grid =>{
        grid.style.width = `${widthHeightOfGrid}px`;
        grid.style.height = `${widthHeightOfGrid}px`;
    })



}
size.addEventListener('change', changeSize);
creatDiv((16*16));