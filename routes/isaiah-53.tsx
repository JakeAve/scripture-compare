import { PageProps } from "$fresh/server.ts";
import isaiah from "../data/scriptures/isaiah-53/main-section.json" with {
    type: "json",
};
import mosiah from "../data/scriptures/mosiah-14/main-section.json" with {
    type: "json",
};
import { DiffPage } from "../components/DiffPage.tsx";
import HeadElement from "../components/HeadElement.tsx";

export default function Page(props: PageProps) {
    return (
        <>
            <HeadElement
                pageProps={props}
                author="Scripture Compare"
                title="Isaiah 53"
                imgPath="scrolls"
                tags={["Isaiah", "Bible", "Book of Mormon"]}
                snippet="Compare the KVJ text with the quotes from the Book of Mormon"
            />
            <DiffPage
                title="Isaiah 53"
                book1="Isaiah"
                book2="Mosiah"
                diffs={[{ compare1: isaiah, compare2: mosiah }]}
            />
        </>
    );
}
