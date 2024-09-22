import { assert, assertEquals, assertNotEquals } from "$std/assert/mod.ts";
import { diff } from "./diff.ts";
import _3Nephi from "../data/scriptures/3-nephi-12.json" with { type: "json" };
import matthew from "../data/scriptures/matthew-5.json" with { type: "json" };

Deno.test("diff() simple example", () => {
    const d = diff("hello\nmy\nname\nis\njake", "hello\nmy\nname\nis\njosh");
    assertEquals(d, [
        { value: "hello", added: false, removed: false },
        { value: "\n", added: false, removed: false },
        { value: "my", added: false, removed: false },
        { value: "\n", added: false, removed: false },
        { value: "name", added: false, removed: false },
        { value: "\n", added: false, removed: false },
        { value: "is", added: false, removed: false },
        { value: "\n", added: false, removed: false },
        { value: "jake", removed: true },
        { value: "josh", added: true },
    ]);
});

Deno.test("diff() hard example", () => {
    const text1 = matthew.map((v) => v.text).join("\n");
    const text2 = _3Nephi.map((v) => v.text).join("\n");
    const d = diff(text1, text2);
    console.log(d);
    Deno.writeTextFileSync('test.json', JSON.stringify(d))
});
