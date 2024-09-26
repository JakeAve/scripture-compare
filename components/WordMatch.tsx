import type { ComponentChildren } from "preact";

interface Props {
    id: string;
    children: ComponentChildren;
}

export default function WordMatch(props: Props) {
    const { children, id } = props;

    return <span data-word-match id={id}>{children}</span>;
}
