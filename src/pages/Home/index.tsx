import { Flex, useBreakpointValue } from "@chakra-ui/react";
import Head from "next/head";
import FirstSection from "./FirstSection";
import FiveSection from "./FiveSection";
import FourthSection from "./FourthSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

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