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
          content="Compare scripture passages versions side-by-side"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Scripture Compare</title>
        <link rel="stylesheet" href="/styles.css" />
        <link
          crossorigin="use-credentials"
          rel="manifest"
          href="/manifest.json"
        />
        <script type="module" src="/register.js" />
      </head>
      <body class="bg-slate-500 dark:bg-slate-700">
        <div class="relative bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 min-h-screen">
          <Header />
          <OfflineMessage />
          <Component />
          <Footer />
        </div>
      </body>
    </html>
  );
}
