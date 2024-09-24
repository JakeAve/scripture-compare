import { PageProps } from "$fresh/server.ts";
import isaiah from "../data/scriptures/isaiah-48-49/main-section.json" with {
    type: "json",
};
import nephi from "../data/scriptures/1-nephi-20-21/main-section.json" with {
    type: "json",
};
import { DiffPage } from "../components/DiffPage.tsx";

export default function Page(_props: PageProps) {
    return (
        <DiffPage
            title="Isaiah 48 - 49"
            reference1={{ book: "Isaiah", verses: isaiah }}
            reference2={{ book: "1 Nephi", verses: nephi }}
        />
    );
}
