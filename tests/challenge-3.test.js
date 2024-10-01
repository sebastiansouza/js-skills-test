import { describe, it } from "node:test";
import assert from "node:assert";
import { removeFalsy } from "../challenges/challenge-3.js";

describe("3 - Remover Elementos Falsos", () => {
  it("deve remover todos os valores falsos do array", () => {
    assert.deepStrictEqual(removeFalsy([0, 1, false, 2, "", 3]), [1, 2, 3]);
    assert.deepStrictEqual(removeFalsy([null, undefined, NaN, false]), []);
    assert.deepStrictEqual(removeFalsy([1, 2, 3]), [1, 2, 3]);
    assert.deepStrictEqual(removeFalsy([]), []);
  });
});
