import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function FiveSection() {
    return (
        <Box w='100%' mb='230px'>
            <Flex w='100%' direction='column' align={{ base: 'flex-start', sm: 'center' }}>
                <Text my='8' fontWeight='bold' fontSize={{ base: '28', sm: '48' }} color='#414181'>
                    Produtos que desenvolvemos
                </Text>
                <Text mb='16' fontSize='16' width={{ base: '100%', lg: '484px' }} maxWidth='31em' color='#262626'>
                    A Collormaq o ajudará a transformar suas idéais em realidade e dar o destaque que seu produto merece. Confira abaixo:
                </Text>
            </Flex>

            <Flex direction="column" gap={{ base: '136px', lg: "236px" }}>

                <Flex gap={{ base: '30px', lg: '5%' }} direction={{ base: "column", md: 'row' }}>
                    <Box
                        backgroundColor='#414181'
                        width={{ base: '80%', md: '885px' }}
                        height='202px'
                        borderRadius='0px 10px 10px 0px'
                        display='flex'
                        justifyContent="flex-end"
                        order={{ base: 2, md: 1 }}
                        position='relative'>

                        <Image position='absolute'
                            top={{ base: '28%', md: '21%', lg: '18%' }}
                            right='10%'
                            height='235px'
                            width={{ base: '250px', sm: "300px", md: '300px', lg: '397px' }}
                            src='/images/products/etiquetas-lg.svg'></Image>
                    </Box>

                    <Box
                        flex="1"
                        height='202px'
                        display='flex'
                        flexDirection="column"
                        order={{ base: 1, md: 2 }}
                        pr='8'
                        pl='8'
                        justifyContent="space-evenly"
                        alignItems="flex-start">
                        <Text fontSize='36' fontWeight="bold" color="#262626">Etiquetas</Text>
                        <Text fontSize='16' color="#262626" lineHeight='20px' minWidth={{ base: 'none', md: '350px', lg: "410px" }} maxWidth={{ base: 'none', md: '350px', lg: "564px" }}>
                            Soluções em etiquetas adesivas e rótulos para indústria, comércio e serviço.
                            Fornecemos etiquetas em papéis e filmes especiais (bopp, void, couchê, térmico, poliéster, entre outros).
                            Etiquetas em branco ou pré-impressas, ou para impressoras térmicas.
                        </Text>
                    </Box>

                </Flex>

                <Flex gap={{ base: '30px', lg: '5%' }} direction={{ base: "column", md: 'row' }}>
                    <Box
                        backgroundColor='#414181'
                        width={{ base: '80%', md: '885px' }}
                        height='202px'
                        borderRadius='10px 0px 0px 10px'
                        display='flex'
                        justifyContent="flex-end"
                        alignSelf="flex-end"
                        order={{ base: 2, md: 2 }}
                        position='relative'>

                        <Image position='absolute'
                            flex={{ base: 0, lg: 1 }}
                            top={{ base: '28%', md: '21%', lg: '18%' }}
                            left={{ base: '5%', lg: '10%' }}
                            height='235px'
                            width={{ base: '260px', sm: "300px", md: '300px', lg: '397px' }}
                            src='/images/products/rotulos-lg.svg'></Image>
                    </Box>

                    <Box
                        flex="1"
                        height='202px'
                        display='flex'
                        flexDirection="column"
                        order={{ base: 1, md: 1 }}
                        justifyContent="space-evenly"
                        pr='8'
                        pl='8'
                        maxWidth='885px'
                        alignItems="self-end"
                    >
                        <Box display='flex' flexDirection="column">
                            <Text fontSize='36' fontWeight="bold" color="#262626">Rótulos</Text>
                            <Text fontSize='16' color="#262626" lineHeight='20px' minWidth={{ base: 'none', md: '350px', lg: "410px" }} maxWidth={{ base: 'none', md: '350px', lg: "564px" }}>
                                Rótulos adesivos produzidos em diversos materiais, atendendo médias e grandes tiragens com excelente nível de qualidade de impressão.
                            </Text>
                        </Box>
                    </Box>

                </Flex>

                <Flex gap={{ base: '30px', lg: '5%' }} direction={{ base: "column", md: 'row' }}>
                    <Box
                        backgroundColor='#414181'
                        width={{ base: '80%', md: '885px' }}
                        height='202px'
                        borderRadius='0px 10px 10px 0px'
                        display='flex'
                        justifyContent="flex-end"
                        order={{ base: 2, md: 1 }}
                        position='relative'>

                        <Image position='absolute'
                            top={{ base: '28%', md: '21%', lg: '18%' }}
                            right='10%'
                            height='235px'
                            width={{ base: '250px', sm: "300px", md: '300px', lg: '397px' }}
                            src='/images/products/mockup_bobina_personalizada-lg.svg'></Image>
                    </Box>

                    <Box
                        flex="1"
                        height='202px'
                        display='flex'
                        flexDirection="column"
                        order={{ base: 1, md: 2 }}
                        pr='8'
                        pl='8'
                        justifyContent="space-evenly"
                        alignItems="flex-start">
                        <Text fontSize='36' fontWeight="bold" color="#262626">Bobinas</Text>
                        <Text fontSize='16' color="#262626" lineHeight='20px' minWidth={{ base: 'none', md: '350px', lg: "410px" }} maxWidth={{ base: 'none', md: '350px', lg: "564px" }}>
                            Oferecemos ampla linha de bobinas térmicas para Relógio de Ponto, Ponto de Venda, Maquineta de Cartão de Crédito, personalizamos sua bobina com sua marca e garantimos a procedência de nosso material com fornecedores certificados, Venha Conferir!
                        </Text>
                    </Box>

                </Flex>

                <Flex gap={{ base: '30px', lg: '5%' }} direction={{ base: "column", md: 'row' }}>
                    <Box
                        backgroundColor='#414181'
                        width={{ base: '80%', md: '885px' }}
                        height='202px'
                        borderRadius='10px 0px 0px 10px'
                        display='flex'
                        justifyContent="flex-end"
                        alignSelf="flex-end"
                        flex={{ base: 'auto', lg: 1 }}
                        order={{ base: 2, md: 2 }}
                        position='relative'>

                        <Image position='absolute'
                            top={{ base: '28%', md: '21%', lg: '18%' }}
                            left={{ base: '5%', lg: '10%' }}
                            height='235px'
                            width={{ base: '260px', sm: "300px", md: '300px', lg: '397px' }}
                            src='/images/products/equipamentos-lg.svg'></Image>
                    </Box>

                    <Box
                        flex="1"
                        height='202px'
                        display='flex'
                        flexDirection="column"
                        order={{ base: 1, md: 1 }}
                        justifyContent="space-evenly"
                        pr='8'
                        pl='8'
                        maxWidth='885px'
                        alignItems="self-end"
                    >
                        <Box display='flex' flexDirection="column">
                            <Text fontSize='36' fontWeight="bold" color="#262626">Equipamentos</Text>
                            <Text fontSize='16' color="#262626" lineHeight='20px' minWidth={{ base: 'none', md: '350px', lg: "410px" }} maxWidth={{ base: 'none', md: '350px', lg: "564px" }}>
                                Etiquetadoras, tinteiros, ribbons, aplicador de tag, impressoras térmicas de etiquetas dentre outros produtos, esperam por você na nossa loja.                            </Text>
                        </Box>
                    </Box>

                </Flex>
            </Flex>
        </Box>
    );
}