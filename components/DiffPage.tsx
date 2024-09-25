import { Diff, DiffProps } from "./Diff.tsx";

interface Props extends DiffProps {
    title: string;
}

export function DiffPage(props: Props) {
    const { title, ...otherProps } = props;

    return (
        <main class="p-4">
            <h1 class="text-2xl md:text-4xl text-center mb-6">
                {title}
            </h1>
            <Diff {...otherProps} />
        </main>
    );
}
