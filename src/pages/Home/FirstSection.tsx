import { Box, Button, Flex, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { Header } from "../../components/Header";
export default function FirstSection() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });

    return (
        <Box
            width="100%"
            maxWidth="1920px"
            height="935px"
            opacity="0.88"
            backgroundImage="linear-gradient(
                59deg, #17179659 0%, #098c4f96 100%),url(/images/home.svg);">
            <Header />
            <Flex mt={{ base: '32', lg: '0' }}
                align={{ base: 'none', lg: 'center' }}
                w='100%' h='100%'>
                <Flex ml={{ base: '8', lg: '22em' }} direction='column'>
                    <VStack spacing={8} align='left'>
                        <Text as='span' w={{ base: '100%', lg: '100%' }}>
                            <Text textShadow='0px 0px 6px #000000a1;' lineHeight='42px' fontWeight='bold' fontSize={{ base: '2.25em', lg: '5em' }} color='white'>
                                Solução em Etiquetas {!isWideVersion && 'e'}
                            </Text>
                            <Text textShadow='0px 0px 6px #000000a1;' fontWeight='bold' fontSize={{ base: '2.25em', lg: '5em' }} color='white'>
                                {isWideVersion && 'e'} Bobinas Térmicas
                            </Text>
                        </Text>

                        <Box maxWidth='837px'>
                            <Text
                                textShadow='0px 0px 6px #000000a1;'
                                w={{ base: '100%', lg: '100%' }}
                                fontWeight='sm'
                                fontSize={{ base: '1em', lg: '1.75em' }} color='white'>
                                Etiquetas e Rótulos personalizados para indústria e comércio. Bobinas Térmicas personalizadas.
                                Ribbons, Etiquetadoras, Impressoras Térmicas etc.
                            </Text>
                        </Box>
                        <Button width='12.5em' bg='#1797C6' variant='solid'>
                            <Text fontWeight='bold' >Fale conosco</Text>
                        </Button>
                    </VStack>
                </Flex>
            </Flex>

        </Box >
    )
}