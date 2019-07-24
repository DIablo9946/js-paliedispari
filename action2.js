// 1 -Una funzione per capire se la parola è palindroma;
// 2 - L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer e dichiariamo
// chi ha vinto.
// *NOTE=* quindi repo con macro cartella che contiene 2 sottocartelle;
// Il secondo fate non con iserimento utente, ma 2 radon dal pc,
// come detto non mega funzione ma sul secondo, creo delle funzioni utili a fare cose, la generazione dei numeri e il verificare se il risultato è pari o dispari


// Stabilisco le variabili

var stampa, num, casuale, dispar, sumOfGame, controllo;
controllo = true;
stampa = document.getElementById('my');

// Faccio inserire all'utente la scelta fra
// pari e dispari e un numero casuale da 1 a 5

dispar = prompt("Scegli fra pari o dispari");
num = parseInt(prompt("Scegli un numero da 1 a 5"));
casuale = Math.floor(Math.random() * 5) + 1;

sumOfGame = num + casuale;

console.log(dispar);
console.log(num);
console.log(casuale);

// Faccio dei controlli a proposito del numero

// if (sumOfGame % 2 == 0) {
//   console.log("Pari");
// } else {
//   console.log("Dispari")
// }

// Stabilisco il vincitore del gioco

while (sumOfGame % 2 == 0) {
  if (dispar == "Pari") {
    console.log("Ha vinto il giocatore");
  } else {
    console.log("Ha vinto il computer");
  }
}
