import { PageProps } from "$fresh/server.ts";
import { DiffPage } from "../components/DiffPage.tsx";
import HeadElement from "../components/HeadElement.tsx";
import _3nephi_20_1_15 from "../data/scriptures/3-nephi-20/3-nephi-20:1-15.json" with {
    type: "json",
};
import _3_nephi_20_16_17 from "../data/scriptures/3-nephi-20/3-nephi-20:16-17.json" with {
    type: "json",
};
import micah_5_8_9 from "../data/scriptures/3-nephi-20/micah-5:8-9.json" with {
    type: "json",
};
import _3_nephi_20_18_19 from "../data/scriptures/3-nephi-20/3-nephi-20:18-19.json" with {
    type: "json",
};
import micah_4_12_13 from "../data/scriptures/3-nephi-20/micah-4:12-13.json" with {
    type: "json",
};
import _3_nephi_20_20_22 from "../data/scriptures/3-nephi-20/3-nephi-20:20-22.json" with {
    type: "json",
};
import _3_nephi_20_23_26 from "../data/scriptures/3-nephi-20/3-nephi-20:23-26.json" with {
    type: "json",
};
import acts_3_22_26 from "../data/scriptures/3-nephi-20/acts-3-22:26.json" with {
    type: "json",
};
import _3_nephi_20_27_31 from "../data/scriptures/3-nephi-20/3-nephi-20:27-31.json" with {
    type: "json",
};
import _3_nephi_20_32_35 from "../data/scriptures/3-nephi-20/3-nephi-20:32-35.json" with {
    type: "json",
};
import isaiah_52_8_10 from "../data/scriptures/3-nephi-20/isaiah-52:8-10.json" with {
    type: "json",
};
import _3_nephi_20_36_38 from "../data/scriptures/3-nephi-20/3-nephi-20:36-38.json" with {
    type: "json",
};
import isaiah_52_1_3 from "../data/scriptures/3-nephi-20/isaiah-52:1-3.json" with {
    type: "json",
};
import _3_nephi_20_39 from "../data/scriptures/3-nephi-20/3-nephi-20:39.json" with {
    type: "json",
};
import _3_nephi_20_40 from "../data/scriptures/3-nephi-20/3-nephi-20:40.json" with {
    type: "json",
};
import isaiah_52_7 from "../data/scriptures/3-nephi-20/isaiah-52:7.json" with {
    type: "json",
};
import _3_nephi_20_41_45 from "../data/scriptures/3-nephi-20/3-nephi-20:41-45.json" with {
    type: "json",
};
import isaiah_52_11_15 from "../data/scriptures/3-nephi-20/isaiah-52:11-15.json" with {
    type: "json",
};
import _3_nephi_20_46 from "../data/scriptures/3-nephi-20/3-nephi-20:46.json" with {
    type: "json",
};

export default function Page(props: PageProps) {
    return (
        <>
            <HeadElement
                pageProps={props}
                author="Scripture Compare"
                title="3 Nephi 20"
                imgPath="jesus-teaching"
                tags={[
                    "Book of Mormon",
                    "Matthew",
                    "3 Nephi",
                    "Jesus Christ",
                    "Joseph Smith",
                    "Michah",
                    "Acts",
                    "Stephen",
                ]}
                snippet="Compare 3 Nephi 20 to KJV texts as Jesus Christ expounds Biblical teachings"
            />
            <DiffPage
                title="3 Nephi 20"
                book1="3 Nephi 20"
                book2="KJV"
                diffs={[
                    {
                        intro1: _3nephi_20_1_15,
                        compare1: _3_nephi_20_16_17,
                        compare2: micah_5_8_9,
                    },
                    {
                        compare1: _3_nephi_20_18_19,
                        compare2: micah_4_12_13,
                        outro1: _3_nephi_20_20_22,
                    },
                    {
                        compare1: _3_nephi_20_23_26,
                        compare2: acts_3_22_26,
                        outro1: _3_nephi_20_27_31,
                    },
                    { compare1: _3_nephi_20_32_35, compare2: isaiah_52_8_10 },
                    {
                        compare1: _3_nephi_20_36_38,
                        compare2: isaiah_52_1_3,
                        outro1: _3_nephi_20_39,
                    },
                    {
                        compare1: _3_nephi_20_40,
                        compare2: isaiah_52_7,
                    },
                    {
                        compare1: _3_nephi_20_41_45,
                        compare2: isaiah_52_11_15,
                        outro1: _3_nephi_20_46,
                    },
                ]}
            />
        </>
    );
}
