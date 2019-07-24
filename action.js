// // 1 -Una funzione per capire se la parola è palindroma;
// 2 - L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer e dichiariamo chi ha vinto.
// *NOTE=* quindi repo con macro cartella che contiene 2 sottocartelle;
// Il secondo fate non con iserimento utente, ma 2 radon dal pc,
// come detto non mega funzione ma sul secondo, creo delle funzioni utili a fare cose, la generazione dei numeri e il verificare se il risultato è pari o dispari

// Scrivo le variabili

var stampa, controllo;

stampa = document.getElementById('my');

// Faccio inserire all'utente una parola

controllo = prompt("Inserisci una parola e vediamo se è palindroma");
console.log(controllo);

// Stabilisco le condizioni per il controllo


function contro(controllo) {
    return controllo.reverse();
}




if (contro == controllo) {
  stampa.innerHTML = "La parola è palindroma";
} else {
  stampa.innerHTML = "La parola non è palindroma";
}
