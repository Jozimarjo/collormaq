import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
export function FourthSection() {
    return (
        <Box as='section'>
            <Flex align="center" justifyContent="center" direction={{ base: 'column', md: 'row' }}>
                <Flex direction="column" justify="center" p={{ base: '30px', lg: '50px' }}>
                    <Text as='h2' fontWeight="bold" maxWidth={{ base: '100%', lg: 'min-content' }} mb='7' fontSize={{ base: "28px", md: "48px" }} color="#262626" lineHeight={{ base: "34px", lg: "64px" }}>
                        Clientes Parceiros
                    </Text>
                    <Text as='h6' fontSize="16px" maxWidth="480px" color="#262626">
                        Conheça nossos clientes e saiba porque estamos há mais de 15 anos,
                        produzindo produtos de alta qualidade para o mercado de flexografia.
                    </Text>
                </Flex>
                <Box px={{ base: '30px', lg: '50px' }} py={{ base: '30px', lg: '50px' }} >
                    <SimpleGrid columns={2} spacing={10} gridColumnGap={{ base: '0', xl: '170px' }} gridGap={0} gridTemplateColumns={{ base: 'repeat(3, minmax(0, 1fr))', lg: 'repeat(3, minmax(0, 118px))' }}>
                        <Box>
                            <Image src='/images/parceiro.svg' alt='Imagem de logo de parceiro' />
                        </Box>
                        <Box>
                            <Image src='/images/parceiro.svg' alt='Imagem de logo de parceiro' />
                        </Box>
                        <Box>
                            <Image src='/images/parceiro.svg' alt='Imagem de logo de parceiro' />
                        </Box>
                        <Box>
                            <Image src='/images/parceiro.svg' alt='Imagem de logo de parceiro' />
                        </Box>
                        <Box>
                            <Image src='/images/parceiro.svg' alt='Imagem de logo de parceiro' />
                        </Box>
                        <Box>
                            <Image src='/images/parceiro.svg' alt='Imagem de logo de parceiro' />
                        </Box>
                    </SimpleGrid>
                </Box>
            </Flex>
        </Box>
    )
}