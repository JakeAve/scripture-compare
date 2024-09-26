export default function Footer() {
    return (
        <footer class="bg-slate-500 dark:bg-slate-700 text-slate-50 pt-12 pb-10 px-4 md:px-6 flex flex-col items-center">
            <span class="text-center">
                © {new Date().getFullYear()} scripturecompare.org
            </span>
            <span class="text-center mt-2">
                Not an official publication of the Church of Jesus Christ of
                Latter-day Saints
            </span>
        </footer>
    );
}
