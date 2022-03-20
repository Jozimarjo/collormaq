import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import Head from "next/head";
import { EntreContato } from "../../components/EntreContato";
import FooterComponent from "../../components/Footer";
import { FirstSection } from "../../components/Quem_Somos/FirstSection";
import { FiveSection } from "../../components/Quem_Somos/FiveSection";
import { FourthSection } from "../../components/Quem_Somos/FourthSection";
import { SecondSection } from "../../components/Quem_Somos/SecondSection";
import { ThirdSection } from "../../components/Quem_Somos/ThirdSection";

export default function QuemSomos() {
    const comp = {
        title: 'Nossa Empresa',
        subTitle: {
            paragraph: [
                'A Collormaq converte etiquetas, rótulos adesivos e bobinas térmicas desde 2003, buscando a cada ano, aperfeiçoamento de nossos serviços e produtos.',
                'Nossos produtos giram em torno de variantes como, filmes/bopp ou couchê/papéis com ou sem adesivo, enquanto a aplicabilidade atende diversos setores.']
        }
    }

    const isWideVersion = useBreakpointValue({
        base: false,
        sm: false,
        md: false,
        lg: true
    });

    return (
        <>
            <Head>
                <title>Quem somos | Collormaq</title>
                {/* <meta property="og:quem_somos" content="A Collormaq converte etiquetas, rótulos adesivos e bobinas térmicas desde 2003, buscando a cada ano, aperfeiçoamento de nossos serviços e produtos." key="quem_somos" /> */}
                <link rel="canonical" href="https://www.collormaq.com/quem_somos" />
                <meta name="description" content="A Collormaq converte etiquetas, rótulos adesivos e bobinas térmicas desde 2003, buscando a cada ano, aperfeiçoamento de nossos serviços e produtos." />
                <meta property="og:title" content="Collormaq - quem somos" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.collormaq.com/quem_somos" />
                <meta name="google-site-verification" content="IBpeO4m3Ruy6MtnHmyWBG8gplHBezmCq7FTXN6KzOkY" />
            </Head>
            <FirstSection title={comp.title} subTitle={comp.subTitle} isWideVersion={isWideVersion} />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <FiveSection />
            <EntreContato />
            <FooterComponent isWideVersion={isWideVersion} />
        </>

    )
}