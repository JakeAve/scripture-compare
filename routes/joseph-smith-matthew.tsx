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
                snippet="Compare the KVJ text with the inspired Joseph Smith translation"
            />
            <DiffPage
                title="Joseph Smith Matthew"
                reference1={{ book: "Matthew", verses: matthew }}
                reference2={{ book: "Joseph Smith Matthew", verses: jsMatthew }}
                outro2={jsMatthewOutro}
            />
        </>
    );
}
