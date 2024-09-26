import { IS_BROWSER } from "$fresh/runtime.ts";

export default function WordMatchEventListener() {
    if (IS_BROWSER) {
        const container = document.querySelector(
            "[data-diff-container]",
        ) as HTMLElement;
        container.addEventListener("click", (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target.dataset.wordMatch) {
                return;
            }
            const otherId = target.id.includes('a') ? target.id.replace(/a/, 'b') : target.id.replace(/b/, 'a');
            const otherEl = document.querySelector(`#${otherId}`) as HTMLElement;
            target.classList.toggle('bg-amber-200')
            otherEl.classList.toggle('bg-amber-200')
            target.classList.toggle('dark:bg-amber-900')
            otherEl.classList.toggle('dark:bg-amber-900')
        });
    }
    return <></>;
}
