import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Diff } from "../components/Diff.tsx";
import malachi from "../data/scriptures/malachi-3/main-section.json" with {
    type: "json",
};
import _3Nephi from "../data/scriptures/3-nephi-24/main-section.json" with {
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
            <h1 class="text-4xl text-center">Malachi 3 - 4</h1>
            <Diff
                reference1={{ book: "Malachi", verses: malachi }}
                reference2={{ book: "3 Nephi", verses: _3Nephi }}
            />
        </main>
    );
}
