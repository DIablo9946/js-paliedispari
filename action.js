// // 1 -Una funzione per capire se la parola è palindroma;
// 2 - L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer e dichiariamo chi ha vinto.
// *NOTE=* quindi repo con macro cartella che contiene 2 sottocartelle;
// Il secondo fate non con iserimento utente, ma 2 radon dal pc,
// come detto non mega funzione ma sul secondo, creo delle funzioni utili a fare cose, la generazione dei numeri e il verificare se il risultato è pari o dispari

// Scrivo le variabili

var stampa, par, parolaArray, newWord;
newWord = "";
stampa = document.getElementById('my');

// Faccio inserire all'utente una parola

par = prompt("Inserisci una parola e vediamo se è palindroma");


// Stabilisco le condizioni per il controllo


// str = "How are you doing today?";
// res = str.split(" ");
// parolaArray = par.split("");
console.log(parolaArray);

for (var i = 0; i < par.length; i++) {
  newWord = par[i] + newWord;
  console.log(par);
}

if (newWord == par) {
  console.log("Sono uguali");
} else {
  console.log("Non sono palindrome");
}
