import { Box, useBreakpointValue } from "@chakra-ui/react";
import Head from "next/head";

import { EntreContato } from "../../components/EntreContato";
import FooterComponent from "../../components/Footer";
import Header from "../../components/Header";
import { FirstSectionReading } from "../../components/Reading/FirstSectionReading";

export default function Leitura() {
    const isWideVersion = useBreakpointValue({
        base: false,
        sm: false,
        md: false,
        lg: true
    });

    return (
        <>
            <Head>
                <title>Leitura | Collormaq</title>
                <link rel="canonical" href="https://www.collormaq.com/leitura " />
                <meta name="description" content="Collormaq esta presente em Manaus, Boa Vista e Porto Velho, faça-nos uma visita." />
                <meta property="og:title" content="Collormaq - Fale Conosco, estamos presentes em Manaus, Boa Vista e Porto Velho" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.collormaq.com/leitura" />
            </Head>
            <Box>
                <Header color={'#000'} bg={'#414181'} isWideVersion={true}/>
                <FirstSectionReading />
                <EntreContato />
                <FooterComponent isWideVersion={isWideVersion} />
            </Box>

        </>

    )
}