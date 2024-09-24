import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta
          name="description"
          content="Compare scripture passages versions side-by-side"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Scripture Compare</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <div class="relative bg-slate-50 text-slate-800 min-h-screen">
          <header class="sticky z-20 top-0 bg-slate-500 px-2 py-2 shadow-md">
            <a class="text-slate-50" href="/">Scripture Compare</a>
          </header>
          <Component />
          <footer class="bg-slate-500 text-slate-50 pt-12 pb-10 p-x-4 flex flex-col items-center">
            <span class="text-center">
              © {new Date().getFullYear()} scripturecompare.org
            </span>
            <span class="text-center mt-2">
              Not an official publication of the Church of Jesus Christ of
              Latter-day Saints
            </span>
          </footer>
        </div>
      </body>
    </html>
  );
}
