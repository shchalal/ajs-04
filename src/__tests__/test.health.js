/* eslint-env jest */
import getHealthStatus from "../health.js";

describe("getHealthStatus", () => {
  test("возвращает healthy при health > 50 (например, 90)", () => {
    expect(getHealthStatus({ name: "Маг", health: 90 })).toBe("healthy");
  });

  test("возвращает healthy на границе >50 (например, 51)", () => {
    expect(getHealthStatus({ name: "Лучник", health: 51 })).toBe("healthy");
  });

  test("возвращает wounded при health = 50", () => {
    expect(getHealthStatus({ name: "Воин", health: 50 })).toBe("wounded");
  });

  test("возвращает wounded при health = 15", () => {
    expect(getHealthStatus({ name: "Рыцарь", health: 15 })).toBe("wounded");
  });

  test("возвращает critical при health < 15 (например, 14)", () => {
    expect(getHealthStatus({ name: "Вор", health: 14 })).toBe("critical");
  });

  test("возвращает critical при health = 0", () => {
    expect(getHealthStatus({ name: "Бард", health: 0 })).toBe("critical");
  });
});
