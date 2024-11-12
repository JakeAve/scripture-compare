import { PageProps } from "$fresh/server.ts";
import { DiffPage } from "../components/DiffPage.tsx";
import HeadElement from "../components/HeadElement.tsx";
import mark from "../data/scriptures/mark-16/mark-16.json" with {
    type: "json",
};
import mormon from "../data/scriptures/mormon-9/mormon-9.json" with {
    type: "json",
};

export default function Page(props: PageProps) {
    return (
        <>
            <HeadElement
                pageProps={props}
                author="Scripture Compare"
                title="Longer Ending Mark 16"
                imgPath="jesus-teaching"
                tags={[
                    "Mark",
                    "Bible",
                    "Book of Mormon",
                    "Jesus",
                    "Mark Longer Ending",
                ]}
                snippet="Compare the KVJ text with the quotes from the Book of Mormon"
            />
            <DiffPage
                title="Mark 16 Longer Ending"
                book1="Mark"
                book2="Mormon"
                diffs={[{
                    compare1: mark.slice(1,5),
                    compare2: mormon.slice(0,3),
                    outro1: mark.slice(5),
                    outro2: mormon.slice(3),
                    intro1: mark.slice(0, 1),
                }]}
            />
        </>
    );
}
