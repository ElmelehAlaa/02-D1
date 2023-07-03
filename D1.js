/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output collega questo file al tuo HTML e apri la console del browser. 
- Dovrai creare una direttiva di output per testare le variabili od i risultati delle espressioni che crei
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* i principali datatype sono:
String ("string") definite dagli apici , sono caratteri testuali.
Number (17) vengono definiti senza apici e vengono considerati numeri interi o decimali se hanno il "."
Boolean (true/false) definiti senza apici , ha solo 2 valori o vero o falso.
Undefined quando una variabile non ha un valore o non è definita , sara' chiamata undefined.
null quando in una variabile non viene definito intenzionalmente un valore.












*/

/*ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
 */

let name2 = "Alaa";
console.log(name2);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let numero0 = 12;
let numero1 = 20;
console.log(numero0 + numero1);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

name2 = "Elmeleh";
/*const capelli = "neri";
capelli = "biondi";

console.log(capelli);*/

let capelli = "neri";
capelli = "biondi";
console.log(capelli);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let numero = 4;
console.log(numero - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name3 = "john";
let name4 = "John";

console.log(name3 === name4);

/*let name1="john"
let name2="john"

console.log(name1===name2)*/
