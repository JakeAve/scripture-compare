import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>text-compare</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <div class="relative bg-slate-50 text-slate-800 min-h-screen">
          <header class="sticky top-0 bg-slate-500 px-2 py-2">
            <a class="text-slate-50" href="/">Scripture Compare</a>
          </header>
          <Component />
        </div>
      </body>
    </html>
  );
}
