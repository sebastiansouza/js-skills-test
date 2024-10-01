/*
1 - Event Loop

Este exercício testa seu entendimento sobre o funcionamento do *Event Loop* no JavaScript.
Qual será a ordem de execução dos logs e porque?
*/

console.log("start");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => console.log("promise"));

console.log("end");
