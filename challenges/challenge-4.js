/*
4 - Validar Palíndromo

Implemente uma função que verifique se uma string é um palíndromo (lê-se da mesma forma de frente para trás).
Por exemplo, "arara" e "ana" são palíndromos, enquanto "banana" não é.
*/
export function isPalindrome(str) {

  return str === str.split('').reverse().join('');
}

/* 

A função verifica se a string passada é um palíndromo.

Usamos split('') para transformar a string em um array de caracteres.

O reverse() inverte a ordem dos elementos no array.

O join('') junta os elementos do array de volta em uma string.


*/