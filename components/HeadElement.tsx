import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";

interface HeadElement {
    pageProps: PageProps;
    author: string;
    title: string;
    snippet: string;
    imgPath: string;
    tags: string[];
}

export default function HeadElement(props: HeadElement) {
    const { pageProps, author, title, snippet, imgPath, tags } = props;

    const img = `/imgs/${imgPath}.jpeg`;

    return (
        <Head>
            <title>{title}</title>
            <meta
                name="description"
                content={snippet}
            />
            <meta name="keywords" content={tags.join(",")} />
            <meta name="author" content={author} />
            <meta name="robots" content="index, follow" />
            {/* Facebook Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={pageProps.url.href} />
            <meta
                property="og:image"
                content={img}
            />
            <meta property="og:description" content={snippet} />
            {/* Twitter Card */}
            <meta name="twitter:title" content={title} />
            <meta
                name="twitter:description"
                content={snippet}
            />
            <meta
                name="twitter:image"
                content={img}
            />
            <meta name="twitter:card" content="summary_large_image"></meta>
        </Head>
    );
}
