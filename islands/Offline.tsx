import { IS_BROWSER } from "$fresh/runtime.ts";
import { useRef } from "preact/hooks";

export default function OfflineMessage() {
    const ref = useRef<HTMLDivElement | null>(null);

    if (IS_BROWSER) {
        globalThis.addEventListener("online", () => {
            ref.current?.classList.add("hidden");
        });

        globalThis.addEventListener("offline", () => {
            ref.current?.classList.remove("hidden");
        });

        if (navigator.onLine) {
            ref.current?.classList.add("hidden");
        } else {
            ref.current?.classList.remove("hidden");
        }
    }
    return (
        <div
            ref={ref}
            id="offline-message"
            class="sticky top-0 z-30 bg-white hidden"
        >
            <p class="text-center text-slate-950">
                You've lost internet connection. Some pages might not load.
            </p>
        </div>
    );
}
