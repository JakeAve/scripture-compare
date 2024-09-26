import { assert, assertEquals } from "$std/assert/mod.ts";
import { isPunctuation, splitText } from "./textHelpers.ts";

Deno.test("splitText()", () => {
    const arr = splitText(
        "Hello, this is a test to see how things get arranges.",
    );
    console.log(arr);
});

Deno.test("isPunctuation()", () => {
    const bool1 = isPunctuation(".");
    assert(bool1);

    const bool2 = isPunctuation("and");
    assertEquals(bool2, false);
});
