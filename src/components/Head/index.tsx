import Head from "next/head";
import { HeadProps } from "../../interfaces/HeadProps";

export function HeadComponent({ canonicalLink, description, title, ogTitle, ogUrl, icon='/favicon.ico' }: HeadProps) {
    return (
        <Head>
            <link rel="shortcut icon" type="image" href={icon} />
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalLink} />
            <meta property="og:title" content={ogTitle} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={ogUrl} />
            <title>{title}</title>
        </Head>
    )
}