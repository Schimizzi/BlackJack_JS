/*
* C = clobes => treboles
* D = diamonds => diamantes
* H = hearts => corazones
* S = spades => pika
*/


let deck = [];
// referencias al html
const btnPedir = document.querySelectorAll('button')[1]; //segundo boton
const btnDetener = document.querySelectorAll('button')[2]; //3er boton
const btnNuevo = document.querySelectorAll('button')[0]; //1er boton
let puntosJugador = 0, puntosAI = 0;
const smallPuntos = document.querySelectorAll('small');

const darCartasJugador = document.querySelector('#jugadorCartas');
const darCartasAI = document.querySelector('#AICartas');

const deckCreado = () => {
    const crearDeck = (x) => {

        for (let i = 2; i <= 10; i++) {
            deck.push(i + x);
        };
    };
    
    crearDeck("C");
    crearDeck("D");
    crearDeck("H");
    crearDeck("S");    

}
const crearDeck = (x) => {

    for (let i = 2; i <= 10; i++) {
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

for (let tipo of tipos) {
    for (let esp of crearDeckLetras) {
        deck.push(esp + tipo)
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
    if (isNaN(valorASumar)) {
        if (valorASumar == "K" || valorASumar == "Q" || valorASumar == "J") {
            puntos = 10;
        } else if (valorASumar == "A") {
            puntos = 11;
        }
        console.log(puntos);
        console.log(typeof (puntos));

    } else {
        puntos = parseInt(valorASumar);
        console.log(puntos);
        console.log(typeof (puntos));

    }
    return puntos;

}

let carta = pedirCarta();
let valorC = valorCarta(carta);
console.log(valorC)

// turnoAI
const turnoAI = (puntosMinimos) => {
    //hacer q la ai pida por lo menos 2 cartas
    //for (let i = 0; i < 2; i++) {

        do {
            const carta = pedirCarta();
            //console.log(carta);
            puntosAI = puntosAI + valorCarta(carta);
            smallPuntos[1].innerText = puntosAI;

            //<img class="carta" src="assets/img/cartas/AC.png" alt="">
            const imagenCarta = document.createElement('img');
            imagenCarta.src = `assets/img/cartas/${carta}.png`;
            imagenCarta.classList.add('carta');
            darCartasAI.append(imagenCarta);

            if(puntosMinimos > 21) {
                break;
            }


        } while((puntosAI < puntosMinimos) && (puntosMinimos <= 21))
    //}

    setTimeout(() => {
        if(((puntosJugador <= 21) && (puntosJugador > puntosAI)) || (puntosAI > 21)){
            alert('ganaste!!')
        }else{
            alert('perdedoooor')
        }

    }, 20);

}

//--Eventos-----------


btnPedir.addEventListener('click', function () {


    const carta = pedirCarta();
    //console.log(carta);
    puntosJugador = puntosJugador + valorCarta(carta);
    smallPuntos[0].innerText = puntosJugador;

    //<img class="carta" src="assets/img/cartas/AC.png" alt="">
    const imagenCarta = document.createElement('img');
    imagenCarta.src = `assets/img/cartas/${carta}.png`;
    imagenCarta.classList.add('carta');
    darCartasJugador.append(imagenCarta);

    if (puntosJugador > 21) {
        console.warn('Fuiste!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoAI(puntosJugador);

    } else if (puntosJugador === 21) {
        console.warn('Idolo');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoAI(puntosJugador);


    }

});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoAI(puntosJugador);
})



btnNuevo.addEventListener('click', () => {
    deck = [];
    console.clear();
    deck = deckCreado();
    puntosJugador = 0, puntosAI = 0, 
    smallPuntos[0].innerText = 0;
    smallPuntos[1].innerText = 0;
    btnPedir.disabled = false;
    btnDetener.disabled = false;
    darCartasJugador.innerHTML = '';
    darCartasAI.innerHTML = '';

})