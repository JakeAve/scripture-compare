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

export default function Page(_props: PageProps) {
    return (
        <DiffPage
            title="Sermon on the Mount"
            reference1={{ book: "Matthew", verses: matthew }}
            reference2={{ book: "3 Nephi", verses: _3Nephi }}
            intro1={matthewIntro}
            intro2={_3NephiIntro}
            outro1={matthewOutro}
        />
    );
}
