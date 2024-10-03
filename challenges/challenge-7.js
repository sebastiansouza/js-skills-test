/*
7 - Caixa Eletrônico

Implemente uma função que determine o número mínimo de cédulas para sacar uma determinada quantia, considerando notas de 100, 50, 20, 10 e 5.
Por exemplo, se a quantia a ser sacada for 275, o retorno deve ser { 100: 2, 50: 1, 20: 1, 5: 1 },
pois isso representa 2 notas de 100, 1 nota de 50, 1 nota de 20 e 1 nota de 5.
Caso o valor a ser sacado não possa ser atendido com as cédulas disponíveis, a função deve retornar a mensagem:
"Erro: valor não pode ser sacado."
*/

export function atmWithdrawal(amount) {

  const notes = [100, 50, 20, 10, 5];
  const result = {};


  if (amount < 5 || amount % 5 !== 0) {
    return "Erro: valor não pode ser sacado.";
  }


  for (const note of notes) {

    const count = Math.floor(amount / note);
    if (count > 0) {
      result[note] = count; 
      amount -= count * note; 
    }
  }

  return result;
}


/*



A variável 'result' é um objeto que vai armazenar a quantidade de notas necessárias para o saque. 

Primeiro, verificamos se o valor é menor que 5 ou não é múltiplo de 5. Se for, a função retorna o erro

Usamos um loop for...of para iterar sobre cada valor no array 'notes'. Dentro desse loop:

1. 'Math.floor(amount / note)' divide o valor do saque pela nota atual e retorna a quantidade de notas que podemos usar dessa denominação. Por exemplo, se 'amount' for 275 e 'note' for 100, o resultado será 2, o que significa que podemos usar 2 notas de 100.
   
2. Se 'count' for maior que 0 (ou seja, precisamos usar essa nota), adicionamos essa quantidade de notas ao objeto 'result'.
   
3. Subtraímos do 'amount' o valor correspondente ao número de notas multiplicado pelo valor da nota, atualizando o valor restante.

O loop continua até que todas as notas necessárias sejam processadas, e o resultado final é o objeto 'result' contendo o número mínimo de cada nota para o saque.

Exemplo:
Se amount = 275:
1. Primeiro, usamos 2 notas de 100. (restam 75)
2. Depois, usamos 1 nota de 50. (restam 25)
3. Então, usamos 1 nota de 20. (restam 5)
4. Por fim, usamos 1 nota de 5.

O retorno será: { 100: 2, 50: 1, 20: 1, 5: 1 }

*/  