import { assertEquals } from "https://deno.land/std@0.121.0/testing/asserts.ts";
import {Calculator} from "./main.ts"

Deno.test("hello world #1", () => {
    const x = 1 + 2;
    assertEquals(x, 3);
});

Deno.test("When gave two number, return correct number", () => {
    const calculator = new Calculator()
    let n1 = 10
    let n2 = 20
    assertEquals(calculator.sum(n1, n2), 30)
    assertEquals(calculator.subtract(n1, n2), -10)
    assertEquals(calculator.division(n1, n2), 0.5)
    assertEquals(calculator.multiplication(n1, n2), 200)
});