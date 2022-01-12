import { Box, Flex, HStack, Icon, Image, Text } from "@chakra-ui/react";
import { FirstSection } from "./FirstSection";
import { RiMapPinLine, RiMapPinFill } from 'react-icons/ri'
import style from '../../styles/Home.module.scss';
import lopMap from '../../../public/images/position_icon.svg';
export default function Home() {
    return (
        <>
            <Flex direction='column'>
                <FirstSection />
                <Box maxWidth='1920px' bgColor='gray.100' max-height='4150px'>
                    <Flex mt='125px' mb='125px' justify='space-around' w='100%'>
                        <Box w='525px' h='560px' backgroundImage="url('/images/second_section.jpg')"></Box>

                        <Box>
                            <Flex direction='column'>
                                <Text fontWeight='bold' color='green.800' fontSize='48'>
                                    Quem somos
                                </Text>
                                <Text mt='8' maxWidth='464px' fontWeight='normal' color='#262626' fontSize='16'>
                                    Fundada em 2003, a Collormaq atua no segmento flexográfico,
                                    confeccionando rótulos, etiquetas e bobinas térmicas.
                                </Text>
                                <Text mt='8' maxWidth='464px' fontWeight='normal' color='#262626' fontSize='16'>
                                    Atendemos todas as necessidades da indústria, comércio e serviço.
                                    Investimos constantemente em equipamentos de ponta e treinamento de colaboradores,
                                    visando crescimento, comprometimento, qualidade dos produtos, e presteza no atendimento aos nossos clientes.
                                </Text>

                                <HStack mt='16'>
                                    <Box width='120px' h='120px' borderRadius='5px' className={style.box}>
                                        <Flex height='100%' justify="space-around" direction='column' align='center' >
                                            <Box><Image src={lopMap}></Image></Box>
                                            <Flex direction='column' align='center'>
                                                <Text color='#262626'>Manaus</Text>
                                                <Text fontSize="12" color='#262626'>Amazonas</Text>
                                            </Flex>
                                        </Flex>
                                    </Box>
                                    <Box width='120px' h='120px' borderRadius='5px' className={style.box}>
                                        <Flex height='100%' justify="space-around" direction='column' align='center' >
                                            <Box><Image src={lopMap}></Image></Box>
                                            <Flex direction='column' align='center'>
                                                <Text color='#262626'>Porto Velho</Text>
                                                <Text fontSize="12" color='#262626'>Rondônia</Text>
                                            </Flex>
                                        </Flex>
                                    </Box>
                                    <Box width='120px' h='120px' borderRadius='5px' className={style.box}>
                                        <Flex height='100%' justify="space-around" direction='column' align='center' >
                                            <Box><Image src={lopMap}></Image></Box>
                                            <Flex direction='column' align='center'>
                                                <Text color='#262626'>Boa Vista</Text>
                                                <Text fontSize="12" color='#262626'>Roraima</Text>
                                            </Flex>
                                        </Flex>
                                    </Box>
                                </HStack>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            </Flex>

        </>
    )
}