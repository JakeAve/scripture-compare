import { PageProps } from "$fresh/server.ts";
import matthew from "../data/scriptures/matthew-23/main-section.json" with {
    type: "json",
};
import jsMatthew from "../data/scriptures/joseph-smith-matthew/main-section.json" with {
    type: "json",
};
import jsMatthewOutro from "../data/scriptures/joseph-smith-matthew/outro.json" with {
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
                title="Joseph Smith Matthew"
                imgPath="writing-in-notebook"
                tags={[
                    "Matthew",
                    "Bible",
                    "Joseph Smith",
                    "Pearl of Great Price",
                ]}
                snippet="Compare the King Jame's Bible text with the inspired Joseph Smith translation of Matthew 24."
            />
            <DiffPage
                title="Joseph Smith Matthew"
                book1="Matthew"
                book2="Joseph Smith Matthew"
                diffs={[{
                    compare1: matthew,
                    compare2: jsMatthew,
                    outro2: jsMatthewOutro,
                }]}
            />
        </>
    );
}
