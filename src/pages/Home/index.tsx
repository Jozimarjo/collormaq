import { Box, Flex, HStack, Icon, Image, SimpleGrid, Text } from "@chakra-ui/react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import style from '../../styles/Home.module.scss';

export default function Home() {
    return (
        <>
            <Flex w='100%' h='100%' className='Jozimar' direction='column'>
                <FirstSection />
                <SecondSection />
                <Box as='section' p='4' w='100%' bgColor="#305F3C" display='flex' flexDirection='column' >
                    <Flex w='100%' direction='column' align={['flex-start', 'center']}>
                        <Text my='8' fontWeight='bold' fontSize={['28', '48']}>Soluções em</Text>
                        <Text mb='16' fontSize='16' width={['314px', '484px']} maxWidth='31em'>
                            Confira nossos produtos, disponibilizamos diversas medidas de etiquetas,
                            ribbons, tinteiros e impressoras térmicas e muito mais
                        </Text>
                    </Flex>

                    <SimpleGrid width='100%' minChildWidth='506px' columns={2} spacing={10}>
                        {/* <Flex w='100%' justify="center" align="center"> */}

                        <Box padding={['20px', '6']} bg='white' justifySelf={['baseline', 'end']} width={['315px', '570px']} height={['386px', '250px']} className={style.boxShadow} borderRadius={20} >
                            <Flex direction={['column', 'row']}>
                                <Flex direction='column'>
                                    <Text as='h1' fontSize={['28px', '40px']} fontWeight='bold' color='#305F3C' mb='4'> Bobinas </Text>
                                    <Text fontSize='15px' width={['275px', '240px']} height={['101px']} color='#000' mb={['0', '4']}>
                                        Bobinas Térmicas a pronta entrega confeccionadas em material com garantia de procedência,
                                        podendo ser personalizadas em até 04 cores!
                                    </Text>
                                </Flex>
                                <Box backgroundImage="url('/images/mockup_bobina personalizada.png')" ml={['-14px', '0px']} width='293px' height='220px'></Box>
                            </Flex>
                        </Box>

                        <Box
                            padding={['20px', '6']} bg='white' width={['315px', '570px']} height={['386px', '250px']}
                            className={style.boxShadow} borderRadius={20} justifySelf={['baseline', 'initial']} >
                            <Flex direction={['column', 'row']}>
                                <Flex direction='column'>
                                    <Text as='h1' fontSize={['28px', '40px']} fontWeight='bold' color='#305F3C' mb='4'> Bobinas </Text>
                                    <Text fontSize='15px' width={['275px', '240px']} height={['101px']} color='#000' mb={['0', '4']}>
                                        Bobinas Térmicas a pronta entrega confeccionadas em material com garantia de procedência,
                                        podendo ser personalizadas em até 04 cores!
                                    </Text>
                                </Flex>
                                <Box backgroundImage="url('/images/mockup_bobina personalizada.png')" ml={['-14px', '0px']} width='293px' height='220px'></Box>
                            </Flex>
                        </Box>

                        {/* </Flex> */}

                    </SimpleGrid>
                </Box>

            </Flex >
            {/* <Box w='100%' display='flex' justifyContent='center'>
                        <SimpleGrid width='1180px' minChildWidth='506px' columns={2} spacing={10}>
                            <Box p='8' bg='white' maxWidth='570px' className={style.boxShadow} borderRadius={20} >
                                <Flex>
                                    <Flex direction='column' maxWidth='240px'>
                                        <Text as='h1' fontSize='40px' fontWeight='bold' color='#000' mb='4'> Bobinas </Text>
                                        <Text fontSize='16px' color='#000' mb='4'>
                                            Bobinas Térmicas a pronta entrega confeccionadas em material com garantia de procedência,
                                            podendo ser personalizadas em até 04 cores!
                                        </Text>
                                    </Flex>
                                    <Box backgroundImage="url('/images/mockup_bobina personalizada.png')" width='293px' height='220px'></Box>
                                </Flex>
                            </Box>
                            <Box p='8' bg='white' maxWidth='570px' className={style.boxShadow} borderRadius={20} >
                                <Flex>
                                    <Flex direction='column' maxWidth='240px'>
                                        <Text as='h1' fontSize='40px' fontWeight='bold' color='#000' mb='4'> Bobinas </Text>
                                        <Text fontSize='16px' color='#000' mb='4'>
                                            Bobinas Térmicas a pronta entrega confeccionadas em material com garantia de procedência,
                                            podendo ser personalizadas em até 04 cores!
                                        </Text>
                                    </Flex>
                                    <Box backgroundImage="url('/images/mockup_bobina personalizada.png')" width='293px' height='220px'></Box>
                                </Flex>
                            </Box>
                            <Box p='8' bg='white' maxWidth='570px' className={style.boxShadow} borderRadius={20} >
                                <Flex>
                                    <Flex direction='column' maxWidth='240px'>
                                        <Text as='h1' fontSize='40px' fontWeight='bold' color='#000' mb='4'> Bobinas </Text>
                                        <Text fontSize='16px' color='#000' mb='4'>
                                            Bobinas Térmicas a pronta entrega confeccionadas em material com garantia de procedência,
                                            podendo ser personalizadas em até 04 cores!
                                        </Text>
                                    </Flex>
                                    <Box backgroundImage="url('/images/mockup_bobina personalizada.png')" width='293px' height='220px'></Box>
                                </Flex>
                            </Box>
                        </SimpleGrid>

                    </Box> */}


        </>
    )
}