import { Box, useBreakpointValue } from "@chakra-ui/react";
import Head from "next/head";
import { FristSectionFiles } from "../../components/Files/FristSectionFiles";

import FooterComponent from "../../components/Footer";
import Header from "../../components/Header";

export default function Contato() {
    const isWideVersion = useBreakpointValue({
        base: false,
        sm: false,
        md: false,
        lg: true
    });


    return (
        <>
            <Head>
                <title>Arquivos | Collormaq</title>
                <link rel="canonical" href="https://www.collormaq.com/arquivos" />
                <meta name="description" content="Collormaq esta presente em Manaus, Boa Vista e Porto Velho, faça-nos uma visita." />
                <meta property="og:title" content="Collormaq - Fale Conosco, estamos presentes em Manaus, Boa Vista e Porto Velho" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.collormaq.com/arquivos" />
            </Head>
            <Box>
                <Header color={'#000'} isWideVersion={true}/>
                <FristSectionFiles />
                <FooterComponent isWideVersion={isWideVersion} />
            </Box>

        </>

    )
}