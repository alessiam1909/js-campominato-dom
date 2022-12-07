const bottone = document.getElementById('bottone-play');

function createNewGame(){
    let difficulty = parseInt(document.getElementById('level').value) ;
    console.log(difficulty);

    let cellsNumber;
    let cellsPerRow;

    switch (difficulty){
        case 1:
            cellsNumber = 100;
            cellsPerRow = 10;
            break;
        case 2:
            cellsNumber = 81;
            cellsPerRow = 9;
            break;
        case 3:
            cellsNumber = 49;
            cellsPerRow = 7;
            break;
        default:
            cellsNumber = 100;
            cellsPerRow = 10;
            break;  
    }

    generateGameGrid(cellsNumber, cellsPerRow);
}

function generateGameGrid(cellsNumber, cellsPerRow){
    
    const grid = document.createElement('div');
    grid.classList.add('griglia');
    
    const grid_side = cellsPerRow * 70;
    
    grid.style.width = `${grid_side}px`
    grid.style.height = `${grid_side}px`
    
    document.querySelector('.container-griglia').inneHTML = '';
    console.log(document.querySelector('.container-griglia').inneHTML);
    
    for (let i=0; i <cellsNumber; i++){
        const cell = createSingleCell(i, cellsPerRow);
        cell.addEventListener('click', function(){
            this.classList.toggle('clicked')
            console.log(this.innerText)
        })

        grid.appendChild(cell)
    }
    
    document.querySelector('.container-griglia').appendChild(grid)
}

function createSingleCell(num, cells_per_row){
    const cell = document.createElement('div');
    cell.classList.add('quadrato');

    let sideLength = '70px';

    cell.style.width = sideLength;
    cell.style.height = sideLength;

    cell.innerText = ++num;

    return cell;
}

document.getElementById('bottone-play').addEventListener('click', function(){
    createNewGame();
  
})


// function creaQuadrato(numero){

//     const quadrato = document.createElement('div');

//     quadrato.classList.add('quadrato');

//     quadrato.innerText = ++numero;

//     return quadrato; 
// }

// bottone.addEventListener('click', function(){

//     createNewGame();

//     let grid = document.getElementById('grid');
    
//     grid.innerHTML = "";

//     for (let i = 0; i < 100; i++){
           
//         const quadratoDinamico = creaQuadrato(i);

//         grid.appendChild(quadratoDinamico);

//         quadratoDinamico.addEventListener('click', function(){
//             this.classList.toggle('clicked');
//             console.log(this.innerText);
//         })
                
//     }

      

    



    
    
// })
