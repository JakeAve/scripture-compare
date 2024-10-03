import { JSX } from "preact/jsx-runtime";
import { diff } from "../lib/diff.ts";
import { insertSpaceBetween, splitText } from "../lib/textHelpers.ts";
import WordMatch from "./WordMatch.tsx";
import DiffHeader from "./DiffHeader.tsx";

interface Verse {
    chapter: number;
    verse: number;
    text: string;
    source?: string;
}

export interface Reference {
    book: string;
    verses: Verse[];
}

export interface DiffProps {
    reference1: Reference;
    intro1?: Verse[];
    outro1?: Verse[];
    reference2: Reference;
    intro2?: Verse[];
    outro2?: Verse[];
}

const side1Color = "bg-blue-200 dark:bg-blue-900";
const side2Color = "bg-green-200 dark:bg-green-900";

export function Diff(props: DiffProps) {
    const { reference1, intro1, outro1, reference2, intro2, outro2 } = props;

    const verses1 = reference1.verses;
    const verses2 = reference2.verses;

    const text1 = verses1.map(({ text }) => text).join("\n");
    const text2 = verses2.map(({ text }) => text).join("\n");

    const d = diff(text1, text2);

    // Deno.writeTextFileSync("test.json", JSON.stringify(d, null, 4));

    let row1 = 1;
    let row2 = 1;

    const intro1Content = (intro1 || []).map(({ chapter, verse, text }) => {
        row1++;
        row2++;
        return (
            <p class="col-start-1 col-span-1" style={{ gridRow: row1 }}>
                <span class="font-medium">{chapter}:{verse}{" "}</span>
                <span class={side1Color}>{text}</span>
            </p>
        );
    });

    const intro2Content = (intro2 || []).map(({ chapter, verse, text }) => {
        row1++;
        row2++;
        return (
            <p class="col-start-2 col-span-1" style={{ gridRow: row2 }}>
                <span class="font-medium">{chapter}:{verse}{" "}</span>
                <span class={side2Color}>{text}</span>
            </p>
        );
    });

    const content: JSX.Element[] = [
        <DiffHeader key="a">
            {reference1.book}
        </DiffHeader>,
        <DiffHeader key="b">
            {reference2.book}
        </DiffHeader>,
        ...intro1Content,
        <p class="col-start-2 col-span-1"></p>,
        ...intro2Content,
    ];

    let v1Idx = 0;
    let v1: Verse | undefined = verses1[v1Idx];
    let split1: string[] | undefined = v1 ? splitText(v1.text) : undefined;
    let t1Idx = 0;
    let c1: JSX.Element[] = [];
    let currRows1: number[] = [];
    let v2Idx = 0;
    let v2: Verse | undefined = verses2[v2Idx];
    let split2: string[] | undefined = v2 ? splitText(v2.text) : undefined;
    let t2Idx = 0;
    let c2: JSX.Element[] = [];
    let currRows2: number[] = [];

    row1++;
    row2++;

    let i = 0;
    while (i < d.length) {
        const t = d[i];
        const t1 = split1?.[t1Idx];
        const t2 = split2?.[t2Idx];

        if (t.value !== t1 && t.value !== t2) {
            console.log("out of sync");
            console.log(t, t1, t2, i);
            console.log(d.slice(Math.max(i - 5, 0), Math.min(i + 5, d.length)));
            console.log({ split1 });
            console.log({ split2 });
            // break;
        }

        if (t.removed) {
            t1Idx++;
            c1.push(
                <span class={side1Color}>
                    {t1}
                    {insertSpaceBetween(t1, split1?.[t1Idx])}
                </span>,
            );
        }

        if (t.added) {
            t2Idx++;
            c2.push(
                <span class={side2Color}>
                    {t2}
                    {insertSpaceBetween(t2, split2?.[t2Idx])}
                </span>,
            );
        }

        if (t.added === false && t.removed === false) {
            t1Idx++;
            t2Idx++;
            currRows1.push(row1);
            currRows2.push(row2);
            c1.push(
                <WordMatch id={"a" + i.toString()}>
                    {t1}
                    {insertSpaceBetween(t1, split1?.[t1Idx])}
                </WordMatch>,
            );
            c2.push(
                <WordMatch id={"b" + i.toString()}>
                    {t2}
                    {insertSpaceBetween(t2, split2?.[t2Idx])}
                </WordMatch>,
            );
        }

        if (t1Idx === split1?.length) {
            content.push(
                <p
                    class={`col-start-1 col-span-1`}
                    style={{
                        gridRow: row1,
                        // `${row1} / ${
                        // row1 < row2 ? currRows2.at(-1) || row1 : row1
                        //  }`,
                    }}
                >
                    {v1 && (
                        <>
                            <a
                                class="font-medium hover:underline focus:underline active:underline me-2"
                                target="_blank"
                                href={v1?.source}
                            >
                                {v1.chapter}:{v1.verse}
                            </a>
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
            if (verses1.length !== verses2.length) {
                row1 = Math.max(row1, row2);
            }
            currRows1 = [];
        }

        if (t2Idx === split2?.length) {
            content.push(
                <p
                    class={`col-start-2 col-span-1`}
                    style={{
                        gridRow: `${row2} / ${
                            row2 < row1 ? currRows1.at(-1) || row2 : row2
                        }`,
                    }}
                >
                    {v2 && (
                        <>
                            <a
                                class="font-medium hover:underline focus:underline active:underline me-2"
                                target="_blank"
                                href={v2?.source}
                            >
                                {v2.chapter}:{v2.verse}
                            </a>
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
            if (verses1.length !== verses2.length) {
                row2 = Math.max(row1, row2);
            }
            currRows2 = [];
        }

        i++;
    }

    const outro1Content = (outro1 || []).map(({ chapter, verse, text }) => {
        row1++;
        row2++;
        return (
            <p class="col-start-1 col-span-1" style={{ gridRow: row1 }}>
                <span class="font-medium">{chapter}:{verse}{" "}</span>
                <span class={side1Color}>{text}</span>
            </p>
        );
    });

    content.push(
        ...outro1Content,
    );

    if (outro1Content.length) {
        content.push(<p class="col-start-2 col-span-1"></p>);
    }

    const outro2Content = (outro2 || []).map(({ chapter, verse, text }) => {
        row1++;
        row2++;
        return (
            <p class="col-start-2 col-span-1" style={{ gridRow: row2 }}>
                <span class="font-medium">{chapter}:{verse}{" "}</span>
                <span class={side2Color}>{text}</span>
            </p>
        );
    });

    content.push(
        ...outro2Content,
    );

    return (
        <div
            data-diff-container
            class="mx-auto grid grid-cols-2 max-w-4xl gap-2 md:gap-4 font-serif relative"
        >
            {content}
        </div>
    );
}
