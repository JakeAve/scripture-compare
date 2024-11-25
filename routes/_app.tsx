import { type PageProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";
import Header from "../islands/Header.tsx";
import OfflineMessage from "../islands/Offline.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html lang="en" class="bg-slate-500 dark:bg-slate-700">
      <head>
        <meta charset="utf-8" />
        <meta
          name="description"
          content="Level up your study and compare passages from the scriptures side-by-side, including the Book of Mormon Isaiah chapters, Joseph Smith Matthew and the words of Christ in His ancient American ministry."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Scripture Compare</title>
        <link rel="stylesheet" href="/styles.css" />
        <link
          crossorigin="use-credentials"
          rel="manifest"
          href="/manifest.json"
        />
        {Deno.env.get("DENO_ENV") !== "development" && (
          <script type="module" src="/register.js" />
        )}
      </head>
      <body class="bg-slate-500 dark:bg-slate-700  selection:bg-slate-300 selection:text-slate-900">
        <div class="relative bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 min-h-screen">
          <OfflineMessage />
          <Header />
          <Component />
          <Footer />
        </div>
      </body>
    </html>
  );
}
