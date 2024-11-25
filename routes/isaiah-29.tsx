import { PageProps } from "$fresh/server.ts";
import isaiah from "../data/scriptures/isaiah-29/main-section.json" with {
    type: "json",
};
import isaiahIntro from "../data/scriptures/isaiah-29/intro.json" with {
    type: "json",
};
import nephi from "../data/scriptures/2-nephi-27/main-section.json" with {
    type: "json",
};
import nephiIntro from "../data/scriptures/2-nephi-27/intro.json" with {
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
                title="Isaiah 29"
                imgPath="scrolls"
                tags={["Isaiah", "Bible", "Book of Mormon"]}
                snippet="Compare the King Jame's Bible text of the prophet Isaiah with quotes from the Book of Mormon, as copied from the an ancient version of Isaiah found the Brass Plates."
            />
            <DiffPage
                title="Isaiah 29"
                book1="Isaiah"
                book2="2 Nephi"
                diffs={[{
                    intro1: isaiahIntro,
                    intro2: nephiIntro,
                    compare1: isaiah,
                    compare2: nephi,
                }]}
            />
        </>
    );
}
