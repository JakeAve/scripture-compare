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
                reference1={{ book: "Isaiah", verses: isaiah }}
                reference2={{ book: "3 Nephi", verses: nephi }}
            />
        </>
    );
}
