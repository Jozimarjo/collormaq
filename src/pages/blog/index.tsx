import { Avatar, Box, Button, Flex, Image, Input, Text, useBreakpointValue, Wrap } from "@chakra-ui/react";
import { FirstSection } from "../../components/Blog/FirstSection";
import Head from "next/head";

export default function Blog() {
    const comp = {
        title: 'Acesse nosso blog e mantenha-se informado',
        subTitle: {
            paragraph: [
                'Aqui você encontra informações sobre o mundo da impressão, flexografia, curiosidades e muito mais.'
            ]
        }
    }
    const isWideVersion = useBreakpointValue({
        base: false,
        sm: false,
        md: false,
        lg: true
    });


    return (
        <Flex bg={'#F9F9F9'} flexDirection={'column'}>
            <Head>
                <title>Blog | Collormaq</title>
                <link rel="canonical" href="https://www.collormaq.com/blog" />
                <meta name="description" content="Collormaq esta presente em Manaus, Boa Vista e Porto Velho, faça-nos uma visita." />
                <meta property="og:title" content="Collormaq - Blog" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.collormaq.com/blog" />
            </Head>
            <Box>
                <FirstSection title={comp.title} subTitle={comp.subTitle} isWideVersion={isWideVersion} />
                
                <Flex flexDirection={'column'} marginTop={'101px'} marginX={'auto'} borderRadius={'2xl'} w='1200px' h='1024px' padding='50px' bg='#FFF'>
                    <Flex>
                        <Flex width={'520px'} flexDirection="column"> 
                            <Text fontWeight={'bold'} fontSize="48px" color={'#262626'} marginBottom={'51px'}>Highly Delight<br/>Present Tropical<br/>to sub-Tropical Tree</Text>
                            <Text fontWeight={'normal'} fontSize="21px" color={'#262626'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin, felis ac lacinia finibus, odio dolor convallis augue, et rutrum elit quam eget mi(...)
                            </Text>
                            <Flex justifyContent={'space-between'} alignItems={'center'} marginTop={'29px'}>
                                <Flex alignItems={'center'}>
                                    <Avatar />
                                    <Text fontSize={'14px'} color={'#262626'} marginLeft={'10px'}>Autor</Text>
                                </Flex>
                                <Text fontSize={'14px'} color={'#262626'}>14 de Marça de 2022</Text>
                            </Flex>
                            <Button marginTop={'30px'} w={'120px'} h={'35px'} color={'#213472'} bg={'transparent'} border={'1px'}>Leia mais</Button>
                        </Flex>
                        {/* <Box borderRadius={'2xl'} w={'519.5px'} h={'526px'} bg="yellow" marginLeft={'60.5px'}> */}
                            <Image borderRadius={'2xl'} marginLeft={'60.5px'} w={'519.5px'} h={'526px'} objectFit='cover' src='https://bit.ly/dan-abramov' alt='Dan Abramov'/>
                        {/* </Box> */}
                    </Flex>
                    <Wrap spacing={'27px'}>
                        <Flex w={'348.33px'} flexDirection={'column'}>
                            <Image borderRadius={'2xl'} mb={'21.3px'} mt={'50px'} w={'348.33px'} h={'194.46px'} objectFit='cover' src='https://bit.ly/dan-abramov' alt='Dan Abramov'/>
                            <Text mb={'6px'} color={'#1D211F'} fontSize={'21px'}>
                                Highly Delighted Present Tropical to sub-Tropical Tree
                            </Text>
                            <Text mb={'11px'} color={'#1D211F'} fontSize={'12px'}>
                                14 de Março de 2022
                            </Text>
                            <Text color={'#1D211F'} fontSize={'16px'}>
                                Would be the word "and" and the Little Blind Text should turn around and return
                            </Text>
                        </Flex>
                        <Flex w={'348.33px'} flexDirection={'column'}>
                            <Image borderRadius={'2xl'} mb={'21.3px'} mt={'50px'} w={'348.33px'} h={'194.46px'} objectFit='cover' src='https://bit.ly/dan-abramov' alt='Dan Abramov'/>
                            <Text mb={'6px'} color={'#1D211F'} fontSize={'21px'}>
                                Highly Delighted Present Tropical to sub-Tropical Tree
                            </Text>
                            <Text mb={'11px'} color={'#1D211F'} fontSize={'12px'}>
                                14 de Março de 2022
                            </Text>
                            <Text color={'#1D211F'} fontSize={'16px'}>
                                Would be the word "and" and the Little Blind Text should turn around and return
                            </Text>
                        </Flex>
                        <Flex w={'348.33px'} flexDirection={'column'}>
                            <Image borderRadius={'2xl'} mb={'21.3px'} mt={'50px'} w={'348.33px'} h={'194.46px'} objectFit='cover' src='https://bit.ly/dan-abramov' alt='Dan Abramov'/>
                            <Text mb={'6px'} color={'#1D211F'} fontSize={'21px'}>
                                Highly Delighted Present Tropical to sub-Tropical Tree
                            </Text>
                            <Text mb={'11px'} color={'#1D211F'} fontSize={'12px'}>
                                14 de Março de 2022
                            </Text>
                            <Text color={'#1D211F'} fontSize={'16px'}>
                                Would be the word "and" and the Little Blind Text should turn around and return
                            </Text>
                        </Flex>
                    </Wrap>
                </Flex>
                
                <Flex mt={'100px'} justifyContent={'center'} w={'100%'} h={'250px'}
                    bg='linear-gradient(59deg, #174a96 0%, #098c4f66 100%)'
                >
                    <Flex w='1200px' alignItems={'center'}>
                        <Flex flexDirection={'column'}>
                            <Text fontWeight={'bold'} fontSize={'48px'}>Inscreva-se em nosso blog</Text>
                            <Text fontSize={'21px'}>Acesse, em primeira mão, nossos principais posts diretamente em seu email</Text>
                        </Flex>
                        <Flex marginLeft={'60px'}>
                            <Input w={'296px'} h={'40px'} placeholder="Email..."></Input>
                            <Button w={'100px'} h={'40px'} bg={'#fff'} color={'#305F3C'}>Enviar</Button>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
          
        </Flex>
    )
}