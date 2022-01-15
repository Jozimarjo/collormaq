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
                    <Flex w='100%' direction='column' align={{ base: 'flex-start', lg: 'center' }}>
                        <Text my='8' fontWeight='bold' fontSize={{ base: '28', lg: '48' }}>Soluções em</Text>
                        <Text mb='16' fontSize='16' width={{ base: '314px', lg: '484px' }} maxWidth='31em'>
                            Confira nossos produtos, disponibilizamos diversas medidas de etiquetas,
                            ribbons, tinteiros e impressoras térmicas e muito mais
                        </Text>
                    </Flex>

                    <SimpleGrid width='100%' minChildWidth='506px' columns={2} spacing={10}>
                        <Box
                            padding={{ base: '20px', lg: '6' }}
                            justifySelf={{ base: 'baseline', lg: 'end' }}
                            width={{ base: '315px', lg: '570px' }}
                            height={{ base: '386px', lg: '250px' }}
                            className={style.boxShadow}
                            bg='white'
                            borderRadius={20} >
                            <Flex direction={{ base: 'column', lg: 'row' }}>
                                <Flex direction='column'>
                                    <Text as='h1' fontSize={{ base: '28px', lg: '40px' }} fontWeight='bold' color='#305F3C' mb='4'> Bobinas </Text>
                                    <Text fontSize='15px' width={{ base: '275px', lg: '240px' }} height={{ base: '101px' }} color='#000' mb={{ base: '0', lg: '4' }}>
                                        Bobinas Térmicas a pronta entrega confeccionadas em material com garantia de procedência,
                                        podendo ser personalizadas em até 04 cores!
                                    </Text>
                                </Flex>
                                <Box backgroundImage="url('/images/mockup_bobina personalizada.png')" ml={{ base: '-14px', lg: '0px' }} width='293px' height='220px'></Box>
                            </Flex >
                        </Box >
                        <Box
                            padding={{ base: '20px', lg: '6' }} bg='white' width={{ base: '315px', lg: '570px' }} height={{ base: '386px', lg: '250px' }}
                            className={style.boxShadow} borderRadius={20} justifySelf={{ base: 'baseline', lg: 'initial' }}>
                            <Flex direction={{ base: 'column', lg: 'row' }} >
                                <Flex direction='column'>
                                    <Text as='h1' fontSize={{ base: '28px', lg: '40px' }} fontWeight='bold' color='#305F3C' mb='4'> Bobinas </Text>
                                    <Text fontSize='15px' width={{ base: '275px', lg: '240px' }} height={['101px']} color='#000' mb={{ base: '0', lg: '4' }}>
                                        Bobinas Térmicas a pronta entrega confeccionadas em material com garantia de procedência,
                                        podendo ser personalizadas em até 04 cores!
                                    </Text >
                                </Flex >
                                <Box backgroundImage="url('/images/mockup_bobina personalizada.png')"
                                    ml={{ base: '-14px', lg: '0px' }}
                                    width='293px'
                                    height='220px'></Box>
                            </Flex >
                        </Box >
                    </SimpleGrid >
                </Box >

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