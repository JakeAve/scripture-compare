import { PageProps } from "$fresh/server.ts";
import malachi from "../data/scriptures/malachi-3/main-section.json" with {
    type: "json",
};
import _3Nephi from "../data/scriptures/3-nephi-24/main-section.json" with {
    type: "json",
};
import { DiffPage } from "../components/DiffPage.tsx";

export default function Page(_props: PageProps) {
    return (
        <DiffPage
            title="Malachi 3 - 4"
            reference1={{ book: "Malachi", verses: malachi }}
            reference2={{ book: "3 Nephi", verses: _3Nephi }}
        />
    );
}
