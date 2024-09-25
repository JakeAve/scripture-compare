import { Head } from "$fresh/runtime.ts";
import Picture from "../islands/Picture.tsx";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="px-4 py-8 mx-auto">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <Picture
            imagePath="imgs/liahona"
            alt="Nephi with the Liahona"
            size="xl"
            width={1800}
            height={1024}
            imgClass="object-cover h-64"
          />
          <h1 class="text-4xl font-bold mt-8">404 - Page not found</h1>
          <p class="my-4">
            The page you were looking for doesn't exist.
          </p>
          <a href="/" class="underline">Go back home</a>
        </div>
      </div>
    </>
  );
}
