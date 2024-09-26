import { assertEquals } from "$std/assert/mod.ts";
import { diff } from "./diff.ts";

Deno.test("diff() simple example", () => {
    const d = diff("hello\nmy\nname\nis\njake", "hello\nmy\nname\nis\njosh");
    console.log(d);
    assertEquals(d, [
        { value: "hello", added: false, removed: false },
        { value: "my", added: false, removed: false },
        { value: "name", added: false, removed: false },
        { value: "is", added: false, removed: false },
        { value: "jake", removed: true },
        { value: "josh", added: true },
    ]);
});
