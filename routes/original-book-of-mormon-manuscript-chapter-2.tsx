import { PageProps } from "$fresh/server.ts";
import manuscript from "../data/scriptures/1-nephi-original-manuscript-chapter-2/main-section.json" with {
    type: "json",
};
import _2015 from "../data/scriptures/1-nephi-6-9-2015/main-section.json" with {
    type: "json",
};

import { DiffPage } from "../components/DiffPage.tsx";

export default function Page(_props: PageProps) {
    return (
        <DiffPage
            title="Original Book of Mormon Manuscript Chapter 2"
            reference1={{ book: "Original Manuscript", verses: manuscript }}
            reference2={{
                book: "Church of Jesus Christ 2015 Online",
                verses: _2015,
            }}
        />
    );
}
