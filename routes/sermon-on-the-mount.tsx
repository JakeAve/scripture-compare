import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Diff } from "../components/Diff.tsx";
import _3Nephi from "../data/scriptures/3-nephi-sermon-on-mount/main-section.json" with {
    type: "json",
};
import _3NephiIntro from "../data/scriptures/3-nephi-sermon-on-mount/intro.json" with {
    type: "json",
};
import matthew from "../data/scriptures/matthew-sermon-on-mount/main-section.json" with {
    type: "json",
};
import matthewIntro from "../data/scriptures/matthew-sermon-on-mount/intro.json" with {
    type: "json",
};
import matthewOutro from "../data/scriptures/matthew-sermon-on-mount/outro.json" with {
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
            <h1 class="text-4xl text-center">Sermon on the Mount</h1>
            <Diff
                reference1={{ book: "Matthew", verses: matthew }}
                reference2={{ book: "3 Nephi", verses: _3Nephi }}
                intro1={matthewIntro}
                intro2={_3NephiIntro}
                outro1={matthewOutro}
            />
        </main>
    );
}
