import { Box, Button, Flex, HStack, Icon, Image, Input, Tag, Text, Textarea, useBreakpointValue, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { RiArrowRightLine } from "react-icons/ri";
import { FirstSectionComponent } from "../../components/FirstSection";
import Header from "../../components/Header";
import { FiveSection } from "../../components/Home/FiveSection";
import { ProductSecondSectionComponent } from "../../components/Product/SecondSection";

export default function Produtos() {
    // const isWideVersion = useBreakpointValue({
    //     base: false,
    //     sm: false,
    //     md: false,
    //     lg: true
    // });
    const [index, setIndex] = useState(0);
    const [selectItem, setSelectItem] = useState('Friso de gondola');
    const produtos = ['Friso de gondola', 'Preço', 'Balança', 'Confecção'];
    const handleSelect = (selectedIndex, e) => {
        setSelectItem(produtos[selectedIndex]);
        setIndex(selectedIndex);
    };

    return (
        <>
            <Box
                width="100%"
                height='auto'
                px='1.17em'
                backgroundSize='100%'
                backgroundRepeat="no-repeat"
                backgroundImage='https://images.ctfassets.net/txhaodyqr481/1zHXxn5FToSFx8u9uBKRPW/7d824de05a55f8cea2c0bfae511df9f7/SumUp_Q32021_Hero_hero_desktop.png?fm=webp&q=85&w=1500'>
                <Header isWideVersion={true} />
                <Flex
                    align={{ base: 'none', md: 'center' }}
                    w='100%' h='100%'>
                    <Flex ml={{ base: '0', md: '10em', xl: '20em' }} direction='column'>
                        <VStack spacing={{ base: '4', xl: '8' }} align='left'>
                            <Box w='100%' my='100px'>
                                <Flex>
                                    <Flex maxWidth='62%' align='flex-start' direction='column' >
                                        <Text mt='4' lineHeight='58px' fontWeight='bold' fontSize='50px' as='h1'>
                                            Get paid your way with SumUp
                                        </Text>
                                        <Text mt='4' fontSize='28 px' as='h1'>
                                            The most affordable way to get paid, no matter where your business goes
                                        </Text>

                                        <Button mt='8' p='25px' borderRadius='125px' width='13.5em' bg='#3063E9' variant='solid'>
                                            <Text fontWeight='bold' >Peça seu Orçamento</Text>
                                        </Button>
                                    </Flex>

                                </Flex>
                            </Box>
                        </VStack>
                    </Flex>
                </Flex>

            </Box >

            <ProductSecondSectionComponent />
            <Box my='100px' w='100%' px='1.17em' header={false} opacity='1' height='auto' bgImage='white'>
                <Flex justify='center' align='center'>
                    <Box ml='125px' my='100px' width='55%' >
                        <Text as='h2' fontWeight='bold' color='green.800' fontSize={{ base: '28', lg: '72px' }}>
                            Bobinas termicas com a mais alta qualidade.
                        </Text>

                        <Text as='p' mt='8' w={{ base: '100%', lg: '70%' }} fontWeight='normal' color='#262626' fontSize='16'>
                            Atendemos todas as necessidades da indústria, comércio e serviço.
                            Investimos constantemente em equipamentos de ponta e treinamento de colaboradores,
                            visando crescimento, comprometimento, qualidade dos produtos, e presteza no atendimento aos nossos clientes.
                        </Text>

                        <Button rightIcon={<RiArrowRightLine />} mt='8' p='25px' borderRadius='125px' width='13.5em' bg='green.800' variant='solid'>
                            <Text fontWeight='bold' >Peça seu Orçamento</Text>
                        </Button>

                    </Box>
                    <Box ml='136px' flex='1'>
                        <Image height='550px' src='https://images.ctfassets.net/txhaodyqr481/2KLjxa8eHAHAjVZgfRR4AK/5af34db8860bc37e0bb09809e4b66ae4/LesSoldes2021_productbubbles_600x600_FR06__1_.png?fm=webp&q=85&w=600&h=600' ></Image>
                    </Box>
                    {/* <Box ml='136px' flex='1'>
                        <Image height='550px' src='http://d2r9epyceweg5n.cloudfront.net/stores/902/999/products/bobina-termica-80x4041-1bb5041ed233033c4215512067391815-640-0.png' ></Image>
                    </Box> */}
                </Flex>


            </Box>
            <FiveSection isWideVersion={true} />


            {/* 
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

                <Box h='230px' as='section' my='120px'>
                    <Carousel interval={null} indicators={false} activeIndex={index} onSelect={handleSelect} controls={false}>
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
                                    as opposed to using Content here, content here.
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
                
            </Box> */}
        </>

    )
}