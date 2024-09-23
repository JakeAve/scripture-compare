import { JSX } from "preact/jsx-runtime";
import { diff } from "../lib/diff.ts";
import { isPunctuation, splitText } from "../lib/textHelpers.ts";

interface Verse {
    chapter: number;
    verse: number;
    text: string;
}

export interface Reference {
    book: string;
    verses: Verse[];
}

interface Props {
    reference1: Reference;
    intro1?: Verse[];
    outro1?: Verse[];
    reference2: Reference;
    intro2?: Verse[];
    outro2?: Verse[];
}

export function Diff(props: Props) {
    const { reference1, intro1, outro1, reference2, intro2, outro2 } = props;

    const verses1 = reference1.verses;
    const verses2 = reference2.verses;

    const text1 = verses1.map(({ text }) => text).join("\n");
    const text2 = verses2.map(({ text }) => text).join("\n");

    const d = diff(text1, text2);

    const intro1Content = (intro1 || []).map(({ chapter, verse, text }) => (
        <p class="col-start-1 col-span-1">
            <span class="font-medium">{chapter}:{verse}{" "}</span>
            <span class="bg-blue-200">{text}</span>
        </p>
    ));

    const outro1Content = (outro1 || []).map(({ chapter, verse, text }) => (
        <p class="col-start-1 col-span-1">
            <span class="font-medium">{chapter}:{verse}{" "}</span>
            <span class="bg-blue-200">{text}</span>
        </p>
    ));

    const intro2Content = (intro2 || []).map(({ chapter, verse, text }) => (
        <p class="col-start-2 col-span-1">
            <span class="font-medium">{chapter}:{verse}{" "}</span>
            <span class="bg-green-200">{text}</span>
        </p>
    ));

    const outro2Content = (outro2 || []).map(({ chapter, verse, text }) => (
        <p class="col-start-2 col-span-1">
            <span class="font-medium">{chapter}:{verse}{" "}</span>
            <span class="bg-green-200">{text}</span>
        </p>
    ));

    const content: JSX.Element[] = [
        <h2 class="text-2xl justify-self-center" key="a">{reference1.book}
        </h2>,
        <h2 class="text-2xl justify-self-center" key="b">{reference2.book}
        </h2>,
        ...intro1Content,
        <p class="col-start-2 col-span-1"></p>,
        ...intro2Content,
    ];

    let row1 = 2;
    let row2 = 2;
    let v1Idx = 0;
    let v1: Verse | undefined = verses1[v1Idx];
    let split1: string[] | undefined = v1 ? splitText(v1.text) : undefined;
    let t1Idx = 0;
    let c1: JSX.Element[] = [];
    let v2Idx = 0;
    let v2: Verse | undefined = verses2[v2Idx];
    let split2: string[] | undefined = v2 ? splitText(v2.text) : undefined;
    let t2Idx = 0;
    let c2: JSX.Element[] = [];

    let i = 0;
    while (i < d.length) {
        const t = d[i];
        const t1 = split1?.[t1Idx];
        const t2 = split2?.[t2Idx];

        if (t.value !== t1 && t.value !== t2) {
            console.log("out of sync");
            console.log(t, t1, t2, i);
        }

        if (t.removed) {
            t1Idx++;
            const isNextPunctuation = split1?.[t1Idx]
                ? isPunctuation(split1?.[t1Idx])
                : false;
            c1.push(
                <span class="bg-blue-200">
                    {t1}
                    {isNextPunctuation ? "" : " "}
                </span>,
            );
        }

        if (t.added) {
            t2Idx++;
            const isNextPunctuation = split2?.[t2Idx]
                ? isPunctuation(split2?.[t2Idx])
                : false;
            c2.push(
                <span class="bg-green-200">
                    {t2}
                    {isNextPunctuation ? "" : " "}
                </span>,
            );
        }

        if (t.added === false && t.removed === false) {
            t1Idx++;
            t2Idx++;
            const isNext1Punctuation = split1?.[t1Idx] &&
                isPunctuation(split1?.[t1Idx]);
            const isNext2Punctuation = split2?.[t2Idx] &&
                isPunctuation(split2?.[t2Idx]);
            c1.push(<>{t1}{isNext1Punctuation ? "" : " "}</>);
            c2.push(<>{t2}{isNext2Punctuation ? "" : " "}</>);
        }

        if (t1Idx === split1?.length) {
            content.push(
                <p
                    class={`col-start-1 col-span-1`}
                    // data-text={v1?.text}
                >
                    {v1 && (
                        <>
                            <span class="font-medium">
                                {v1.chapter}:{v1.verse}
                                {" "}
                            </span>
                            {c1}
                        </>
                    )}
                </p>,
            );
            t1Idx = 0;
            v1Idx++;
            v1 = verses1[v1Idx];
            split1 = v1 ? splitText(v1.text) : undefined;
            c1 = [];
            row1++;
        }

        if (t2Idx === split2?.length) {
            content.push(
                <p
                    class={`col-start-2 col-span-1`}
                    // data-text={v2?.text}
                >
                    {v2 && (
                        <>
                            <span class="font-medium">
                                {v2.chapter}:{v2.verse}
                                {" "}
                            </span>
                            {c2}
                        </>
                    )}
                </p>,
            );
            t2Idx = 0;
            v2Idx++;
            v2 = verses2[v2Idx];
            split2 = v2 ? splitText(v2.text) : undefined;
            c2 = [];
            row2++;
        }

        i++;
    }

    content.push(
        ...outro1Content,
    );

    if (outro1Content.length) {
        content.push(<p class="col-start-2 col-span-1"></p>);
    }

    content.push(
        ...outro2Content,
    );

    return (
        <div class="grid grid-cols-2 gap-4">
            {content}
        </div>
    );
}
