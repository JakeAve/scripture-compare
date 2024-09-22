import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Diff, Scripture } from "../components/Diff.tsx";
import isaiah50 from "../data/scriptures/isaiah-50.json" with { type: "json" };
import _2nephi6 from "../data/scriptures/2-nephi-6.json" with { type: "json" };

export const handler: Handlers = {
    async GET(_req: Request, ctx: FreshContext) {
        const resp = await ctx.render();
        resp.headers.set("X-Custom-Header", "Hello World");
        return resp;
    },
};

export default function Page(props: PageProps) {
    return (
        <main>
            <h1>Isaiah 50</h1>
            <Diff file1={isaiah50 as Scripture} file2={_2nephi6 as Scripture} />
        </main>
    );
}
