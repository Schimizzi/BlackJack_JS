/*
* C = clobes => treboles
* D = diamonds => diamantes
* H = hearts => corazones
* S = spades => pika
*/


let deck = [];
// referencias al html
const btnPedir = document.querySelectorAll('button')[1]; //segundo boton
let puntosJugador = 0, puntosAI = 0;
const smallPuntosJugador = document.querySelectorAll('small');

const crearDeck = (x) => {

    for( let i = 2; i <= 10; i++){
        deck.push(i + x);
    };
};

crearDeck("C");
crearDeck("D");
crearDeck("H");
crearDeck("S");

console.log(deck)
const tipos = ["C", "D", "H", "S"];
const crearDeckLetras = ["A", "J", "Q", "K"];

for(let tipo of tipos){
    for(let esp of crearDeckLetras){
        deck.push(esp+tipo)
    }
}

deckCartas = _.shuffle(deck);
//return deck a algun lado


const pedirCarta = () => {   
    const tomarCarta = deckCartas.pop();
    return tomarCarta;
}


const valorCarta = (carta) => {
    const valorASumar = carta.substring(0, carta.length - 1);
    let puntos = 0;
    if(isNaN(valorASumar)){
        if(valorASumar == "K" || valorASumar == "Q" || valorASumar == "J" ){
            puntos = 10;
        }else if(valorASumar == "A"){
            puntos = 11;
        }
        console.log(puntos);
        console.log(typeof(puntos));

    }else{
        puntos = parseInt(valorASumar);
        console.log(puntos);
        console.log(typeof(puntos));
        
    }
    return puntos;
   
}

let carta = pedirCarta();
let valorC = valorCarta(carta);
console.log(valorC)

//--Eventos-----------

btnPedir.addEventListener('click', function() {


    const carta = pedirCarta();
    //console.log(carta);
    puntosJugador = puntosJugador + valorCarta(carta);
    smallPuntosJugador[0].innerText = puntosJugador;

});



