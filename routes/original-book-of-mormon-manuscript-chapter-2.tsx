import { PageProps } from "$fresh/server.ts";
import manuscript from "../data/scriptures/1-nephi-original-manuscript-chapter-2/main-section.json" with {
    type: "json",
};
import _2015 from "../data/scriptures/1-nephi-6-9-2015/main-section.json" with {
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
                title="Original Book of Mormon Chapter 2"
                imgPath="gold-plates"
                tags={[
                    "Book of Mormon",
                    "Jesus Christ",
                    "Joseph Smith",
                ]}
                snippet="Compare the text of the original Book of Mormon manuscript with the modern publication"
            />
            <DiffPage
                title="Original Book of Mormon Manuscript Chapter 2"
                reference1={{ book: "Original Manuscript", verses: manuscript }}
                reference2={{
                    book: "Church of Jesus Christ 2015 Online",
                    verses: _2015,
                }}
            />
        </>
    );
}