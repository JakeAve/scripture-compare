import WordMatchEventListener from "../islands/WordMatchEventListener.tsx";
import { Diff, DiffProps } from "./Diff.tsx";

interface Props extends DiffProps {
    title: string;
}

export function DiffPage(props: Props) {
    const { title, ...otherProps } = props;

    return (
        <main class="p-4 md:px-6">
            <h1 class="text-2xl md:text-4xl text-center mb-6">
                {title}
            </h1>
            <Diff {...otherProps} />
            <WordMatchEventListener />
        </main>
    );
}
