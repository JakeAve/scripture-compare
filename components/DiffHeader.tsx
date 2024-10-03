import { JSX } from "preact/jsx-runtime";

interface Props extends JSX.HTMLAttributes<HTMLHeadingElement> {
}

export default function DiffHeader(props: Props) {
    const { children } = props;

    return (
        <h2 class="diff-header will-change-top transition-all duration-300 text-xl md:text-2xl text-center sticky top-9 bg-slate-50 dark:bg-slate-900 padding-4">
            {children}
        </h2>
    );
}
