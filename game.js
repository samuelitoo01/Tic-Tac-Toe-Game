// TODO Juego de tres en raya 
// Primero creo la matriz donde se van a guardar los movimientos 

const jugadorActualUi = document.querySelector('.jugador-actual');


let tablero = [
    [ "" , "" , "" ] , 
    [ "" , "" , "" ] , 
    [ "" , "" , "" ]
];

// Variables principales 

let juegoActivo = true ; 
let jugadorActual = 'X' ; 

jugadorActualUi.textContent = jugadorActual

function game( fila , columna ){

    if(!juegoActivo){

        console.log('El juego ha terminado '); 
        alert(`Reinicia el juego para poder jugar`);
        return
        
    }

    if(tablero[fila][columna] !== ''){

        console.log('Esta casilla ya esta ocupada ');
        return 
        
    }

    tablero[fila][columna] = jugadorActual;

    if(revisarColumna()){

        console.log(`Ha ganado el jugador ${jugadorActual}`);
        return 

    }

    if(revisarFila()){

        console.log(`Ha ganado el jugador ${jugadorActual}`);
        return

    }

    if(revisarDiagonalDerecha()){

        console.log(`Ha ganado el jugador ${jugadorActual}`);
        return

    }

    if(revisarDiagonalIzquierda()){

        console.log(`Ha ganado el jugador ${jugadorActual}`);
        return

    }

    if(empate()){

        console.log(`Ha habido un empate`);
        return

    }


    jugadorActual = jugadorActual === 'X' ? 'O' : 'X' ; 
    jugadorActualUi.textContent = jugadorActual ; 
}

function revisarColumna(){

    for(let i = 0 ; i < 3 ; i++ ){
        if( tablero[0][i] !== '' && 
            tablero[0][i] === tablero[1][i] && 
            tablero[1][i] === tablero[2][i] 
        ){
            juegoActivo = false
            return true
        }
    }
    return false 
}

function revisarFila(){

    for(let i = 0 ; i < 3 ; i++ ){
        if( tablero[i][0] !== '' && 
            tablero[i][0] === tablero[i][1] && 
            tablero[i][1] === tablero[i][2] 
        ){
            juegoActivo = false
            return true 
        }
    }
    return false 
}

function revisarDiagonalDerecha(){

    if( tablero[0][2] !== '' &&
        tablero[0][2] === tablero[1][1] && 
        tablero[1][1] === tablero[2][0]
    ){
        juegoActivo = false
        return true
    }else{
        return false 
    }
}

function revisarDiagonalIzquierda(){

    if( tablero[0][0] !== '' &&
        tablero[0][0] === tablero[1][1] && 
        tablero[1][1] === tablero[2][2]
    ){
        juegoActivo = false
        return true
    }else{
        return false 
    }
}

function empate(){
    for(let fila of tablero){
        for(let celda of fila){
            if(celda === ''){
                return false
            }
        }
    }
    juegoActivo = false
    return true
}


// iu 

const celdas = document.querySelectorAll('.celda')

celdas.forEach((celdaUi , index )=> {
    celdaUi.addEventListener('click' , () => {

        if(juegoActivo){
        if(celdaUi.textContent === ''){
        const fila = Math.floor(index / 3)
        const columna = index % 3
        celdaUi.textContent = jugadorActual
        game(fila , columna)
        }else{
            alert('Esa casilla ya esta ocupada por favor selecciona otra');
        }
    }else{

        alert('El juego ha terminado reinicialo para poder jugar ');

    }
})
})

const btnRestart = document.querySelector('.btn-restart');
btnRestart.addEventListener('click' , () => {

    tablero = [
        [ "" , "" , "" ] , 
        [ "" , "" , "" ] , 
        [ "" , "" , "" ]
    ];

    juegoActivo = true ; 
    jugadorActual = 'X' ; 
    jugadorActualUi.textContent = jugadorActual

    celdas.forEach(celda => {
        celda.textContent = '';
    })

    console.clear()
})

