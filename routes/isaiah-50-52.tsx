import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Diff } from "../components/Diff.tsx";
import isaiah50 from "../data/scriptures/isaiah-50.json" with { type: "json" };
import _2nephi6 from "../data/scriptures/2-nephi-6.json" with { type: "json" };

export const handler: Handlers = {
    async GET(_req: Request, ctx: FreshContext) {
        const resp = await ctx.render();
        resp.headers.set("X-Custom-Header", "Hello World");
        return resp;
    },
};

export default function Page(_props: PageProps) {
    return (
        <main class="p-4">
            <h1 class="text-4xl text-center">Isaiah 50 - 52:2</h1>
            <Diff
                reference1={{ book: "Isaiah", verses: isaiah50 }}
                reference2={{ book: "2 Nephi", verses: _2nephi6 }}
            />
        </main>
    );
}
