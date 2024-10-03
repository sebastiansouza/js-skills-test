/*
2 - Remover Duplicatas de um Array

Implemente uma função que receba um array e remova os números duplicados, mantendo a ordem de aparição.
Por exemplo, dado o array [1, 2, 3, 2, 1, 4], o retorno deve ser [1, 2, 3, 4].
*/

export function removeDuplicates(arr) {

  const no_duplicates = [];

  arr.forEach(number => {

    if( !no_duplicates.includes(number)){
      no_duplicates.push(number);
    }  
  });

  console.log(no_duplicates)

  return no_duplicates;
}



/* 

Criei um array vazio chamado no_duplicates onde vai armazenar os números únicos.

O forEach percorre cada número do array original (arr) e aplica a lógica para verificar duplicatas.

O includes() é usado para verificar se o número atual já está no array no_duplicates.

Se o número não estiver no array no_duplicates, chama o push() para adicionar.

Assim apenas números únicos sejam adicionados, na mesma ordem.

arr = [1, 2, 3, 2, 1, 4]:

no_duplicates = []

1: no_duplicates = [1]
2: no_duplicates = [1, 2]
3: no_duplicates = [1, 2, 3]
2: já está em no_duplicates
1: já está em no_duplicates
4: no_duplicates = [1, 2, 3, 4]

resultado final = [1, 2, 3, 4].

*/