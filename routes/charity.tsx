import { PageProps } from "$fresh/server.ts";
import corinthians from "../data/scriptures/1-corinthians-13/main-section.json" with {
    type: "json",
};
import corinthiansIntro from "../data/scriptures/1-corinthians-13/intro.json" with {
    type: "json",
};
import corinthiansOutro from "../data/scriptures/1-corinthians-13/outro.json" with {
    type: "json",
};
import moroni from "../data/scriptures/moroni-7/main-section.json" with {
    type: "json",
};
import moroniIntro from "../data/scriptures/moroni-7/intro.json" with {
    type: "json",
};
import moroniOutro from "../data/scriptures/moroni-7/outro.json" with {
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
                title="Charity"
                imgPath="scrolls"
                tags={["Corinthians", "Bible", "Book of Mormon", "Moroni", "Paul"]}
                snippet="Compare the KVJ text with the the Book of Mormon"
            />
            <DiffPage
                title="Charity"
                reference1={{ book: "1 Corinthians", verses: corinthians }}
                intro1={corinthiansIntro}
                outro1={corinthiansOutro}
                reference2={{ book: "Moroni", verses: moroni }}
                intro2={moroniIntro}
                outro2={moroniOutro}
            />
        </>
    );
}
