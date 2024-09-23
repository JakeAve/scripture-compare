import { assertEquals } from "$std/assert/mod.ts";
import { calculateDistance, calculateDistancePercentage } from "./levenshtein.ts";

Deno.test("calculateDistance() ", () => {
    const d = calculateDistance(
        "hello, my name is no",
        "hello, my number is no",
    );

    assertEquals(d, 3);
});

Deno.test("calculateDistancePercentage()", () => {
    const d = calculateDistancePercentage(
        "hello, my name is no",
        "hello, my number is no",
    );

    assertEquals(d, .8636363636363636);
});
