import WordMatchEventListener from "../islands/WordMatchEventListener.tsx";
import { Diff, DiffProps } from "./Diff.tsx";
import DiffHeader from "./DiffHeader.tsx";

interface Props {
    title: string;
    book1: string;
    book2: string;
    diffs: DiffProps[];
}

export function DiffPage(props: Props) {
    const { title, book1, book2, diffs } = props;

    return (
        <main class="p-4 md:px-6">
            <h1 class="text-2xl md:text-4xl text-center mb-6">
                {title}
            </h1>
            {/* <Diff {...otherProps} /> */}
            <div
                data-diff-container
                class="mx-auto grid grid-cols-2 max-w-4xl gap-2 md:gap-4 font-serif relative"
            >
                <DiffHeader key="a">
                    {book1}
                </DiffHeader>
                <DiffHeader key="b">
                    {book2}
                </DiffHeader>
                {diffs.map((d, i) => <Diff key={i} {...d} />)}
            </div>
            <WordMatchEventListener />
        </main>
    );
}
