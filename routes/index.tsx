import { PageProps } from "$fresh/server.ts";
import HeadElement from "../components/HeadElement.tsx";
import Picture from "../islands/Picture.tsx";

export default function Home(props: PageProps) {
  return (
    <>
      <HeadElement
        pageProps={props}
        author="Scripture Compare"
        title="Scripture Compare"
        snippet="Compare the scriptures side-by-side"
        imgPath="two-scrolls"
        tags={[
          "Scriptures",
          "Book of Mormon",
          "Jesus Christ",
          "Church of Jesus Christ of Latter-day Saints",
          "Joseph Smith",
          "Bible",
          "Study",
        ]}
      />
      <div class="relative flex justify-center items-center h-24 md:h-48">
        <h1 class="relative w-full mix-blend-plus-lighter text-3xl md:text-7xl text-center text-slate-500 z-10">
          Scripture Compare
        </h1>
        <Picture
          size="xl"
          imagePath="imgs/two-scrolls"
          width={1800}
          height={1024}
          alt="A man holding a representation of the stick of Efrain and the stick of Judah"
          imgClass="absolute top-0 left-0 w-full contrast-75 brightness-75 object-cover object-top h-full"
        />
      </div>
      <blockquote class="italic text-center mt-2" cite="https://www.churchofjesuschrist.org/study/scriptures/ot/ezek/37?lang=eng&id=p17#p17">
        <p>
          And join them one to another into one stick; and they shall become one
          in thine hand
        </p>
      </blockquote>
      <p class="text-center">
        —<cite>Ezekiel 37:17</cite>
      </p>
      <div class="px-4 py-8 mx-auto max-w-4xl grid gap-4 lg:gap-6 justify-center items-start grid-cols-1 md:grid-cols-2">
        <div class="flex flex-col ">
          <h2 class="text-xl md:text-2xl text-center">
            Isaiah and the Book of Mormon
          </h2>
          <ul class="flex flex-col gap-2 bg-slate-100 shadow-md p-6 rounded-md">
            <li>
              <a class="underline" href="/isaiah-2-14">
                Isaiah 2-14 and 2 Nephi 12-24
              </a>
            </li>
            <li>
              <a class="underline" href="/isaiah-29">
                Isaiah 29 and 2 Nephi 27
              </a>
            </li>
            <li>
              <a class="underline" href="/isaiah-48-49">
                Isaiah 48-49 and 1 Nephi 20-21
              </a>
            </li>
            <li>
              <a class="underline" href="/isaiah-50-52">
                Isaiah 50-52 and 2 Nephi 7-8
              </a>
            </li>
          </ul>
        </div>
        <div class="flex flex-col ">
          <h2 class="text-xl md:text-2xl text-center">
            Book of Mormon Manuscripts
          </h2>
          <ul class="flex flex-col gap-2 bg-slate-100 shadow-md p-6 rounded-md">
            <li>
              <a
                class="underline"
                href="/original-book-of-mormon-manuscript-chapter-1"
              >
                Original Book of Mormon Manuscript Chapter 1
              </a>
            </li>
            <li>
              <a
                class="underline"
                href="/original-book-of-mormon-manuscript-chapter-2"
              >
                Original Book of Mormon Manuscript Chapter 2
              </a>
            </li>
          </ul>
        </div>
        <div class="flex flex-col ">
          <h2 class="text-xl md:text-2xl text-center">
            KJV and the Book of Mormon
          </h2>
          <ul class="flex flex-col gap-2 bg-slate-100 shadow-md p-6 rounded-md">
            <li>
              <a class="underline" href="/sermon-on-the-mount">
                Matthew 5-6 and 3 Nephi 12-13 (Sermon on the Mount)
              </a>
            </li>
            <li>
              <a class="underline" href="/micah-5">
                Micah 5 and 3 Nephi 21
              </a>
            </li>
            <li>
              <a class="underline" href="/malachi-3-4">
                Malachi 3-4 and 3 Nephi 24-25
              </a>
            </li>
            <li>
              <a class="underline" href="/charity">
                1 Corinthians 13 and Moroni 7 (Charity)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
