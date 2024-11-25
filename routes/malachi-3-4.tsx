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
                snippet="Compare the King James Bible text from the prophet Malachi with the quote of Jesus Christ as found in the Book of Mormon."
            />
            <DiffPage
                title="Malachi 3 - 4"
                book1="Malachi"
                book2="3 Nephi"
                diffs={[{ compare1: malachi, compare2: _3Nephi }]}
            />
        </>
    );
}
