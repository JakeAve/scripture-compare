import { PageProps } from "$fresh/server.ts";
import { DiffPage } from "../components/DiffPage.tsx";
import HeadElement from "../components/HeadElement.tsx";
import leningrad from "../data/scriptures/isaiah-len-codex-41-66/main-section.json" with {
    type: "json",
};
import aleppo from "../data/scriptures/isaiah-aleppo-41-66/main-section.json" with {
    type: "json",
};

export default function Page(props: PageProps) {
    return (
        <>
            <HeadElement
                pageProps={props}
                author="Scripture Compare"
                title="Isaiah 41-66"
                imgPath="scrolls"
                tags={["Isaiah", "Bible", "Aleppo Codes", "Leningrad Codex"]}
                snippet="Compare the Aleppo and Leningrad Codices"
            />
            <DiffPage
                title="Isaiah 41 - 66"
                book1="Aleppo Codex"
                book2="Leningrad Codex"
                diffs={[{ compare1: aleppo, compare2: leningrad, dir: "rtl" }]}
            />
        </>
    );
}
