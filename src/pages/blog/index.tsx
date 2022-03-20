import { Avatar, Box, Button, Flex, Heading, Image, Input, Text, useBreakpointValue, Wrap } from "@chakra-ui/react";
import { FirstSection } from "../../components/Blog/FirstSection";
import SecondSectionBlog from "../../components/Blog/SecondSectionBlog";
import Head from "next/head";
import FooterComponent from "../../components/Footer";
import { SignUpBlog } from "../../components/Blog/SignUpBlog";
import { ThirdSectionBlog } from "../../components/Blog/ThirdSectionBlog";
import { ContactBlog } from "../../components/Blog/ContactBlog";

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
                <SecondSectionBlog />
                <SignUpBlog />
                <ThirdSectionBlog />
                <ContactBlog />
                <FooterComponent isWideVersion={isWideVersion}/>
            </Box>
        </Flex>
    )
}