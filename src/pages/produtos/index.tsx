import { Box, Button, Flex, HStack, Icon, Image, Input, Tag, Text, Textarea, useBreakpointValue, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { FirstSectionComponent } from "../../components/FirstSection";

export default function Produtos() {
    // const isWideVersion = useBreakpointValue({
    //     base: false,
    //     sm: false,
    //     md: false,
    //     lg: true
    // });

    const [index, setIndex] = useState(0);
    const [selectItem, setSelectItem] = useState('');
    const produtos = ['Friso de gondola', 'Preço', 'Balança', 'Confecção'];
    const handleSelect = (selectedIndex, e) => {
        console.log(selectedIndex, e);
        setSelectItem(produtos[selectedIndex]);
        setIndex(selectedIndex);
    };

    return (
        <>
            <FirstSectionComponent opacity='1' height='auto' bgImage='linear-gradient(69deg, rgba(10,27,74,1) 0%, rgba(48,95,60,1) 79%)' isWideVersion={true}>
                <Box w='100%' my='100px'>
                    <Flex alignItems='center'>
                        <Flex align='center' justify-content='center' width='46%' direction='column' >
                            <Text height='256px' lineHeight='48px' fontWeight='bold' fontSize='40px' as='h1'>
                                Etiquetas para balanças, impressoras térmicas e friso de gondola , são uma das nossas muitas especialidades.
                            </Text>

                        </Flex>
                        <Box ml='136px' flex='1'>
                            <Image height='550px' src='/images/testeImg.svg' ></Image>
                        </Box>
                    </Flex>
                </Box>
            </FirstSectionComponent>

            <Box bgColor='gray.100' mt='50px' p='70px'>
                <Box display='flex' justifyContent='center'>
                    <Flex direction='column'  >
                        <Text fontSize="40px" fontWeight='bold' mb='20px' color='#22543d'>Selecione  o tipo de <strong>etiqueta</strong> que deseja</Text>

                        <HStack spacing={4} justify='center'>
                            <Tag p='10px' onClick={() => handleSelect(0, undefined)} cursor='pointer' size={'md'} variant='solid' colorScheme='teal'>
                                Friso de gondola
                            </Tag>

                            <Tag p='10px' onClick={() => handleSelect(1, undefined)} cursor='pointer' size={'md'} variant='solid' colorScheme='teal'>
                                Preço
                            </Tag>

                            <Tag p='10px' onClick={() => handleSelect(2, undefined)} cursor='pointer' size={'md'} variant='solid' colorScheme='teal'>
                                Balança
                            </Tag>
                            <Tag p='10px' cursor='pointer' size={'md'} variant='solid' colorScheme='teal'>
                                Confecção
                            </Tag>
                        </HStack>
                    </Flex>
                </Box>

                <Box as='section' my='120px'>
                    <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
                        <Carousel.Item>
                            <Flex align="center" gap='50px' maxWidth="766px" margin="0 auto">
                                <Box >
                                    <Image height='200px' src='/images/products/mockup_bobina_personalizada-lg.svg' />
                                </Box>
                                <Box width='40%' color='#000'>
                                <Text color='#000' fontSize='30'> Etiqueta de {selectItem}</Text>
                                    It is a long established fact that a reader will be distracted by the
                                    readable content of a page when looking at its layout.
                                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                                    as opposed to using 'Content here, content here
                                </Box>
                            </Flex>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Flex align="center" gap='50px' maxWidth="766px" margin="0 auto">
                                <Box >
                                    <Image height='200px' src='/images/products/mockup_bobina_personalizada-lg.svg' />
                                </Box>
                                <Box width='40%' color='#000'>
                                <Text color='#000' fontSize='30'> Etiqueta de {selectItem}</Text>
                                    Etiquetas termicas servem para asid asdjaisjd ijd ai jdai jas ijdasdiajsd anosa
                                    asd iasdi hasd asd a asd asd as asd as  asd as asd lorem asd as asd 2
                                </Box>
                            </Flex>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Flex align="center" gap='50px' maxWidth="766px" margin="0 auto">
                                <Box >
                                    <Image height='200px' src='/images/products/mockup_bobina_personalizada-lg.svg' />
                                </Box>
                                <Box width='40%' color='#000'>
                                    <Text color='#000' fontSize='30'> Etiqueta de {selectItem}</Text>
                                    Etiquetas termicas servem para asid asdjaisjd ijd ai jdai jas ijdasdiajsd anosa
                                    asd iasdi hasd asd a asd asd as asd as  asd as asd lorem asd as asd333
                                </Box>
                            </Flex>
                        </Carousel.Item>
                    </Carousel>
                </Box>

                <Text as='h2' textAlign='center' fontSize='40px' fontWeight='bold' color='#22543d'>Etiquetas: <strong>{selectItem}</strong> </Text>
                <Box width={{ base: '78%', xl: '100%' }} margin={{ lg: '0 auto', xl: '0' }}>
                    <Wrap justify='flex-start' mt='50px' spacing='30px'>
                        <WrapItem>
                            <Flex boxShadow='md' direction='column' >
                                <Box>
                                    <Image bgColor='#f0f7fd' w='300px' h='200px' src='/images/products/mockup_bobina_personalizada-lg.svg'></Image>
                                </Box>
                                <Box height='150px'>
                                    <Text color='#000'> <strong>Mx-5500 </strong></Text>
                                </Box>
                            </Flex>
                        </WrapItem>

                        <WrapItem>
                            <Flex boxShadow='md' direction='column' >
                                <Box>
                                    <Image bgColor='#f0f7fd' w='300px' h='200px' src='/images/products/mockup_bobina_personalizada-lg.svg'></Image>
                                </Box>
                                <Box height='150px'>
                                    <Text color='#000'> <strong>Mx-2200 </strong></Text>
                                </Box>
                            </Flex>
                        </WrapItem>

                        <WrapItem>
                            <Flex boxShadow='md' direction='column' >
                                <Box>
                                    <Image bgColor='#f0f7fd' w='300px' h='200px' src='/images/products/mockup_bobina_personalizada-lg.svg'></Image>
                                </Box>
                                <Box height='150px'>
                                    <Text color='#000'> <strong>Mx-2200 </strong></Text>
                                </Box>
                            </Flex>
                        </WrapItem>

                        <WrapItem>
                            <Flex boxShadow='md' direction='column'>
                                <Box>
                                    <Image bgColor='#f0f7fd' w='300px' h='200px' src='/images/products/mockup_bobina_personalizada-lg.svg'></Image>
                                </Box>
                                <Box height='150px'>
                                    <Text color='#000'> <strong>Mx-3300 </strong></Text>
                                </Box>
                            </Flex>
                        </WrapItem>

                        <WrapItem>
                            <Flex boxShadow='md' direction='column'>
                                <Box>
                                    <Image bgColor='#f0f7fd' w='300px' h='200px' src='/images/products/mockup_bobina_personalizada-lg.svg'></Image>
                                </Box>
                                <Box height='150px'>
                                    <Text color='#000'> <strong>Mx-3300 </strong></Text>
                                </Box>
                            </Flex>
                        </WrapItem>
                    </Wrap>
                </Box>
            </Box>
        </>

    )
}