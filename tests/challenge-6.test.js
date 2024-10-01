import { describe, it } from "node:test";
import assert from "node:assert";
import { canBookReservation } from "../challenges/challenge-6.js";

describe("6 - Sistema de Reservas", () => {
  it("deve permitir nova reserva sem sobreposição", () => {
    const existingReservations = [
      [1, 3],
      [4, 6],
    ];
    const newReservation = [3, 5];
    const result = canBookReservation(existingReservations, newReservation);
    assert.strictEqual(result, false);
  });

  it("deve permitir nova reserva que não sobrepõe", () => {
    const existingReservations = [
      [1, 2],
      [3, 4],
    ];
    const newReservation = [5, 6];
    const result = canBookReservation(existingReservations, newReservation);
    assert.strictEqual(result, true);
  });

  it("deve permitir nova reserva que começa e termina no mesmo horário que uma existente", () => {
    const existingReservations = [
      [1, 3],
      [4, 6],
    ];
    const newReservation = [3, 4];
    const result = canBookReservation(existingReservations, newReservation);
    assert.strictEqual(result, true);
  });

  it("deve negar nova reserva que coincide com uma existente", () => {
    const existingReservations = [
      [1, 3],
      [4, 6],
    ];
    const newReservation = [1, 3];
    const result = canBookReservation(existingReservations, newReservation);
    assert.strictEqual(result, false);
  });

  it("deve negar nova reserva se houver sobreposição", () => {
    const existingReservations = [
      [1, 5],
      [6, 10],
    ];
    const newReservation = [4, 7];
    const result = canBookReservation(existingReservations, newReservation);
    assert.strictEqual(result, false);
  });
});
