import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Diff } from "../components/Diff.tsx";
import matthew from "../data/scriptures/matthew-23/main-section.json" with {
    type: "json",
};
import jsMatthew from "../data/scriptures/joseph-smith-matthew/main-section.json" with {
    type: "json",
};
import jsMatthewOutro from "../data/scriptures/joseph-smith-matthew/outro.json" with {
    type: "json",
};

export const handler: Handlers = {
    async GET(_req: Request, ctx: FreshContext) {
        const resp = await ctx.render();
        resp.headers.set("X-Custom-Header", "Hello World");
        return resp;
    },
};

export default function Page(props: PageProps) {
    return (
        <main class="p-4">
            <h1 class="text-4xl text-center">Joseph Smith Matthew</h1>
            <Diff
                reference1={{ book: "Matthew", verses: matthew }}
                reference2={{ book: "Joseph Smith Matthew", verses: jsMatthew }}
                outro2={jsMatthewOutro}
            />
        </main>
    );
}
