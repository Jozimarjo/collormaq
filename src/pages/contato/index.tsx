import { Box, Button, Flex, Image, Stack, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { Carousel } from "react-bootstrap";
import { EntreContato } from "../../components/EntreContato";

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
            <Box position='relative'>
                <Header position='absolute' zIndex='1' justifyContent='space-around' isWideVersion={isWideVersion} />
                <Carousel>
                    <Carousel.Item>
                        <Box>
                            <Image flex='1' src='/images/quem_somos_section_1.svg' />
                        </Box>
                    </Carousel.Item>
                </Carousel>

                <Box width='100%' p='30px' background='#F5F6F7' borderBottom='1px solid #eee' textAlign='center'>
                    <Flex direction='column' align='center' mb='70px'>
                        <Text textAlign={{ base: 'left', md: 'center' }} mb='8' fontSize={{ base: '28', md: '48' }} color='#305F3C' fontWeight='bold'>Visite uma de nossas lojas</Text>
                        <Text textAlign={{ base: 'left', md: 'center' }} maxWidth='586px' fontSize='16' color='#262626'>Dispomos de 03 Unidades para melhor servi-lo com qualidade e equipe especializada a tirar todas as suas dúvidas.</Text>
                    </Flex>

                    <Stack direction={{ base: 'column', md: 'row' }} justify='center' align='center' spacing="8">

                        <Box maxW='sm' overflow='hidden'>
                            <Image src='/images/empresa_front.svg' alt='img alt' />

                            <VStack align='start' spacing='4' direction='column'>
                                <Box display='flex' alignItems='baseline'>
                                    <Text
                                        color='#305F3C'
                                        fontWeight='bold'
                                        letterSpacing='wide'
                                        fontSize='36'
                                    >
                                        Manaus
                                    </Text>
                                </Box>

                                <Text
                                    color='#262626'
                                    fontSize={{ base: '13px', md: '13px', lg: '16' }}
                                    textAlign='left'
                                >
                                    Rua Maurice Ravel, 175 -
                                    Shangrila VII - Parque Dez de Novembro. CEP: 69054-759 - Manaus/AM.
                                    Fones: (92) 3654-7373 / 3634-6204. E-mail: collormaq.am@collormaq.com.br
                                </Text>

                                <Button width='168px' bg='#305F3C' variant='solid'>
                                    <Text fontWeight='bold' >Ver no mapa</Text>
                                </Button>
                            </VStack>
                        </Box>

                        <Box maxW='sm' overflow='hidden'>
                            <Image src='/images/empresa_front.svg' alt='img alt' />

                            <VStack align='start' spacing='4' direction='column'>
                                <Box display='flex' alignItems='baseline'>
                                    <Text
                                        color='#305F3C'
                                        fontWeight='bold'
                                        letterSpacing='wide'
                                        fontSize='36'
                                    >
                                        Porto Velho
                                    </Text>
                                </Box>

                                <Text
                                    color='#262626'
                                    fontSize={{ base: '13px', md: '13px', lg: '16' }}
                                    textAlign='left'
                                >
                                    Av. Guaporé, 395 - Agenor de Carvalho. CEP: 76.820-277 - Porto Velho/RO.
                                    Fones: (69) 3224-8204 / 3026-3103.
                                    E-mail: collormaq.ro@collormaq.com.br
                                </Text>

                                <Button width='168px' bg='#305F3C' variant='solid'>
                                    <Text fontWeight='bold' >Ver no mapa</Text>
                                </Button>
                            </VStack>
                        </Box>

                        <Box maxW='sm' overflow='hidden'>
                            <Image src='/images/empresa_front.svg' alt='img alt' />

                            <VStack align='start' spacing='4' direction='column'>
                                <Box display='flex' alignItems='baseline'>
                                    <Text
                                        color='#305F3C'
                                        fontWeight='bold'
                                        letterSpacing='wide'
                                        fontSize='36'
                                    >
                                        Boa Vista
                                    </Text>
                                </Box>

                                <Text
                                    color='#262626'
                                    fontSize={{ base: '13px', md: '13px', lg: '16' }}
                                    textAlign='left'
                                >
                                    Av. Ataide Teive, 3270 - Buritis. CEP: 69000-000 - Boa Vista/RR.
                                    Fones: (95) 3626-0550 / 3626-0838. 
                                    E-mail: collormaq.rr@collormaq.com.br
                                </Text>

                                <Button width='168px' bg='#305F3C' variant='solid'>
                                    <Text fontWeight='bold' >Ver no mapa</Text>
                                </Button>
                            </VStack>
                        </Box>
                    </Stack>
                </Box>
                <EntreContato />
                <FooterComponent isWideVersion={isWideVersion} />
            </Box>

        </>

    )
}