import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import style from '../../styles/Home.module.scss';
import lopMap from '../../../public/images/position_icon.svg';
import secondImg from '../../../public/images/section_2_mobile.svg';
import secondMaxImg from '../../../public/images/section_2x.svg';

export default function SecondSection() {
    return (

        <Box width='100%' p='4' bgColor='gray.100' height="935px">
            <Flex
                direction={{ base: 'column', lg: 'row' }}
                justify='space-evenly'
                alignItems='center'
                w='100%'
                h='100%'>
                <Box display='flex' justifyContent='center' w={{ base: '315px', lg: '525px' }} >
                    <Image alt="pointer maps icon" src={secondMaxImg} />
                </Box>


                <Flex p={{ base: '5', lg: '7' }} alignSelf={{ base: 'flex-start', sm: 'center' }} alignItems={{base: 'flex-start', sm: 'center' }} direction='column'>
                    <Text fontWeight='bold' color='green.800' fontSize={{ base: '28', lg: '48' }}>
                        Quem somos
                    </Text>
                    <Text mt='8' w={{ base: '100%', lg: '450px' }} maxWidth='464px' fontWeight='normal' color='#262626' fontSize='16'>
                        Fundada em 2003, a Collormaq atua no segmento flexográfico,
                        confeccionando rótulos, etiquetas e bobinas térmicas.
                    </Text>
                    <Text mt='8' w={{ base: '100%', lg: '450px' }} maxWidth='464px' fontWeight='normal' color='#262626' fontSize='16'>
                        Atendemos todas as necessidades da indústria, comércio e serviço.
                        Investimos constantemente em equipamentos de ponta e treinamento de colaboradores,
                        visando crescimento, comprometimento, qualidade dos produtos, e presteza no atendimento aos nossos clientes.
                    </Text>

                    <HStack mt={{ base: '8', lg: '16' }}>
                        <Box width={{ base: '90px', lg: '120px' }} h={{ base: '90px', lg: '120px' }} borderRadius='5px' className={style.box}>
                            <Flex height='100%' justify="space-around" direction='column' align='center' >
                                <Box w={21} ><Image alt="pointer maps icon" src={lopMap}></Image></Box>
                                <Flex direction='column' align='center'>
                                    <Text color='#262626'>Manaus</Text>
                                    <Text fontSize="12" color='#262626'>Amazonas</Text>
                                </Flex>
                            </Flex>
                        </Box>

                        <Box width={{ base: '90px', lg: '120px' }} h={{ base: '90px', lg: '120px' }} borderRadius='5px' className={style.box}>
                            <Flex height='100%' justify="space-around" direction='column' align='center' >
                                <Box w={21}><Image alt="pointer maps icon" src={lopMap}></Image></Box>
                                <Flex direction='column' align='center'>
                                    <Text color='#262626'>Porto Velho</Text>
                                    <Text fontSize="12" color='#262626'>Rondônia</Text>
                                </Flex>
                            </Flex>
                        </Box>

                        <Box width={{ base: '90px', lg: '120px' }} h={{ base: '90px', lg: '120px' }} borderRadius='5px' className={style.box}>
                            <Flex height='100%' justify="space-around" direction='column' align='center' >
                                <Box w={21}><Image alt="pointer maps icon" src={lopMap}></Image></Box>
                                <Flex direction='column' align='center'>
                                    <Text color='#262626'>Boa Vista</Text>
                                    <Text fontSize="12" color='#262626'>Roraima</Text>
                                </Flex>
                            </Flex>
                        </Box>
                    </HStack>
                </Flex>
            </Flex>
        </Box>
    )
}