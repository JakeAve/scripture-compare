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
        snippet="Level up your study and compare passages from the scriptures side-by-side, including the Book of Mormon Isaiah chapters, Joseph Smith Matthew and the words of Christ in His ancient American ministry."
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
        <h1 class="font-display relative w-full mix-blend-plus-lighter text-5xl md:text-9xl text-center text-slate-500 z-10">
          Scripture Compare
        </h1>
        <Picture
          size="xl"
          imagePath="imgs/two-scrolls"
          width={1800}
          height={1024}
          blur={false}
          alt="A man holding a representation of the stick of Efrain and the stick of Judah"
          imgClass="absolute top-0 left-0 w-full contrast-75 brightness-75 dark:brightness-[.25] object-cover object-top h-full"
        />
      </div>
      <div class="font-serif italic text-xlg text-center py-2 px-4">
        <blockquote cite="https://www.churchofjesuschrist.org/study/scriptures/ot/ezek/37?lang=eng&id=p17#p17">
          <p>
            And join them one to another into one stick; and they shall become
            one in thine hand.
          </p>
        </blockquote>
        <p>
          —<cite>Ezekiel 37:17</cite>
        </p>
      </div>
      <div class="px-4 pt-4 py-8 mx-auto max-w-4xl grid gap-4 lg:gap-6 justify-center items-start grid-cols-1 md:grid-cols-2">
        <div class="flex flex-col gap-2">
          <h2 class="text-xl md:text-2xl text-center">
            Isaiah and the Book of Mormon
          </h2>
          <ul class="flex flex-col gap-2 bg-slate-100 dark:bg-slate-800 shadow-md p-6 rounded-md">
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
            <li>
              <a class="underline" href="/isaiah-53">
                Isaiah 53 and Mosiah 14
              </a>
            </li>
            <li>
              <a class="underline" href="/isaiah-54">
                Isaiah 54 and 3 Nephi 22
              </a>
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-2">
          <h2 class="text-xl md:text-2xl text-center">
            KJV and the Book of Mormon
          </h2>
          <ul class="flex flex-col gap-2 bg-slate-100 dark:bg-slate-800 shadow-md p-6 rounded-md">
            <li>
              <a class="underline" href="/sermon-on-the-mount">
                Matthew 5-6 and 3 Nephi 12-14 (Sermon on the Mount)
              </a>
            </li>
            <li>
              <a class="underline" href="/3-nephi-20">
                3 Nephi 20 (Jesus expands on Micah, Acts, Isaiah)
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
              <a class="underline" href="/mark-16">
                Mark 16 and Mormon 9
              </a>
            </li>
            <li>
              <a class="underline" href="/charity">
                1 Corinthians 13 and Moroni 7 (Charity)
              </a>
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-2">
          <h2 class="text-xl md:text-2xl text-center">
            Writings and Revelations of Joseph Smith
          </h2>
          <ul class="flex flex-col gap-2 bg-slate-100 dark:bg-slate-800 shadow-md p-6 rounded-md">
            <li>
              <a class="underline" href="/malachi-4">
                Malachi 4 and Angel Moroni
              </a>
            </li>
            <li>
              <a class="underline" href="/dc-3">
                Doctrine and Covenants 3
              </a>
            </li>
            <li>
              <a class="underline" href="/dc-4">
                Doctrine and Covenants 4
              </a>
            </li>
            <li>
              <a class="underline" href="/dc-5">
                Doctrine and Covenants 5
              </a>
            </li>
            <li>
              <a class="underline" href="/dc-27">
                Doctrine and Covenants 27
              </a>
            </li>
            <li>
              <a class="underline" href="/joseph-smith-matthew">
                Matthew 23-24 and Joseph Smith Matthew
              </a>
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-2">
          <h2 class="text-xl md:text-2xl text-center">
            Hebrew Codices
          </h2>
          <ul class="flex flex-col gap-2 bg-slate-100 dark:bg-slate-800 shadow-md p-6 rounded-md">
            <li>
              <a class="underline" href="/isaiah-aleppo-1-20">
                Isaiah 1-20 Aleppo and Leningrad Codices
              </a>
            </li>
            <li>
              <a class="underline" href="/isaiah-aleppo-21-40">
                Isaiah 21-40 Aleppo and Leningrad Codices
              </a>
            </li>
            <li>
              <a class="underline" href="/isaiah-aleppo-41-66">
                Isaiah 41-66 Aleppo and Leningrad Codices
              </a>
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-2">
          <h2 class="text-xl md:text-2xl text-center">
            Book of Mormon Manuscripts
          </h2>
          <ul class="flex flex-col gap-2 bg-slate-100 dark:bg-slate-800 shadow-md p-6 rounded-md">
            <li>
              <a
                class="underline"
                href="/om-1-nephi-chapter-1"
              >
                Original Book of Mormon Manuscript: 1 Nephi Chapter 1
              </a>
            </li>
            <li>
              <a
                class="underline"
                href="/om-1-nephi-chapter-2"
              >
                Original Book of Mormon Manuscript: 1 Nephi Chapter 2
              </a>
            </li>
            <li>
              <a
                class="underline"
                href="/om-1-nephi-chapter-3"
              >
                Original Book of Mormon Manuscript: 1 Nephi Chapter 3
              </a>
            </li>
            <li>
              <a
                class="underline"
                href="/om-1-nephi-chapter-4"
              >
                Original Book of Mormon Manuscript: 1 Nephi Chapter 4
              </a>
            </li>
            <li>
              <a
                class="underline"
                href="/om-1-nephi-chapter-5"
              >
                Original Book of Mormon Manuscript: 1 Nephi Chapter 5
              </a>
            </li>
            <li>
              <a
                class="underline"
                href="/om-1-nephi-chapter-6"
              >
                Original Book of Mormon Manuscript: 1 Nephi Chapter 6
              </a>
            </li>
            <li>
              <a
                class="underline"
                href="/om-1-nephi-chapter-7"
              >
                Original Book of Mormon Manuscript: 1 Nephi Chapter 7
              </a>
            </li>
            <li>
              <a
                class="underline"
                href="/om-2-nephi-chapter-1"
              >
                Original Book of Mormon Manuscript: 2 Nephi Chapter 1
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
