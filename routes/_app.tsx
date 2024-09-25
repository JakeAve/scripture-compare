import { type PageProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
export default function App({ Component }: PageProps) {
  return (
    <html lang="en" class="bg-slate-500">
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
      <body class="bg-slate-500">
        <div class="relative bg-slate-50 text-slate-800 min-h-screen">
          <Header />
          <Component />
          <Footer />
        </div>
      </body>
    </html>
  );
}
