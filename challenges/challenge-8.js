/*
8 - Async/Await em Loops

Este exercício testa seu entendimento de como usar `async/await` dentro de loops no JavaScript.

- Corrija o código abaixo para garantir que as chamadas assíncronas dentro do loop sejam executadas na ordem correta.

Descrição:
- Temos uma função assíncrona `fetchData` que simula uma chamada de API e retorna os dados após um tempo aleatório.
- O loop `forEach` percorre um array de IDs e faz a chamada para `fetchData` com cada ID.
- No entanto, o código atual não está aguardando a conclusão da chamada assíncrona antes de continuar o loop.

Corrija o código para que as chamadas `fetchData` ocorram de forma sequencial, uma após a outra.
*/


// function fetchData(id) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(Dados do ID ${id} recebidos.);
//       resolve();
//     }, Math.random() * 1000);
//   });
// }

// const ids = [1, 2, 3, 4, 5];

// ids.forEach(async (id) => {
//   await fetchData(id);
// });

function fetchData(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Dados do ID ${id} recebidos.`);
      resolve();
    }, Math.random() * 1000);
  });
}

const ids = [1, 2, 3, 4, 5];

async function processIds() {
  for (const id of ids) {
    await fetchData(id);
  }
}

processIds();


/* 

A função foi modificada para usar `for...of` em vez de `forEach`, pois o `forEach` não lida bem com `async/await`.
Dentro do `forEach`, a função assíncrona seria executada em paralelo, sem esperar o término de uma execução antes de começar a próxima. 
Com o `for...of`, podemos usar `await` e garantir que as chamadas sejam feitas de forma sequencial, processando um ID de cada vez.

*/