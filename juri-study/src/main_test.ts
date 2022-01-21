import { assertEquals } from "https://deno.land/std@0.121.0/testing/asserts.ts";
import {additionNumberAllElement} from "./main.ts"

Deno.test("hello world #1", () => {
    const x = 1 + 2;
    assertEquals(x, 3);
});



Deno.test("return new array that added number is right", () => {
    const testArray: number[] = [1,2,3,4,5,6,7]
    const additionNum = 16.5

    assertEquals(additionNumberAllElement(testArray,additionNum)[0],17.5)

})