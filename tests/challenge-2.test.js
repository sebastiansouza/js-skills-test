import { describe, it } from "node:test";
import assert from "node:assert";
import { removeDuplicates } from "../challenges/challenge-2.js";

describe("2 - Remover Duplicatas de um Array", () => {
  it("deve remover números duplicados, mantendo a ordem de aparição", () => {
    assert.deepStrictEqual(removeDuplicates([1, 2, 3, 2, 1, 4]), [1, 2, 3, 4]);
    assert.deepStrictEqual(removeDuplicates([5, 5, 5, 5]), [5]);
    assert.deepStrictEqual(removeDuplicates([1, 2, 3]), [1, 2, 3]);
    assert.deepStrictEqual(removeDuplicates([]), []);
  });
});
