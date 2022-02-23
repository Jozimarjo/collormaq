import { Flex, useBreakpointValue } from "@chakra-ui/react";
import Head from "next/head";
import { FirstSection } from "../../components/Home/FirstSection";
import { FiveSection } from "../../components/Home/FiveSection";
import { FourthSection } from "../../components/Home/FourthSection";
import { SecondSection } from "../../components/Home/SecondSection";
import { ThirdSection } from "../../components/Home/ThirdSection";

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
                <title>Home | collormaq - Solução em Etiquetas e Bobinas</title>
                <meta property="og:home" content="Solução em Etiquetas e Bobinas" key="home" />
                <meta name="description" content="Collormaq atua na area de Etiquetas e Rótulos personalizados para indústria e comércio. Bobinas Térmicas personalizadas. Ribbons, Etiquetadoras, Impressoras Térmicas etc." />
                <meta property="og:title" content="Collormaq - Solução em Etiquetas e Bobinas" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.collormaq.com/Home" />
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