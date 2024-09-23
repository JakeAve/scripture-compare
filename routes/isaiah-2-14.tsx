import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Diff } from "../components/Diff.tsx";
import _2Nephi from "../data/scriptures/2-nephi-12-24/main-section.json" with {
    type: "json",
};
import isaiah from "../data/scriptures/isaiah-2-14/main-section.json" with {
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
            <h1 class="text-4xl text-center">Isaiah 2-14</h1>
            <Diff
                reference1={{ book: "Isaiah", verses: isaiah }}
                reference2={{ book: "2 Nephi", verses: _2Nephi }}
            />
        </main>
    );
}
