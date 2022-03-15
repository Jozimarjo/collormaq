import { Avatar, Box, Button, Flex, Heading, Image, Input, Text, useBreakpointValue, Wrap } from "@chakra-ui/react";
import { FirstSection } from "../../components/Blog/FirstSection";
import Head from "next/head";
import FooterComponent from "../../components/Footer";

export default function Blog() {
    const comp = {
        title: 'Acesse nosso blog e se mantenha informado',
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
                    
                    {/* CARDS DE POSTS */}
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
                

                {/* INSCREVA-SE EM NOSSO BLOG */}
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

                {/* VER MAIS POSTS     */}
                <Flex w='1200px' alignItems={'center'} marginX={'auto'}>

                    <Flex flexDirection={'column'} w={'100%'}>

                        <Heading color={'#262626'} fontSize={'48px'} fontWeight={'bold'} marginBottom={'60px'} marginTop={'100px'}>Recentes</Heading>
                    
                            <Flex>
                                <Flex flexDirection={'column'}>
                                    <Flex alignItems={'center'} marginBottom={'60px'}>
                                        <Image w={'250px'} h={'150px'} borderRadius={'2xl'} src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                                        <Flex flexDirection={'column'} marginLeft={'30px'} w={'514px'}>
                                            <Text color={'#262626'} fontWeight={'medium'} lineHeight={'48px'} fontSize={'32px'}>
                                                Highly Delighted Present<br/> Tropical to sub-Tropical Tree
                                            </Text>
                                            <Flex justifyContent={'space-between'} alignItems={'center'} marginTop={'15px'}>
                                            <Flex alignItems={'center'}>
                                                <Avatar w={'20px'} h={'20px'} />
                                                <Text fontSize={'14px'} color={'#262626'} marginLeft={'10px'}>Autor</Text>
                                            </Flex>
                                            <Text fontSize={'14px'} color={'#262626'}>14 de Marça de 2022</Text>
                                        </Flex>
                                        </Flex>
                                    </Flex>
                                    <Flex alignItems={'center'} marginBottom={'60px'}>
                                        <Image w={'250px'} h={'150px'} borderRadius={'2xl'} src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                                        <Flex flexDirection={'column'} marginLeft={'30px'} w={'514px'}>
                                            <Text color={'#262626'} fontWeight={'medium'} lineHeight={'48px'} fontSize={'32px'}>
                                                Highly Delighted Present<br/> Tropical to sub-Tropical Tree
                                            </Text>
                                            <Flex justifyContent={'space-between'} alignItems={'center'} marginTop={'15px'}>
                                            <Flex alignItems={'center'}>
                                                <Avatar w={'20px'} h={'20px'} />
                                                <Text fontSize={'14px'} color={'#262626'} marginLeft={'10px'}>Autor</Text>
                                            </Flex>
                                            <Text fontSize={'14px'} color={'#262626'}>14 de Marça de 2022</Text>
                                        </Flex>
                                        </Flex>
                                    </Flex>
                                    <Flex alignItems={'center'} marginBottom={'60px'}>
                                        <Image w={'250px'} h={'150px'} borderRadius={'2xl'} src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                                        <Flex flexDirection={'column'} marginLeft={'30px'} w={'514px'}>
                                            <Text color={'#262626'} fontWeight={'medium'} lineHeight={'48px'} fontSize={'32px'}>
                                                Highly Delighted Present<br/>Tropical to sub-Tropical Tree
                                            </Text>
                                            <Flex justifyContent={'space-between'} alignItems={'center'} marginTop={'15px'}>
                                            <Flex alignItems={'center'}>
                                                <Avatar w={'20px'} h={'20px'} />
                                                <Text fontSize={'14px'} color={'#262626'} marginLeft={'10px'}>Autor</Text>
                                            </Flex>
                                            <Text fontSize={'14px'} color={'#262626'}>14 de Marça de 2022</Text>
                                        </Flex>
                                        </Flex>
                                    </Flex>
                                    <Flex alignItems={'center'} marginBottom={'60px'}>
                                        <Image w={'250px'} h={'150px'} borderRadius={'2xl'} src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                                        <Flex flexDirection={'column'} marginLeft={'30px'} w={'514px'}>
                                            <Text color={'#262626'} fontWeight={'medium'} lineHeight={'48px'} fontSize={'32px'}>
                                                Highly Delighted Present<br/> Tropical to sub-Tropical Tree
                                            </Text>
                                            <Flex justifyContent={'space-between'} alignItems={'center'} marginTop={'15px'}>
                                            <Flex alignItems={'center'}>
                                                <Avatar w={'20px'} h={'20px'} />
                                                <Text fontSize={'14px'} color={'#262626'} marginLeft={'10px'}>Autor</Text>
                                            </Flex>
                                            <Text fontSize={'14px'} color={'#262626'}>14 de Marça de 2022</Text>
                                        </Flex>
                                        </Flex>
                                    </Flex>
                                    <Flex alignItems={'center'} marginBottom={'60px'}>
                                        <Image w={'250px'} h={'150px'} borderRadius={'2xl'} src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                                        <Flex flexDirection={'column'} marginLeft={'30px'} w={'514px'}>
                                            <Text color={'#262626'} fontWeight={'medium'} lineHeight={'48px'} fontSize={'32px'}>
                                                Highly Delighted Present<br/> Tropical to sub-Tropical Tree
                                            </Text>
                                            <Flex justifyContent={'space-between'} alignItems={'center'} marginTop={'15px'}>
                                            <Flex alignItems={'center'}>
                                                <Avatar w={'20px'} h={'20px'} />
                                                <Text fontSize={'14px'} color={'#262626'} marginLeft={'10px'}>Autor</Text>
                                            </Flex>
                                            <Text fontSize={'14px'} color={'#262626'}>14 de Marça de 2022</Text>
                                        </Flex>
                                        </Flex>
                                    </Flex>
                                    <Flex alignItems={'center'} marginBottom={'82px'}>
                                        <Image w={'250px'} h={'150px'} borderRadius={'2xl'} src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                                        <Flex flexDirection={'column'} marginLeft={'30px'} w={'514px'}>
                                            <Text color={'#262626'} fontWeight={'medium'} lineHeight={'48px'} fontSize={'32px'}>
                                                Highly Delighted Present<br/> Tropical to sub-Tropical Tree
                                            </Text>
                                            <Flex justifyContent={'space-between'} alignItems={'center'} marginTop={'15px'}>
                                            <Flex alignItems={'center'}>
                                                <Avatar w={'20px'} h={'20px'} />
                                                <Text fontSize={'14px'} color={'#262626'} marginLeft={'10px'}>Autor</Text>
                                            </Flex>
                                            <Text fontSize={'14px'} color={'#262626'}>14 de Marça de 2022</Text>
                                        </Flex>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            
                                <Flex flexDirection={'column'}>
                                    <Flex ml={'60px'} mb={'60px'} color={'#121212'} fontSize={'32px'} alignItems={'center'} justify={'center'} w={'396px'} h={'350px'} bg={'#D6D6D6'}>Anúncio</Flex>
                                    <Flex ml={'60px'} mb={'60px'} color={'#121212'} fontSize={'32px'} alignItems={'center'} justify={'center'} w={'396px'} h={'350px'} bg={'#D6D6D6'}>Anúncio</Flex>
                                    <Flex ml={'60px'} mb={'60px'} color={'#121212'} fontSize={'32px'} alignItems={'center'} justify={'center'} w={'396px'} h={'350px'} bg={'#D6D6D6'}>Anúncio</Flex>
                                </Flex>
                            </Flex>

                            <Flex justifyContent={'center'}>
                                <Button w={'200px'} h={'50px'} bg={'#414181'}>Ver mais posts</Button>
                            </Flex>
                    </Flex>
                </Flex>

                {/* ENTRE EM CONTATO */}
                <Flex mt={'111px'} justifyContent={'center'} w={'100%'} h={'440px'}
                    bg='linear-gradient(59deg, #174a96 0%, #098c4f66 100%)'
                >
                    <Flex flexDirection={'column'} w='1200px' alignItems={'center'} justifyContent={'center'}>
                        <Text fontSize={'60px'} fontWeight={'bold'} mb={'34px'}>Entre em contato</Text>
                        <Button bg={'#098C4F'}>Peça um orçamento</Button>
                    </Flex>
                </Flex>

                <FooterComponent isWideVersion={isWideVersion}/>

            </Box>
        </Flex>
    )
}