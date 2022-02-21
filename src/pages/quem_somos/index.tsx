import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import Head from "next/head";
import { EntreContato } from "../../components/EntreContato";
import FooterComponent from "../../components/Footer";
import FirstSection from "./FirstSection";
import FiveSection from "./FiveSection";
import FourthSection from "./FourthSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

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
                <title>Quem somos | collormaq</title>
                <meta property="og:quem_somos" content="A Collormaq converte etiquetas, rótulos adesivos e bobinas térmicas desde 2003, buscando a cada ano, aperfeiçoamento de nossos serviços e produtos." key="quem_somos" />
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