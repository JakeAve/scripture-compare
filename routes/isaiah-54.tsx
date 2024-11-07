import { PageProps } from "$fresh/server.ts";
import isaiah from "../data/scriptures/isaiah-54/main-section.json" with {
    type: "json",
};
import nephi from "../data/scriptures/3-nephi-22/main-section.json" with {
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
                title="Isaiah 54"
                imgPath="scrolls"
                tags={["Isaiah", "Bible", "Book of Mormon"]}
                snippet="Compare the KVJ text with the quotes from the Book of Mormon"
            />
            <DiffPage
                title="Isaiah 54"
                book1="Isaiah"
                book2="3 Nephi"
                diffs={[{ compare1: isaiah, compare2: nephi }]}
            />
        </>
    );
}
