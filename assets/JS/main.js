/*
* C = clobes => treboles
* D = diamonds => diamantes
* H = hearts => corazones
* S = spades => pika
*/


let deck = [];


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
console.log(deck)
deck = _.shuffle(deck);
console.log(deck)
