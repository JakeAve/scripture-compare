import { IS_BROWSER } from "$fresh/runtime.ts";
import { signal } from "@preact/signals";
import { useRef } from "preact/hooks";

const lastScroll = signal(0);

export default function Header() {
    const headerRef = useRef<null | HTMLElement>(null);

    if (IS_BROWSER) {
        if (location.pathname !== "/") {
            globalThis.addEventListener("scroll", () => {
                if (lastScroll.value < globalThis.scrollY) {
                    headerRef.current?.classList.add("scale-y-0");
                } else {
                    headerRef.current?.classList.remove("scale-y-0");
                }

                lastScroll.value = globalThis.scrollY;
            }, { passive: true });
        }
    }

    return (
        <header
            ref={headerRef}
            class="sticky ease-out duration-300 origin-top z-20 top-0 bg-slate-500 dark:bg-slate-700 px-4 md:px-6 py-2 shadow-md flex justify-between items-center gap-4"
        >
            <div>
                <a
                    class="text-slate-50"
                    href="/"
                    aria-label="Home"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height={22}
                        viewBox="0 -960 960 960"
                        width={22}
                        class="hover:bg-slate-600"
                        fill="currentColor"
                    >
                        <path d="M324-96q-54.69 0-93.34-38.66Q192-173.31 192-228v-504q0-54.69 38.66-93.34Q269.31-864 324-864h444v575q-25 0-42.5 17.91t-17.5 43.5q0 25.59 17.5 43.09Q743-167 768-167v71H324Zm-60-250q14-7 28.5-10.5T324-360h12v-432h-12q-25 0-42.5 17.5T264-732v386Zm144-14h288v-432H408v432Zm-144 14v-446 446Zm60 178h326q-7-14-10.5-28t-3.5-31.27q0-16.25 4-31.49Q644-274 651-288H324q-26 0-43 17.5T264-228q0 26 17 43t43 17Z" />
                    </svg>
                </a>
            </div>
            <div class="flex gap-4 items-center">
                <a
                    class="text-slate-50"
                    href="/about"
                    aria-label="Help"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height={22}
                        viewBox="0 -960 960 960"
                        width={22}
                        class="hover:bg-slate-600"
                        fill="currentColor"
                    >
                        <path d="M480-240q20 0 34-14t14-34q0-20-14-34t-34-14q-20 0-34 14t-14 34q0 20 14 34t34 14Zm-36-153h73q0-37 6.5-52.5T555-485q35-34 48.5-58t13.5-53q0-55-37.5-89.5T484-720q-51 0-88.5 27T343-620l65 27q9-28 28.5-43.5T482-652q28 0 46 16t18 42q0 23-15.5 41T496-518q-35 32-43.5 52.5T444-393Zm36 297q-79 0-149-30t-122.5-82.5Q156-261 126-331T96-480q0-80 30-149.5t82.5-122Q261-804 331-834t149-30q80 0 149.5 30t122 82.5Q804-699 834-629.5T864-480q0 79-30 149t-82.5 122.5Q699-156 629.5-126T480-96Zm0-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z" />
                    </svg>
                </a>
                <a
                    href="https://github.com/JakeAve/scripture-compare"
                    target="_blank"
                    rel="noopener"
                    title="Github"
                    aria-label="Github"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                        height={20}
                        width={20}
                        class="text-slate-50 fill-current hover:bg-slate-600"
                    >
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        {" "}
                    </svg>
                </a>
            </div>
        </header>
    );
}
