import { Box, Button, Divider, Flex, HStack, Icon, Input, Text, VStack } from "@chakra-ui/react";
import { RiFacebookFill, RiInstagramLine, RiLinkedinFill, RiWhatsappLine } from "react-icons/ri";

export default function FiveSection() {
    return (
        <Box w='100%' height='900px' backgroundImage="linear-gradient(69deg, rgba(10,27,74,1) 0%, rgba(48,95,60,1) 79%)">
            <Box p='82px' display='flex' justifyContent='center' align='center' width='100%'>
                <Flex width='82%' justify="space-evenly">
                    <Icon fontSize='30' as={RiFacebookFill} />
                    <Icon fontSize='30' as={RiInstagramLine} />
                    <Icon fontSize='30' as={RiLinkedinFill} />
                    <Icon fontSize='30' as={RiWhatsappLine} />
                </Flex>
            </Box>

            <Flex justify="center" pl='146px'>
                <Box width="82%">
                    <HStack spacing="16">
                        <Flex direction="column">
                            <Text fontSize="48px" fontWeight='bold'>Collormaq</Text>
                            <Text fontSize="16px" fontWeight='normal' maxWidth="480px">
                                O sistema de impressão em flexografia e offset
                                combinado com a alta qualificação da equipe garantem
                                o atendimento de forma personalizada a cada cliente.
                            </Text>
                            <Flex>
                                <Input mr='4' variant='flushed' placeholder='Email' />
                                <Button width='6.25em' bg='transparent' border='1px solid #FFFFF'>
                                    <Text fontWeight='bold' >Enviar</Text>
                                </Button>
                            </Flex>
                        </Flex>
                        <Divider orientation='vertical' height='214px'></Divider>

                        <VStack spacing='4'>
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
                    </HStack>

                </Box>
            </Flex>

            <Divider></Divider>

        </Box >
    )
}