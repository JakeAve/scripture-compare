import { PageProps } from "$fresh/server.ts";
import { DiffPage } from "../components/DiffPage.tsx";
import _2Nephi from "../data/scriptures/2-nephi-12-24/main-section.json" with {
    type: "json",
};
import isaiah from "../data/scriptures/isaiah-2-14/main-section.json" with {
    type: "json",
};

export default function Page(_props: PageProps) {
    return (
        <DiffPage
            title="Isaiah 2 - 14"
            reference1={{ book: "Isaiah", verses: isaiah }}
            reference2={{ book: "2 Nephi", verses: _2Nephi }}
        />
    );
}
