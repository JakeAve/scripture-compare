import { PageProps } from "$fresh/server.ts";
import { DiffPage } from "../components/DiffPage.tsx";
import HeadElement from "../components/HeadElement.tsx";
import bookOfCommandments from "../data/scriptures/dc-27/revelation-book-1.json" with {
    type: "json",
};
import dc27 from "../data/scriptures/dc-27/online-27.json" with {
    type: "json",
};

export default function Page(props: PageProps) {
    return (
        <>
            <HeadElement
                pageProps={props}
                author="Scripture Compare"
                title="Doctrine and Covenants 27"
                imgPath="writing-in-notebook"
                tags={["Joseph Smith", "Doctrine and Covenants", "Book of Commandments"]}
                snippet="Compare Section 27 with existing notes from Revelation Book 1"
            />
            <DiffPage
                title="Doctrine and Covenants 27"
                book1="Revelation Book 1"
                book2="Doctrine and Covenants 27 (Online)"
                diffs={[{ compare1: bookOfCommandments, compare2: dc27 }]}
            />
        </>
    );
}
