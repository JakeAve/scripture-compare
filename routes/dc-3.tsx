import { PageProps } from "$fresh/server.ts";
import { DiffPage } from "../components/DiffPage.tsx";
import HeadElement from "../components/HeadElement.tsx";
import manuscript from "../data/scriptures/dc-3/manuscript.json" with {
  type: "json",
};
const [firstBit, secondBit, ...rest] = manuscript;
import dc5 from "../data/scriptures/dc-3/dc-3.json" with {
  type: "json",
};

export default function Page(props: PageProps) {
  return (
    <>
      <HeadElement
        pageProps={props}
        author="Scripture Compare"
        title="Doctrine and Covenants 3"
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
        title="Doctrine and Covenants 3"
        book1="Revelation Book 1"
        book2="Doctrine and Covenants 3 (Online)"
        diffs={[{ compare1: [firstBit, secondBit], compare2: [] }, {
          compare1: rest,
          compare2: dc5,
        }]}
      />
    </>
  );
}
