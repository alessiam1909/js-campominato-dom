const bottone = document.getElementById('bottone-play');

// 1 - Creo una funzione che generi un array contenente 16 numeri casuali (che saranno le bombe), che però non devono ripetersi.
function creaArrayBombe( min, max){

    let bombe = [];
    let i = 0;

    while(i < 16){
        
        let number = Math.floor(Math.random() * (max - min + 1)) + min;
        if(!bombe.includes(number)){
            bombe.push(number);
            i++;
        }
    }

    return bombe;
}

function createNewGame(){
    let difficulty = parseInt(document.getElementById('level').value) ;
    console.log(difficulty);

    let arrayBombe =[];
    

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

    arrayBombe = creaArrayBombe(1 , cellsNumber);
    console.log(arrayBombe);

    generateGameGrid(arrayBombe, cellsNumber, cellsPerRow);
}

function generateGameGrid(bombe, cellsNumber, cellsPerRow){
    
    const grid = document.createElement('div');
    grid.classList.add('griglia');
    
    const grid_side = cellsPerRow * 70;
    
    grid.style.width = `${grid_side}px`
    grid.style.height = `${grid_side}px`
    
    document.querySelector('.container-griglia').innerHTML = '';
    
    
    for (let i=0; i <cellsNumber; i++){
        const cell = createSingleCell(i, cellsPerRow);
        cell.addEventListener('click', function(){
            console.log(this.innerText)
            //  Faccio in modo che la cella contenente una bomba si colori di rosso e fermi il gioco ( l'utente non può cliccare sulle altre caselle dopo aver detonato la bomba)
            if(bombe.includes(parseInt(this.innerText))){
                this.classList.add('red');
                let valore = this.innerText;
                setTimeout(function() {
                    grid.classList.add('pointer');
                    alert("Hai detonato la bomba numero: "+valore+".   "+"\nHai schiacciato "+document.getElementsByClassName('clicked').length+" casella/e prima di perdere."+"\nPremi 'Play' per giocare ancora!");
                },10)
            }else{
                this.classList.add('clicked');
                if(document.getElementsByClassName('clicked').length == (cellsNumber - 16)){
                    setTimeout(function() {
                        alert("Hai vinto!");
                    },10)
                }
            }
        })

        grid.appendChild(cell)
    }
    
    document.querySelector('.container-griglia').appendChild(grid)
}

function createSingleCell(num){
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
