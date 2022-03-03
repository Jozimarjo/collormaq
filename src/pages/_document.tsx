import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {

    render() {
        return (
            <Html lang="pt">
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link rel="canonical" href="https://www.collormaq.com" />
                    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
                    <meta name="robots" content="all" />
                    {/* <meta name="google-site-verification" content="IBpeO4m3Ruy6MtnHmyWBG8gplHBezmCq7FTXN6KzOkY" /> */}
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                        crossOrigin="anonymous"
                    />


                </Head>
                <body className='next-body'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}