export default function About() {
    return (
        <main class="mx-auto max-w-xl p-4 flex flex-col gap-4 text-lg">
            <h1 class="text-center text-4xl">About</h1>
            <h2 class="text-3xl">What</h2>
            <p>
                The Scripture Compare tool highlights the specific differences
                in versions of similar texts. Any change in capitalization,
                spelling, punctuation, wording, added phrases or removed changes
                is noted by adding a highlight. Any words that are the same in
                both versions of the text is displayed with no highlight. It
                does not compare verse or chapter numbers, but exclusively
                compares the sacred texts.
            </p>
            <h2 class="text-3xl">How</h2>
            <p>
                This tool implements a simple Longest Common Subsequence (LCS)
                algorithm. After comparing the texts, it recreates both texts,
                highlighting the differences and printing the similarities it
                found, while re-adding the chapters and verses (pages and lines
                for manuscripts). All results are placed in a two column layout
                with the left column representing one text and the right side
                representing the other. It attempts to match the rows relatively
                close to where the same text appears on the left and right side,
                however this is not always the case. This is an ongoing refining
                process.
            </p>
            <p>
                I have been exposed to this type of text comparison on a daily
                basis in my career as a software engineer, where we use similar
                tools to compare changes in code files. I have found the side by
                side comparison helps me notice any changes without taking away
                my ability to understand the context of both files.
            </p>
            <h2 class="text-3xl">Why</h2>
            <p>
                I've always been interested in the Isaiah chapters of the Book
                of Mormon and wondered about their significance. If the text was
                already included in the Bible, why would the Lord inspire Book
                of Mormon prophets like Nephi, Jacob and Alma to painstakingly
                copy entire chapters into their records? What was so important
                about it that Joseph Smith, Oliver Cowdery, Egbert Grandin, and
                many other editors would have to re-copy the text into the Book
                of Mormon and millions of readers would be invited re-read it?
                The Book of Mormon records that Jesus Christ Himself quoted the
                entirety of Isaiah 54 and many other Bible passages in His visit
                to the Americas. The Savior commanded His ancient American
                Church to study Isaiah: "Yea, a commandment I give unto you that
                ye search these things diligently; for great are the words of
                Isaiah." 3 Nephi 23:1.
            </p>
            <p>
                There are many insights that I have gleaned from comparing the
                scriptural texts. For example in Isaiah 2:6 (2 Nephi 12:6 ), the
                King James (KJV) text says the Lord is abandoning His people
                because they "<span class="italic">are</span>{" "}
                soothsayers" (magicians, black magic workers). The astute reader
                will note that the words in italics, like this instance of the
                word{" "}
                "<span class="italic">are</span>", in the KJV are words not
                found in the Hebrew or Greek manuscripts, but are words added to
                help the grammar make more sense in English. If you look at the
                passage in the Hebrew manuscripts, you'll notice that the word
                for soothsayers (וְעֹֽנְנִ֖ים) is a plural noun and does not
                necessarily express "they are," although in many contexts the
                "הֵם" (they are) can be dropped. Technically it's ambiguous. This
                is apparent when comparing some English translations like the
                KJV, the New International Version (NIV) and the English
                Standard Version (ESV). Some versions say they "are
                soothsayers", the ESV says only "soothsayers" without explicitly
                implying{" "}
                <span class="italic">are</span>. However in the Book of Mormon,
                the prophet Joseph Smith dictated that the Lord is abandoning
                His people because they "<span class="font-bold">hearken</span>
                {" "}
                unto soothsayers" (2 Nephi 12:6). This means that the Lord is
                not only displeased when someone becomes a soothsayer, but even
                hearkening to a soothsayer is not in harmony with His will. Is
                there a possibility the Brass Plates included some version of
                the word (שָׁמֵ֔עוּ / they hearkened) that is no longer found in our
                Hebrew manuscripts? Perhaps. But it's an insight I would have
                missed if I did not actively compare the scriptural texts.
            </p>
            <p>
                During the 2024 Come Follow Me reading of the Book of Mormon, I
                found myself frequently going between the Book of Mormon
                chapters, the Old Testament, Hebrew texts and Royal Skousen's
                "The Book of Mormon: The Earliest Text." I wondered if there was
                an existing resource to compare the different editions, but I
                didn't find a tool that I was satisfied with. I found it
                difficult to get much out of lists of differences because they
                were taken far out of the context of the scripture passages. For
                example{" "}
                <a
                    href="https://rsc.byu.edu/isaiah-prophets/isaiah-variants-book-mormon"
                    target="_blank"
                    class="underline"
                >
                    this paper by John A. Tvedtnes
                </a>{" "}
                is well researched and thorough, however I personally feel
                removed from the text and it would be nice to have a tool to
                follow along with the passages he quotes. Also many lists don't
                take into account in which edition of the Book of Mormon certain
                updates were published. For example Joseph Smith added the
                phrase "out of the waters of baptism" to 1 Nephi 20:1 (Isaiah
                48:1) for the 1840 edition, which suggests that although the
                passage is prophetic, it was probably not found in the Brass
                Plates.
            </p>
            <p>
                I wanted a tool to be able to see small comparisons that didn't
                take me out of the flow of my normal scripture study. I figured
                I wasn't the only person that enjoys comparing the texts and
                seeing the harmony across the word of the Lord. You'll notice as
                you scroll through some of these passages that God's message to
                His children is harmonious. Even the texts He has inspired to be
                written by multiple people on multiple occasions are typically
                word for word the same.
            </p>
            <h2 class="text-3xl">Plans for the Future</h2>
            <p>
                I think this project has a few more things to offer. As
                referenced before, I would like to be able to compare different
                editions of the Book of Mormon with their corresponding Bible
                verses. Right now most of the Biblical comparison is with the
                most up-to-date edition of the Book of Mormon found at the
                official{"  "}
                <a
                    href="https://www.churchofjesuschrist.org/study/scriptures?lang=eng"
                    target="_blank"
                    class="underline"
                >
                    website of the Church of Jesus Christ of Latter-day Saints
                </a>. I know that BYU and Royal Skousen (who is my inspiration)
                have published a word crunching tool that interested parties can
                download for free at the{" "}
                <a
                    href="https://wordcruncher.com/state-of-WCr"
                    target="_blank"
                    class="underline"
                >
                    WordCruncher website
                </a>{" "}
                and I've wondered what it would take to bring that technology to
                the web. I have also started looking at the original Book of
                Mormon manuscript transcripts published at the{" "}
                <a
                    href="https://www.josephsmithpapers.org/"
                    target="_blank"
                    class="underline"
                >
                    Joseph Smith Papers Website
                </a>{" "}
                to start comparing the original manuscripts with our current
                published version. I think these comparisons can put many people
                at ease who might be anxious about Book of Mormon textual
                changes, while taking the oxygen out of faithless assertions and
                falsehoods claimed by naysayers.
            </p>
            <h2 class="text-3xl">Testimony</h2>
            <p>
                No forward from a member of the Church of Jesus Christ of
                Latter-day Saints would be complete without their testimony,
                which I would like to share:
            </p>
            <p>
                I know that the work of the restoration of the Church of Jesus
                Christ in the latter days is inspired and mandated by God and
                Christ Themselves. I know that the Word of God from the
                scriptures is true and will lead any person to the way of
                salvation through the atoning sacrifice made by Jesus Christ. I
                know Joseph Smith was a prophet called of God and inspired to
                bring many sacred scriptures to the world, including the Book of
                Mormon. He was a righteous, just and honest man who was
                assassinated by cowards and was received into the bosom of His
                Master, Jesus Christ. Today his successors as Apostles,
                Prophets, Seers and Revelators are the leadership of the Church
                of Jesus Christ of Latter-day Saints. I know that Jesus Christ
                was slain for the sins of the world and rose on the third day.
                Jesus Christ lives. I know He is the Way, the Truth and the Life
                and that no man can come to the Father except through Him. We
                will stand accountable to Him, the Judge of the quick and dead,
                for our thoughts an actions. May we repent and be purified and
                sanctified through His grace, made possible by His atonement.
            </p>
            <p>I share this in the Holy Name of Jesus Christ. Amen.</p>
            <p>—Jake Avery</p>
        </main>
    );
}
