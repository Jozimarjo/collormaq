import { Box, Button, Flex, Icon, Image, Input, Text, Textarea, useBreakpointValue, VStack } from "@chakra-ui/react";
import Head from "next/head";
import { Carousel } from "react-bootstrap";
import { RiMailOpenFill, RiPhoneFill } from "react-icons/ri";
import { EntreContato } from "../../components/EntreContato";

import FooterComponent from "../../components/Footer";
import Header from "../../components/Header";
import CityCard from "./CityCard";
import OurStores from "./OurStores";

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
                <title>Contato | collormaq</title>
                <meta property="og:contato" content="Fale Conosco, estamos presentes em Manaus, Boa Vista e Porto Velho" key="contato" />

            </Head>
            <Box position='relative'>
                <Header position='absolute' zIndex='1' justifyContent='space-around' isWideVersion={isWideVersion} />
                <Carousel>
                    <Carousel.Item>
                        <Box>
                            <Image flex='1' src='/images/quem_somos_section_1.svg' />
                        </Box>
                    </Carousel.Item>
                </Carousel>
                <Flex p='30px' justify="space-evenly" my={{ base: '0', md: '100px' }} flexWrap='wrap' >
                    <VStack spacing='30px' align="start" p='30px' w='540px' height='780' background='white' direction='column' mb={{ base: '50px', xl: '0' }} >
                        <Text color='#305F3C' fontSize={{ base: '34', md: '48' }} fontWeight='bold'>Fale Conosco</Text>
                        <Input focusBorderColor='#305F3C' variant='flushed' placeholder='Nome' />
                        <Input focusBorderColor='#305F3C' variant='flushed' placeholder='E-mail' />
                        <Input focusBorderColor='#305F3C' variant='flushed' placeholder='Numero' />
                        <Input focusBorderColor='#305F3C' variant='flushed' placeholder='Escolha a Unidade Collormar' />
                        <Textarea focusBorderColor='#305F3C' variant='flushed' placeholder='Digite aqui sua mensagem...'></Textarea>
                        <Button width='12.5em' bg='#305F3C' variant='solid'>
                            <Text fontWeight='bold' >Enviar</Text>
                        </Button>
                    </VStack>
                    <VStack spacing='30px' align="start" direction='column' >

                        <Flex px='30px' direction='column' justify="center" align="center" maxWidth='540px' height='240px' background='white'>
                            <Text color='#305F3C' fontSize={{ base: '40', md: '48' }} fontWeight='bold'>Manaus</Text>
                            <Box alignSelf={{ base: 'start', md: 'center' }}>
                                <Text color='#305F3C' fontSize={{ base: '18', md: '24' }} fontWeight='bold'><Icon color='#305F3C' w={8} h={8} as={RiPhoneFill} />(092) 3654-7373 | 3634-6204</Text>
                                <Text color='#305F3C' fontSize={{ base: '18', md: '24' }} fontWeight='bold'><Icon color='#305F3C' w={8} h={8} as={RiMailOpenFill} /> collormar@gmail.com </Text>
                            </Box>
                            <Text color='#707070' fontSize='16' fontWeight='bold'>Funcionamos de Seg à Sex de 07:30h às 12h, 13:15 às 17:15h</Text>
                        </Flex>
                        <Flex px='30px' direction='column' justify="center" align="center" maxWidth='540px' height='240px' background='white'>
                            <Text color='#305F3C' fontSize={{ base: '40', md: '48' }} fontWeight='bold'>Boa Vista</Text>
                            <Box alignSelf={{ base: 'start', md: 'center' }}>
                                <Text color='#305F3C' fontSize={{ base: '18', md: '24' }} fontWeight='bold'><Icon color='#305F3C' w={8} h={8} as={RiPhoneFill} />(95) 3626-0550 | 3626-0838</Text>
                                <Text color='#305F3C' fontSize={{ base: '18', md: '24' }} fontWeight='bold'><Icon color='#305F3C' w={8} h={8} as={RiMailOpenFill} /> collormar@gmail.com </Text>
                            </Box>
                            <Text color='#707070' fontSize='16' fontWeight='bold'>Funcionamos de Seg à Sex de 07:30h às 12h, 13:15 às 17:15h</Text>
                        </Flex>
                        <Flex px='30px' direction='column' justify="center" align="center" maxWidth='540px' height='240px' background='white'>
                            <Text color='#305F3C' fontSize={{ base: '40', md: '48' }} fontWeight='bold'>Porto Velho</Text>
                            <Box alignSelf={{ base: 'start', md: 'center' }}>
                                <Text color='#305F3C' fontSize={{ base: '18', md: '24' }} fontWeight='bold'><Icon color='#305F3C' w={8} h={8} as={RiPhoneFill} />(69) 3224-8204 | 3026-3103</Text>
                                <Text color='#305F3C' fontSize={{ base: '18', md: '24' }} fontWeight='bold'><Icon color='#305F3C' w={8} h={8} as={RiMailOpenFill} /> collormar@gmail.com </Text>
                            </Box>
                            <Text color='#707070' fontSize='16' fontWeight='bold'>Funcionamos de Seg à Sex de 07:30h às 12h, 13:15 às 17:15h</Text>
                        </Flex>

                    </VStack>
                </Flex>

                <OurStores />
                <EntreContato />
                <FooterComponent isWideVersion={isWideVersion} />
            </Box>

        </>

    )
}