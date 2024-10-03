/*
3 - Remover Elementos Falsos

Implemente uma função que receba um array e remova todos os valores que sejam falsos no contexto lógico de JavaScript.
Por exemplo, dado o array [0, 1, false, 2, "", 3], o retorno deve ser [1, 2, 3].
*/

export function removeFalsy(arr) {

  const notFalsy = arr.filter(Boolean);
  console.log(notFalsy)
  return notFalsy;
}


/* 

Utilizei o método filter para criar um novo array chamado notFalsy que contém apenas valores verdadeiros.

A função Boolean é usada como callback para o filter. Ela converte cada elemento do array em um valor booleano.

Os valores falsos em JavaScript incluem: 0, "", false, null, undefined e NaN. Eles serão removidos do novo array.

Por exemplo, se arr = [0, 1, false, 2, "", 3]:

- O filter percorre o array e aplica Boolean a cada elemento.

0: Boolean(0) => false (removido)
1: Boolean(1) => true (mantido)
false: Boolean(false) => false (removido)
2: Boolean(2) => true (mantido)
"": Boolean("") => false (removido)
3: Boolean(3) => true (mantido)

Assim, o resultado final será [1, 2, 3].

*/