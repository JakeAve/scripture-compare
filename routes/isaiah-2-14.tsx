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
                reference1={{ book: "Isaiah", verses: isaiah }}
                reference2={{ book: "2 Nephi", verses: _2Nephi }}
            />
        </>
    );
}
