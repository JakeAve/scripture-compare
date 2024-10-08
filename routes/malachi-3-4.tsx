import { PageProps } from "$fresh/server.ts";
import malachi from "../data/scriptures/malachi-3/main-section.json" with {
    type: "json",
};
import _3Nephi from "../data/scriptures/3-nephi-24/main-section.json" with {
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
                title="Malachi 3-4"
                imgPath="jesus-teaching"
                tags={[
                    "Malachi",
                    "Bible",
                    "Jesus Christ",
                    "Joseph Smith",
                    "Book of Mormon",
                ]}
                snippet="Compare the KVJ text with quote of Jesus Christ from the Book of Mormon"
            />
            <DiffPage
                title="Malachi 3-4"
                reference1={{ book: "Malachi", verses: malachi }}
                reference2={{ book: "3 Nephi", verses: _3Nephi }}
            />
        </>
    );
}
