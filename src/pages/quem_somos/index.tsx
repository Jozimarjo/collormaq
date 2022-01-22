import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import FirstSection from "./FirstSection";

export default function QuemSomos() {
    const comp = {
        title: 'Nossa Empresa',
        subTitle: {
            paragraph: [
                'A Collormaq converte etiquetas, rótulos adesivos e bobinas térmicas desde 2003, buscando a cada ano, aperfeiçoamento de nossos serviços e produtos.',
                'Nossos produtos giram em torno de variantes como, filmes/bopp ou couchê/papéis com ou sem adesivo, enquanto a aplicabilidade atende diversos setores.']
        }
    }


    let isWideVersion = useBreakpointValue({
        base: false,
        sm: false,
        md: false,
        lg: true
    });
    return (
        <FirstSection title={comp.title} subTitle={comp.subTitle} isWideVersion={isWideVersion} />

    )
}