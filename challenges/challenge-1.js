/*
1 - Somar Dígitos de um Número

Implemente uma função que receba um número inteiro e retorne a soma de seus dígitos.
Por exemplo, dado o número 543, o retorno deve ser 5 + 4 + 3 = 12.
*/

export function sumDigits(num) {

  return num
    .toString()
    .split('')
    .reduce((sum, digit) => sum + Number(digit), 0);
}



/* 

O toString() para transformar o numero em string e poder ficar mais facil a manipulação deles.
O split('') para dividir essa string em um array de caracteres 

O reduce() percorre todo array e aplica uma arrow function acumulando o valor. A função recebe dois parametros sum e digit, sendo sum o acumulador e digit o valor que tá sendo processado no array. Sum sempre começa com valor 0. E estamos usando number() para transformar o caracter do array em inteiro novamente.


num = 543
num = "543"
num = ['5', '4', '3']

sum = 0
digit = '5'
sum = 0 + Number('5') = 5

sum = 5 
digit = '4'
sum = 5 + Number('4') = 9

sum = 9
digit = '3'
sum = 9 + Number('3') = 12



*/