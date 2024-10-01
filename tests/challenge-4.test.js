import { describe, it } from "node:test";
import assert from "node:assert";
import { isPalindrome } from "../challenges/challenge-4.js";

describe("4 - Validar Palíndromo", () => {
  it("deve retornar true para um palíndromo simples", () => {
    assert.strictEqual(isPalindrome("arara"), true);
  });

  it("deve retornar false para uma string que não é um palíndromo", () => {
    assert.strictEqual(isPalindrome("banana"), false);
  });

  it("deve retornar true para uma string vazia", () => {
    assert.strictEqual(isPalindrome(""), true);
  });
});
