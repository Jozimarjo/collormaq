import { Box, Flex, HStack, Icon, Image, SimpleGrid, Text } from "@chakra-ui/react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import style from '../../styles/Home.module.scss';

export default function Home() {
    return (
        <>
            <Flex w='100%' className='Jozimar' direction='column'>
                <FirstSection />
                <SecondSection />
                {/*                <Box as='section' w='100%' bgColor="#305F3C"
                    height="935px">
                    <Flex w='100%' direction='column' align='center'>
                        <Text my='8' fontWeight='bold' fontSize='48'>Soluções em</Text>
                        <Text mb='16' fontWeight='bold' fontSize='16' maxWidth='31em'>
                            Confira nossos produtos, disponibilizamos diversas medidas de etiquetas,
                            ribbons, tinteiros e impressoras térmicas e muito mais
                        </Text>
                    </Flex>

                    <Box w='100%' display='flex' justifyContent='center'>
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

                    </Box>
                </Box> */}
            </Flex>

        </>
    )
}