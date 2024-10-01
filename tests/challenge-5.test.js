import { describe, it } from "node:test";
import assert from "node:assert";
import { countChars } from "../challenges/challenge-5.js";

describe("5 - Contar Ocorrências de Caracteres", () => {
  it("deve contar as ocorrências de caracteres em uma string simples", () => {
    const result = countChars("banana");
    assert.deepStrictEqual(result, { b: 1, a: 3, n: 2 });
  });

  it("deve contar as ocorrências de caracteres em uma string vazia", () => {
    const result = countChars("");
    assert.deepStrictEqual(result, {});
  });

  it("deve contar caracteres em uma string com espaços", () => {
    const result = countChars("hello world");
    assert.deepStrictEqual(result, {
      h: 1,
      e: 1,
      l: 3,
      o: 2,
      " ": 1,
      w: 1,
      r: 1,
      d: 1,
    });
  });

  it("deve contar caracteres em uma string com caracteres especiais", () => {
    const result = countChars("a@b!a@b!");
    assert.deepStrictEqual(result, { a: 2, "@": 2, b: 2, "!": 2 });
  });
});
