import { PageProps } from "$fresh/server.ts";
import _3Nephi from "../data/scriptures/3-nephi-sermon-on-mount/main-section.json" with {
    type: "json",
};
import _3NephiIntro from "../data/scriptures/3-nephi-sermon-on-mount/intro.json" with {
    type: "json",
};
import matthew from "../data/scriptures/matthew-sermon-on-mount/main-section.json" with {
    type: "json",
};
import matthewIntro from "../data/scriptures/matthew-sermon-on-mount/intro.json" with {
    type: "json",
};
import matthewOutro from "../data/scriptures/matthew-sermon-on-mount/outro.json" with {
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
                title="Sermon on the Mount"
                imgPath="jesus-teaching"
                tags={[
                    "Book of Mormon",
                    "Matthew",
                    "3 Nephi",
                    "Jesus Christ",
                    "Joseph Smith",
                ]}
                snippet="Compare the King James Bible text of Matthew 5-6 and the quote from Jesus Christ during His ministry in the ancient Americas from the Book of Mormon."
            />
            <DiffPage
                title="Sermon on the Mount"
                book1="Matthew"
                book2="3 Nephi"
                diffs={[{
                    intro1: matthewIntro,
                    outro1: matthewOutro,
                    compare1: matthew,
                    intro2: _3NephiIntro,
                    compare2: _3Nephi,
                }]}
            />
        </>
    );
}
