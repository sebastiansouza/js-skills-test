import { describe, it } from 'node:test';
import assert from 'node:assert';
import { atmWithdrawal } from '../challenges/challenge-7.js';

describe('7 - Caixa Eletrônico', () => {
  it('deve retornar o número mínimo de cédulas para o valor sacado', () => {
    const amount = 275;
    const expected = { 100: 2, 50: 1, 20: 1, 5: 1 };
    const result = atmWithdrawal(amount);
    assert.deepStrictEqual(result, expected);
  });

  it('deve retornar erro se o valor não puder ser sacado', () => {
    const amount = 3;
    const result = atmWithdrawal(amount);
    assert.strictEqual(result, "Erro: valor não pode ser sacado.");
  });

  it('deve retornar cédulas corretas para um valor que usa apenas notas de 100', () => {
    const amount = 500;
    const expected = { 100: 5 };
    const result = atmWithdrawal(amount);
    assert.deepStrictEqual(result, expected);
  });

  it('deve retornar cédulas corretas para um valor que usa apenas notas de 5', () => {
    const amount = 25;
    const expected = { 20: 1, 5: 1 };
    const result = atmWithdrawal(amount);
    assert.deepStrictEqual(result, expected);
  });

  it('deve retornar cédulas corretas para um valor que usa notas de diferentes valores', () => {
    const amount = 75;
    const expected = { 50: 1, 20: 1, 5: 1 };
    const result = atmWithdrawal(amount);
    assert.deepStrictEqual(result, expected);
  });
});
