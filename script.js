const container = document.querySelector('.container');

function creatDiv(numberOfGrid){
    for(let i = numberOfGrid; i > 0; i--){
        let grid = document.createElement("div");
        grid.setAttribute("class", `grid ${i}`);
        grid.textContent = `This is grid ${i}`;

        console.log('before append child');
        container.appendChild(grid);
        console.log('after append child');


    }
    return;
}

console.log('hello');
creatDiv(3);