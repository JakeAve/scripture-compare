import { PageProps } from "$fresh/server.ts";
import isaiah50 from "../data/scriptures/isaiah-50-52/main-section.json" with {
    type: "json",
};
import _2nephi6 from "../data/scriptures/2-nephi-6-8/main-section.json" with {
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
                title="Isaiah 50-52"
                imgPath="scrolls"
                tags={["Isaiah", "Bible", "Book of Mormon"]}
                snippet="Compare the KVJ text with the quotes from the Book of Mormon"
            />
            <DiffPage
                title="Isaiah 50-52:2"
                reference1={{ book: "Isaiah", verses: isaiah50 }}
                reference2={{ book: "2 Nephi", verses: _2nephi6 }}
            />
        </>
    );
}
