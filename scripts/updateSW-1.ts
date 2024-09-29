import snapshot from "../_fresh/snapshot.json" with { type: "json" };

async function updateSW() {
    const updatedLine = `const PRE_CACHE = "pre-cache-${snapshot.build_id}";\n`;
    const swFile = await Deno.open("./static/sw.js", {
        write: true,
    });

    await swFile.seek(0, Deno.SeekMode.Start);
    await swFile.write(
        new TextEncoder().encode(
            updatedLine,
        ),
    );
}

updateSW();
console.log("updated sw");
