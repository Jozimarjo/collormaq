import { Box, Button, Divider, Flex, HStack, Icon, Input, Link, Text, VStack } from "@chakra-ui/react";
import { RiFacebookFill, RiInstagramLine, RiYoutubeFill, RiWhatsappLine } from "react-icons/ri";
import { ScreenSize } from "../../interfaces/ScreenSize";

export function FiveSection({ isWideVersion = true }: ScreenSize) {
    return (
        <Box as='footer' w='100%' pb='50px' backgroundImage="linear-gradient(69deg, rgba(10,27,74,1) 0%, rgba(48,95,60,1) 79%)">
            <Box p={{ base: '30px', md: '82px' }} display='flex' justifyContent='center' align='center' width='100%'>
                <Flex width={{ base: '100%', lg: '82%' }} justify={{ base: 'space-between', lg: 'space-evenly' }}>
                    <Box as='a' href='https://pt-br.facebook.com/collormaqmanaus/'> <Icon fontSize='30' as={RiFacebookFill} /> </Box>
                    <Box as='a' href='https://www.instagram.com/collormaqmanaus/'> <Icon fontSize='30' as={RiInstagramLine} /></Box>
                    <Box as='a' href='https://www.youtube.com/channel/UCFgosH5PKVAmAJY-REMj2kw'> <Icon fontSize='30' as={RiYoutubeFill} /></Box>
                    <Box as='a' href='https://api.whatsapp.com/send?phone=5592999732214'> <Icon fontSize='30' as={RiWhatsappLine} /></Box>
                </Flex>
            </Box>

            <Flex justify="center" pl={{ base: '0', lg: '146px' }}>
                <Box width="82%">
                    <HStack alignItems={{ base: 'start', lg: 'start' }} flexDirection={{ base: 'column', lg: 'row' }} spacing={{ base: '0', lg: '16' }}>
                        <Flex flex='1' direction="column">
                            <Text mb='30px' fontSize="48px" fontWeight='bold'>Collormaq</Text>
                            <Text mb='40px' fontSize="16px" fontWeight='normal' maxWidth="480px">
                                O sistema de impressão em flexografia e offset
                                combinado com a alta qualificação da equipe garantem
                                o atendimento de forma personalizada a cada cliente.
                            </Text>
                            <Flex direction={{ base: 'column', lg: 'row' }}>
                                <Input mr='4' variant='flushed' placeholder='Email' />
                                <Button width={{ base: '100%', lg: '6.25em' }} bg='transparent' my='4' border='1px solid #FFFFFF'>
                                    <Text fontWeight='bold' >Enviar</Text>
                                </Button>
                            </Flex>
                        </Flex>
                        {isWideVersion && (<Divider orientation='vertical' height='250px'></Divider>)}


                        <Flex alignSelf='center' flex='1' w='100%' flexWrap='wrap' justify={{ base: 'space-between', xl: 'space-around' }}>
                            <VStack mb='20px' mr='20px' alignItems={{ base: 'start', lg: 'start' }} spacing='4'>
                                <Text as='p' fontSize='21' >
                                    Home
                                </Text>
                                <Link href="/">
                                    <Text fontSize='16'>
                                        Produtos
                                    </Text>
                                </Link>
                                <Link href="/quem_somos">
                                    <Text fontSize='16'>
                                        Quem somos
                                    </Text>
                                </Link>
                                <Link href="/contato">
                                    <Text fontSize='16'>
                                        Contato
                                    </Text>
                                </Link>
                                <Link href="/">
                                    <Text fontSize='16'>
                                        Clientes Parceiros
                                    </Text>
                                </Link>

                            </VStack>

                        </Flex>
                    </HStack>

                    <Flex justify="center" align="center" height='10%' mt='33px'>
                        <Text>COLLORMAQ INDUSTRIA E COMERCIO DE ETIQUETAS E BOBINAS LTDA | CNPJ:18.207.729/0001-07</Text>
                    </Flex>
                </Box>
            </Flex>

        </Box >
    )
}