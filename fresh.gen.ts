// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $index from "./routes/index.tsx";
import * as $isaiah_2_14 from "./routes/isaiah-2-14.tsx";
import * as $isaiah_50_52 from "./routes/isaiah-50-52.tsx";
import * as $joseph_smith_matthew from "./routes/joseph-smith-matthew.tsx";
import * as $malachi_3_4 from "./routes/malachi-3-4.tsx";
import * as $sermon_on_the_mount from "./routes/sermon-on-the-mount.tsx";
import * as $Counter from "./islands/Counter.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/index.tsx": $index,
    "./routes/isaiah-2-14.tsx": $isaiah_2_14,
    "./routes/isaiah-50-52.tsx": $isaiah_50_52,
    "./routes/joseph-smith-matthew.tsx": $joseph_smith_matthew,
    "./routes/malachi-3-4.tsx": $malachi_3_4,
    "./routes/sermon-on-the-mount.tsx": $sermon_on_the_mount,
  },
  islands: {
    "./islands/Counter.tsx": $Counter,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
