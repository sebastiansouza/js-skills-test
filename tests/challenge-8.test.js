import { describe, it } from "node:test";
import assert from "node:assert";
import { exec } from "child_process";
import { promisify } from "util";

const execPromise = promisify(exec);

describe("9 - Async/Await em Loops", () => {
  it("deve processar os IDs na ordem correta", async () => {
    const ids = [1, 2, 3, 4, 5];

    const { stdout } = await execPromise("node ./challenges/challenge-8.js");

    const outputLines = stdout
      .trim()
      .split("\n")
      .map((line) => line.trim());
    const expectedOutput = ids.map((id) => `Dados do ID ${id} recebidos.`);

    assert.deepStrictEqual(outputLines, expectedOutput);
  });
});
