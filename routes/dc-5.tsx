import { PageProps } from "$fresh/server.ts";
import { DiffPage } from "../components/DiffPage.tsx";
import HeadElement from "../components/HeadElement.tsx";
import manuscript from "../data/scriptures/dc-5/revelation-march-1829.json" with {
    type: "json",
};
import dc5 from "../data/scriptures/dc-5/dc-5.json" with {
    type: "json",
};

export default function Page(props: PageProps) {
    return (
        <>
            <HeadElement
                pageProps={props}
                author="Scripture Compare"
                title="Doctrine and Covenants 5"
                imgPath="writing-in-notebook"
                tags={["Joseph Smith", "Doctrine and Covenants", "Book of Mormon", "Martin Harris", "Gold Plates"]}
                snippet="Compare the oldest exact manuscript with the modern text of Doctrine and Covenants 5"
            />
            <DiffPage
                title="Doctrine and Covenants 5"
                book1="Revelation, March 1829"
                book2="Doctrine and Covenants 5 (Online)"
                diffs={[{ compare1: manuscript, compare2: dc5 }]}
            />
        </>
    );
}
