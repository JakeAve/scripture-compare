import { PageProps } from "$fresh/server.ts";
import manuscript from "../data/scriptures/1-nephi-original-manuscript-chapter-6/main-section.json" with {
    type: "json",
};
import _2015 from "../data/scriptures/1-nephi-19-21/main-section.json" with {
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
                title="Original Book of Mormon: 1 Nephi Chapter 6"
                imgPath="gold-plates"
                tags={[
                    "Book of Mormon",
                    "Jesus Christ",
                    "Joseph Smith",
                ]}
                snippet="Compare the text of the original Book of Mormon manuscript with the modern publication"
            />
            <DiffPage
                title="Original Book of Mormon: 1 Nephi Chapter 6"
                reference1={{ book: "Original Manuscript", verses: manuscript }}
                reference2={{
                    book: "Church of Jesus Christ 2015 Online",
                    verses: _2015,
                }}
            />
        </>
    );
}