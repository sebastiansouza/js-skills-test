import { describe, it } from "node:test";
import assert from "node:assert";
import { sumDigits } from "../challenges/challenge-1.js";

describe("1 - Somar Dígitos de um Número", () => {
  it("deve somar os dígitos de um número positivo", () => {
    assert.deepStrictEqual(sumDigits(543), 12);
    assert.deepStrictEqual(sumDigits(1234), 10);
    assert.deepStrictEqual(sumDigits(98765), 35);
  });

  it("deve retornar 0 para o número 0", () => {
    assert.deepStrictEqual(sumDigits(0), 0);
  });

  it("deve lidar com números grandes", () => {
    assert.deepStrictEqual(sumDigits(123456789), 45);
  });
});
