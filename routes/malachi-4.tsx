import { PageProps } from "$fresh/server.ts";
import john from "../data/scriptures/malachi-4/main-section.json" with {
    type: "json",
};
import dc from "../data/scriptures/dc-2/main-section.json" with {
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
                title="Malachi 4 and Angel Moroni"
                imgPath="writing-in-notebook"
                tags={[
                    "Malachi",
                    "Bible",
                    "Joseph Smith",
                    "Doctrine and Covenants 2",
                ]}
                snippet="Compare Malachi 4 with Angel Moroni's recitation to the prophet on September 21, 1823"
            />
            <DiffPage
                title="Malachi 4 and Angel Moroni"
                book1="Malachi"
                book2="Joseph Smith History and Doctrine and Covenants 2"
                diffs={[{ compare1: john, compare2: dc }]}
            />
        </>
    );
}
