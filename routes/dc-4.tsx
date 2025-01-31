import { PageProps } from "$fresh/server.ts";
import { DiffPage } from "../components/DiffPage.tsx";
import HeadElement from "../components/HeadElement.tsx";
import manuscript from "../data/scriptures/dc-4/manuscript.json" with {
  type: "json",
};
import dc5 from "../data/scriptures/dc-4/dc-4.json" with {
  type: "json",
};

export default function Page(props: PageProps) {
  return (
    <>
      <HeadElement
        pageProps={props}
        author="Scripture Compare"
        title="Doctrine and Covenants 4"
        imgPath="writing-in-notebook"
        tags={[
          "Joseph Smith",
          "Doctrine and Covenants",
          "Book of Mormon",
          "Joseph Smith Sr.",
        ]}
        snippet="Compare the oldest exact manuscript with the modern text of Doctrine and Covenants 4"
      />
      <DiffPage
        title="Doctrine and Covenants 4"
        book1="Revelation, February 1829"
        book2="Doctrine and Covenants 4 (Online)"
        diffs={[{ compare1: manuscript, compare2: dc5 }]}
      />
    </>
  );
}
