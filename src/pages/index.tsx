import { Flex, useBreakpointValue } from "@chakra-ui/react";
import Head from "next/head";
import { FirstSection } from "../components/Home/FirstSection";
import { FiveSection } from "../components/Home/FiveSection";
import { FourthSection } from "../components/Home/FourthSection";
import { SecondSection } from "../components/Home/SecondSection";
import { ThirdSection } from "../components/Home/ThirdSection";

export default function Home() {
    const isWideVersion = useBreakpointValue({
        base: false,
        sm: false,
        md: false,
        lg: true
    });

    return (
        <>
            <Head>
                <title>Solução em Etiquetas, Bobinas, rótulos, balanças e impressoras </title>
                <meta name="description" content="Trabalhamos com etiquetas, rótulos personalizados, bobinas Térmicas, ribbons, etiquetadoras e impressoras Térmicas. Solicite seu orçamento." />
                <meta property="og:title" content="Collormaq - Solução em Etiquetas e Bobinas" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.collormaq.com" />
                <link rel="canonical" href="https://www.collormaq.com" />
                <meta name="google-site-verification" content="b6yqx-muTE0IfgKmtACFZ13OnkdFXl2f1MjomKWpNzk" />
                
            </Head>
            <Flex w='100%' h='100%' direction='column'>
                <FirstSection isWideVersion={isWideVersion} />
                <SecondSection />
                <ThirdSection />
                <FourthSection />
                <FiveSection isWideVersion={isWideVersion} />
            </Flex>
        </>
    )
}