/*
5 - Contar Ocorrências de Caracteres

Dada uma string, conte quantas vezes cada caractere aparece nela.
Por exemplo, para a string "banana", o resultado deve ser { b: 1, a: 3, n: 2 }.
*/

export function countChars(str) {

  
  const charCount = {};


  for (const char of str) {

    if (charCount[char]) {
      charCount[char]++;
    } else {

      charCount[char] = 1;
    }
  }

  console.log(charCount)

  return charCount;
}


/*

A função conta quantas vezes cada caractere aparece na string fornecida.

Criamos um objeto vazio chamado charCount onde armazenaremos a contagem de cada caractere.

Usamos um loop for...of para iterar sobre cada caractere da string str.

Para cada caractere (char):

- Se o caractere já existe como uma chave em charCount, incrementamos sua contagem com charCount[char]++.
- Se o caractere não existe em charCount, inicializamos sua contagem com charCount[char] = 1.
*/