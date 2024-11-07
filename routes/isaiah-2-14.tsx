import { PageProps } from "$fresh/server.ts";
import { DiffPage } from "../components/DiffPage.tsx";
import HeadElement from "../components/HeadElement.tsx";
import _2Nephi from "../data/scriptures/2-nephi-12-24/main-section.json" with {
    type: "json",
};
import isaiah from "../data/scriptures/isaiah-2-14/main-section.json" with {
    type: "json",
};

export default function Page(props: PageProps) {
    return (
        <>
            <HeadElement
                pageProps={props}
                author="Scripture Compare"
                title="Isaiah 2-14"
                imgPath="scrolls"
                tags={["Isaiah", "Bible", "Book of Mormon"]}
                snippet="Compare the KVJ text with the quotes from the Book of Mormon"
            />
            <DiffPage
                title="Isaiah 2 - 14"
                book1="Isaiah"
                book2="2 Nephi"
                diffs={[{ compare1: isaiah, compare2: _2Nephi }]}
            />
        </>
    );
}
