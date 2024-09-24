import { PageProps } from "$fresh/server.ts";
import manuscript from "../data/scriptures/1-nephi-original-manuscript-chapter-1/main-section.json" with {
    type: "json",
};
import _2015 from "../data/scriptures/1-nephi-1-5-2015/main-section.json" with {
    type: "json",
};
import _2015Intro from "../data/scriptures/1-nephi-1-5-2015/intro.json" with {
    type: "json",
};
import { DiffPage } from "../components/DiffPage.tsx";

export default function Page(_props: PageProps) {
    return (
        <DiffPage
            title="Original Book of Mormon Manuscript Chapter 1"
            reference1={{ book: "Original Manuscript", verses: manuscript }}
            reference2={{
                book: "Church of Jesus Christ 2015 Online",
                verses: _2015,
            }}
            intro2={_2015Intro}
        />
    );
}
