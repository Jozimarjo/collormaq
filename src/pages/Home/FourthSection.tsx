import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
export default function FourthSection() {
    return (
        <Box>
            <Flex align="center" justifyContent="center">
                <Flex direction="column" justify="center" p='50px'>
                    <Text fontWeight="bold" maxWidth='min-content'  mb='7' fontSize="48px" color="#262626" lineHeight="64px">
                        Clientes Parceiros
                    </Text>
                    <Text fontSize="16px" maxWidth="480px" color="#262626">
                        Conheça nossos clientes e saiba porque estamos há mais de 15 anos,
                        produzindo produtos de alta qualidade para o mercado de flexografia.
                    </Text>
                </Flex>
                <Box>
                    <SimpleGrid columns={2} spacing={10} gridColumnGap='170px' gridGap={0} gridTemplateColumns='repeat(3, minmax(0, 118px))'>
                        <Box>
                            <Image src='/images/parceiro.svg' />
                        </Box>
                        <Box>
                            <Image src='/images/parceiro.svg' />
                        </Box>
                        <Box>
                            <Image src='/images/parceiro.svg' />
                        </Box>
                        <Box>
                            <Image src='/images/parceiro.svg' />
                        </Box>
                        <Box>
                            <Image src='/images/parceiro.svg' />
                        </Box>
                        <Box>
                            <Image src='/images/parceiro.svg' />
                        </Box>
                    </SimpleGrid>
                </Box>
            </Flex>
        </Box>
    )
}