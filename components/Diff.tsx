import { JSX } from "preact/jsx-runtime";
import { diff } from "../lib/diff.ts";

interface Verse {
    chapter: number;
    verse: number;
    text: string;
}

export type Scripture = Verse[];

interface Props {
    file1: Scripture;
    file2: Scripture;
}

export function Diff(props: Props) {
    const { file1, file2 } = props;

    const text1 = file1.map(({ text }) => text).join("\n");
    const text2 = file2.map(({ text }) => text).join("\n");

    const d = diff(text1, text2);

    let idx1 = 0;
    const arr1 = file1.map(
        ({ chapter: chapter1, verse: verse1, text: text1 }, i) => {
            const content1: JSX.Element[] = [];
            const tokens1 = text1.split(/\b/);
            let tokensIdx = 0;
            for (; idx1 < d.length; idx1++) {
                const tokenDiff = d[idx1];
                const token1 = tokens1[tokensIdx];
                if (!token1) {
                    break;
                }
                if (tokenDiff.added) {
                    continue;
                }
                if (
                    !tokenDiff.added && !tokenDiff.removed &&
                    token1 === tokenDiff.value
                ) {
                    content1.push(<>{token1}</>);
                    tokensIdx++;
                    continue;
                }
                if (tokenDiff.removed) {
                    content1.push(
                        <span class="bg-blue-200">
                            {token1}
                        </span>,
                    );
                    tokensIdx++;
                    continue;
                }
            }
            return (
                <>
                    <p key={i}>
                        <span class="font-medium">
                            {chapter1}:{verse1}
                            {" "}
                        </span>
                        {content1}
                    </p>
                </>
            );
        },
    );

    let idx2 = 0;
    const arr2 = file2.map(({ chapter, verse, text }, i) => {
        const content: JSX.Element[] = [];
        const tokens2 = text.split(/\b/);
        let tokens2Idx = 0;
        for (; idx2 < d.length; idx2++) {
            const tokenDiff = d[idx2];
            const token2 = tokens2[tokens2Idx];
            if (!token2) {
                break;
            }
            if (tokenDiff.added) {
                content.push(
                    <span class="bg-green-200">
                        {token2}
                    </span>,
                );
                tokens2Idx++;
                continue;
            }
            if (
                !tokenDiff.added && !tokenDiff.removed &&
                token2 === tokenDiff.value
            ) {
                content.push(<>{token2}</>);
                tokens2Idx++;
                continue;
            }
            if (tokenDiff.removed) {
                continue;
            }
        }
        return (
            <p key={i}>
                <span class="font-medium">{chapter}:{verse}{" "}</span>
                {content}
            </p>
        );
    });

    return (
        <div class="grid grid-cols-2 gap-4">
            <div>{arr1}</div>
            <div>{arr2}</div>
        </div>
    );
}
