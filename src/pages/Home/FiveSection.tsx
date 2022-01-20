import { Box, Button, Divider, Flex, HStack, Icon, Input, Text, VStack } from "@chakra-ui/react";
import { RiFacebookFill, RiInstagramLine, RiLinkedinFill, RiWhatsappLine } from "react-icons/ri";
import { ScreenSize } from "../../interfaces/ScreenSize";

export default function FiveSection({ isWideVersion = true }: ScreenSize) {
    return (
        <Box w='100%' backgroundImage="linear-gradient(69deg, rgba(10,27,74,1) 0%, rgba(48,95,60,1) 79%)">
            <Box p={{ base: '30px', md: '82px' }} display='flex' justifyContent='center' align='center' width='100%'>
                <Flex width={{ base: '100%', lg: '82%' }} justify={{ base: 'space-between', lg: 'space-evenly' }}>
                    <Icon fontSize='30' as={RiFacebookFill} />
                    <Icon fontSize='30' as={RiInstagramLine} />
                    <Icon fontSize='30' as={RiLinkedinFill} />
                    <Icon fontSize='30' as={RiWhatsappLine} />
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


                        <Flex flex='1' w='100%' flexWrap='wrap' justify={{ base: 'space-between', xl: 'space-around' }}>
                            <VStack mb='20px' mr='20px' alignItems={{ base: 'start', lg: 'center' }} spacing='4'>
                                <Text as='h1' fontSize='21' width='100px'>
                                    Menu
                                </Text>

                                <Text width='100px' fontSize='16'>
                                    Informação
                                </Text>
                                <Text width='100px' fontSize='16'>
                                    Informação
                                </Text>
                                <Text width='100px' fontSize='16'>
                                    Informação
                                </Text>
                                <Text width='100px' fontSize='16'>
                                    Informação
                                </Text>
                                <Text width='100px' fontSize='16'>
                                    Informação
                                </Text>
                            </VStack>
                            <VStack mb='20px' mr='20px' alignItems={{ base: 'start', lg: 'center' }} spacing='4'>
                                <Text as='h1' fontSize='21' width='100px'>
                                    Menu
                                </Text>

                                <Text width='100px' fontSize='16'>
                                    Informação
                                </Text>
                                <Text width='100px' fontSize='16'>
                                    Informação
                                </Text>
                                <Text width='100px' fontSize='16'>
                                    Informação
                                </Text>
                                <Text width='100px' fontSize='16'>
                                    Informação
                                </Text>
                                <Text width='100px' fontSize='16'>
                                    Informação
                                </Text>
                            </VStack>
                            <VStack mb='20px' mr='20px' alignItems={{ base: 'start', lg: 'center' }} spacing='4'>
                                <Text as='h1' fontSize='21' width='100px'>
                                    Menu
                                </Text>

                                <Text width='100px' fontSize='16'>
                                    Informação
                                </Text>
                                <Text width='100px' fontSize='16'>
                                    Informação
                                </Text>
                                <Text width='100px' fontSize='16'>
                                    Informação
                                </Text>
                                <Text width='100px' fontSize='16'>
                                    Informação
                                </Text>
                                <Text width='100px' fontSize='16'>
                                    Informação
                                </Text>
                            </VStack>
                        </Flex>

                    </HStack>


                </Box>
            </Flex>

            {isWideVersion && (<Divider mt='15em' ></Divider>)}

        </Box >
    )
}