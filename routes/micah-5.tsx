import { PageProps } from "$fresh/server.ts";
import micah from "../data/scriptures/micah-5/main-section.json" with {
    type: "json",
};
import micahIntro from "../data/scriptures/micah-5/intro.json" with {
    type: "json",
};
import micahOutro from "../data/scriptures/micah-5/outro.json" with {
    type: "json",
};
import nephi from "../data/scriptures/3-nephi-21/main-section.json" with {
    type: "json",
};
import nephiIntro from "../data/scriptures/3-nephi-21/intro.json" with {
    type: "json",
};
import nephiOutro from "../data/scriptures/3-nephi-21/outro.json" with {
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
                title="Micah 5"
                imgPath="jesus-teaching"
                tags={[
                    "Micah ",
                    "Bible",
                    "Jesus Christ",
                    "Joseph Smith",
                    "Book of Mormon",
                ]}
                snippet="Compare the KVJ text with quote of Jesus Christ from the Book of Mormon"
            />
            <DiffPage
                title="Micah 5 and 3 Nephi 21"
                reference1={{ book: "Micah", verses: micah }}
                intro1={micahIntro}
                outro1={micahOutro}
                reference2={{ book: "3 Nephi", verses: nephi }}
                intro2={nephiIntro}
                outro2={nephiOutro}
            />
        </>
    );
}
