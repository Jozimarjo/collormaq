import { Box, Button, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import style from '../../styles/Home.module.scss';
import secondMaxImg from '../../../public/images/mockup_bobina_personalizada.svg'

interface ProductsProps {
    id: number;
    description: string;
    title: string;
    img: string;
}
export default function ThirdSection() {
    const isSmallVersion = useBreakpointValue({
        base: false,
        sm: true,
        md: false,
        lg: false
    });
    const productList: ProductsProps[] = [
        {
            id: 1,
            title: 'Bobinas',
            description: 'Bobinas Térmicas a pronta entrega confeccionadas em material com garantia de procedência, podendo ser personalizadas em até 04 cores!',
            img: '/images/products/mockup_bobina_personalizada.svg'
        },
        {
            id: 2,
            title: 'Etiquetas',
            description: 'Etiquetas adesivas customizadas, em diversos substratos e se necessário com adição de dados variáveis.',
            img: '/images/products/etiquetas.svg'
        },
        {
            id: 3,
            title: 'Rótulos',
            description: 'Alta qualidade de impressão, com grande lineatura e acabamentos superiores à média de mercado.',
            img: '/images/products/suprimentos.svg'
        },
        {
            id: 4,
            title: 'Suprimentos',
            description: 'Etiquetadoras, tinteiros, tira senhas, pinos, trava anel, ribbons para impressoras térmicas entre outros itens.',
            img: '/images/products/suprimentos.svg'
        },
        {
            id: 5,
            title: 'Impressoras Térmicas',
            description: 'Mais produtividade nos processos de identificação e rastreamento de dados. Soluções completa para todos os setores.',
            img: '/images/products/suprimentos.svg'
        },
        {
            id: 6,
            title: 'Automação Comercial',
            description: 'Deixe a infraestrutura da sua empresa mais completa, ágil e eficiente com nossos produtos, são monitores, balanças, caixa registradora etc.',
            img: '/images/products/suprimentos.svg'
        },
    ]
    return (
        <Box as='section' p='7' w='100%' bgColor="#305F3C" display='flex' flexDirection='column' >
            <Flex w='100%' direction='column' align={{ base: 'flex-start', sm: 'center' }}>
                <Text my='8' fontWeight='bold' fontSize={{ base: '28', sm: '48' }}>
                    Soluções em
                </Text>
                <Text mb='16' fontSize='16' width={{ base: '100%', lg: '484px' }} maxWidth='31em'>
                    Confira nossos produtos, disponibilizamos diversas medidas de etiquetas,
                    ribbons, tinteiros e impressoras térmicas e muito mais
                </Text>
            </Flex>
            <Flex
                direction={{ base: 'column', lg: 'row' }}
                alignItems={{ base: 'flex-start', sm: 'center' }}
                flexWrap='wrap'
                w={{ base: '100%', sm: '70%' }}
                alignSelf='center'
                justifyContent={{ base: 'center', lg: 'space-evenly' }}>
                {
                    productList.map((product) => (
                        <Box
                            padding={{ base: '20px', lg: '6' }}
                            justifySelf={{ base: 'baseline', lg: 'end' }}
                            className={style.boxShadow}
                            bg='white'
                            mb='5'
                            cursor='pointer'
                            maxWidth='564px'
                            key={product.id}
                            borderRadius={20}
                        >
                            <Text as='p' fontSize={{ base: '28px', lg: '40px' }} fontWeight='bold' color='#305F3C' mb='4'> {product.title} </Text>

                            <Flex direction={{ base: 'column', sm: 'row', md: 'row', lg: 'row' }}>
                                <Flex direction='column'>
                                    <Text fontSize='15px'
                                        width={{ base: '100%', sm: '100%', md: '240px' }}
                                        maxWidth={{ sm: '519px' }}
                                        height={{ base: '101px' }}
                                        mb={{ base: '4', lg: '4' }}
                                        color='#3e3e3e' >
                                        {product.description}
                                    </Text>
                                </Flex>
                                {!isSmallVersion && (
                                    <Box ml={{ base: '-14px', sm: '0px' }} width='100%' maxWidth='256px' maxHeight='156px'>
                                        <Image alt="pointer maps icon" boxSize="100%" objectFit='cover' objectPosition='bottom' src={product.img} />
                                    </Box>
                                )}

                            </Flex >
                        </Box >

                    ))
                }

            </Flex >
        </Box >
    )
}