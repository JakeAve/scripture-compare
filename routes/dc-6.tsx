import { PageProps } from "$fresh/server.ts";
import { DiffPage } from "../components/DiffPage.tsx";
import HeadElement from "../components/HeadElement.tsx";
import bookOfCommandments from "../data/scriptures/dc-6/book-of-commandments.json" with {
    type: "json",
};
import dc6 from "../data/scriptures/dc-6/dc-6.json" with {
    type: "json",
};

export default function Page(props: PageProps) {
    return (
        <>
            <HeadElement
                pageProps={props}
                author="Scripture Compare"
                title="Doctrine and Covenants 6"
                imgPath="writing-in-notebook"
                tags={["Joseph Smith", "Doctrine and Covenants", "Book of Commandments"]}
                snippet="Compare the 1832 Book of Commandments with the modern text of Doctrine and Covenants 5"
            />
            <DiffPage
                title="Doctrine and Covenants 5"
                book1="Book of Commandments, 1832"
                book2="Doctrine and Covenants 5 (Online)"
                diffs={[{ compare1: bookOfCommandments, compare2: dc6 }]}
            />
        </>
    );
}
