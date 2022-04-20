import { Box, Button, Flex, HStack, Icon, Image, Input, Tag, Text, Textarea, useBreakpointValue, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import { RiArrowRightLine } from "react-icons/ri";
import { HeadComponent } from "../../../components/Head";
import Header from "../../../components/Header";
import { FiveSection } from "../../../components/Home/FiveSection";
import { ProductSecondSectionComponent } from "../../../components/Product/SecondSection";
import { HeadProps } from "../../../interfaces/HeadProps";
interface bodyPageProps {
    headComponent: HeadProps
}
export async function getStaticProps({ params }) {
    // Call an external API endpoint to get posts
    // const res = await fetch('https://.../posts')
    const urls = [
        {
            id: 'etiquetas',
            canonicalLink: `https://www.collormaq.com/produtos/${params.id}`,
            description: 'description etiquetas',
            ogTitle: 'Collormaq - produtos > Etiquetas',
            ogUrl: 'https://www.collormaq.com/produtos/etiquetas',
            title: 'Collormar | produtos > etiquetas'
        },
        {
            id: 'bobinas',
            canonicalLink: `https://www.collormaq.com/produtos/${params.id}`,
            description: 'description bobinas',
            ogTitle: 'Collormaq - produtos > Bobinas',
            ogUrl: 'https://www.collormaq.com/produtos/bobinas',
            title: 'Collormar | produtos > bobinas'
        },

    ]
    const { canonicalLink, description, title, ogTitle, ogUrl } = urls.find(v => v.id === params.id);
    const body: bodyPageProps = {
        headComponent: {
            canonicalLink: `https://www.collormaq.com/produtos/${params.id}`, description, ogTitle, ogUrl, title
        }
    }

    return {
        props: {
            body,
        },
    }
}
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const posts = [{ id: 'bobinas' }, { id: 'etiquetas' }]
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
        params: { id: post.id },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}
export default function Produtos({ body }) {
    const { canonicalLink, description, icon, ogTitle, ogUrl, title } = body.headComponent

    return (
        <>
            <HeadComponent canonicalLink={canonicalLink} description={description} ogTitle={ogTitle} ogUrl={ogUrl} title={title} />
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
                                            The most affordable way to get paid, no matter where your business
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

            <Box my='100px' w='100%' px='1.17em' opacity='1' height='auto' bgImage='#FFFFFF'>
                <Flex justify='center' align='center'>
                    <Box ml='125px' my='100px' width='55%' >
                        <Text as='h2' fontWeight='bold' color='#414181' fontSize={{ base: '28', lg: '72px' }}>
                            Bobinas termicas com a mais alta qualidade.
                        </Text>

                        <Text as='p' mt='8' w={{ base: '100%', lg: '70%' }} fontWeight='normal' color='#262626' fontSize='16'>
                            Atendemos todas as necessidades da indústria, comércio e serviço.
                            Investimos constantemente em equipamentos de ponta e treinamento de colaboradores,
                            visando crescimento, comprometimento, qualidade dos produtos, e presteza no atendimento aos nossos clientes.
                        </Text>

                        <Button rightIcon={<RiArrowRightLine />} mt='8' p='25px' borderRadius='125px' width='13.5em' bg='#414181' variant='solid'>
                            <Text fontWeight='bold' >Catalogo de Produtos</Text>
                        </Button>

                    </Box>
                    <Box ml='136px' flex='1'>
                        <Image height='550px' src='https://images.ctfassets.net/txhaodyqr481/2KLjxa8eHAHAjVZgfRR4AK/5af34db8860bc37e0bb09809e4b66ae4/LesSoldes2021_productbubbles_600x600_FR06__1_.png?fm=webp&q=85&w=600&h=600' ></Image>
                    </Box>

                </Flex>


            </Box>

            <ProductSecondSectionComponent />

            <Box my='100px' w='100%' px='1.17em' opacity='1' height='auto' bgImage='#FFFFFF'>
                <Flex justify='center' align='center'>
                    <Box ml='125px' my='100px' width='55%' >
                        <Text as='h2' fontWeight='bold' color='#414181' fontSize={{ base: '28', lg: '72px' }}>
                            Bobinas termicas com a mais alta qualidade.
                        </Text>

                        <Text as='p' mt='8' w={{ base: '100%', lg: '70%' }} fontWeight='normal' color='#262626' fontSize='16'>
                            Atendemos todas as necessidades da indústria, comércio e serviço.
                            Investimos constantemente em equipamentos de ponta e treinamento de colaboradores,
                            visando crescimento, comprometimento, qualidade dos produtos, e presteza no atendimento aos nossos clientes.
                        </Text>


                    </Box>
                    <Box ml='136px' flex='1'>
                        <Image height='550px' src='https://images.ctfassets.net/txhaodyqr481/2KLjxa8eHAHAjVZgfRR4AK/5af34db8860bc37e0bb09809e4b66ae4/LesSoldes2021_productbubbles_600x600_FR06__1_.png?fm=webp&q=85&w=600&h=600' ></Image>
                    </Box>

                </Flex>


            </Box>
            <FiveSection isWideVersion={true} />
        </>

    )
}