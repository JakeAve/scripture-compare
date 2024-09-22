import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Diff, Scripture } from "../components/Diff.tsx";
import _3Nephi from "../data/scriptures/3-nephi-12.json" with { type: "json" };
import matthew from "../data/scriptures/matthew-5.json" with { type: "json" };

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
            <h1>Sermon on the Mount</h1>
            <Diff file1={matthew as Scripture} file2={_3Nephi as Scripture} />
        </main>
    );
}
