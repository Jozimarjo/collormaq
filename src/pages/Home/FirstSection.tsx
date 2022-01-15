import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import { Header } from "../../components/Header";
export default function FirstSection() {
    return (
        <Box
            width="100%"
            maxWidth="1920px"
            height="935px"
            backgroundImage="linear-gradient(
                91deg, rgb(0 0 109 / 66%), rgb(5 82 46 / 56%) , rgb(9 140 79 / 72%) ),url(/images/home.svg)">
            {/* <Header /> */}
            <Flex mt={['32', '0']} align={['none', 'center']} w='100%' h='100%'>
                <Flex ml={['5', '22em']} direction='column'>
                    <VStack spacing={4} align='left'>
                        <Text as='span'>
                            <Text textShadow='0px 0px 6px #000000a1;' fontWeight='bold' fontSize={['36', '80']} color='white'> Solução em Etiquetas </Text>
                            <Text textShadow='0px 0px 6px #000000a1;' fontWeight='bold' fontSize={['36', '80']} color='white'> e Bobinas Térmicas </Text>
                        </Text>

                        <Box maxWidth='837px'>
                            <Text textShadow='0px 0px 6px #000000a1;' fontWeight='sm' fontSize={['16', '28']} color='white'>
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

        </Box>
    )
}