import { Box, Button, Flex, Text } from "@chakra-ui/react";
export default function FirstSection() {
    return (
        <Box
            maxWidth="1920px"
            height="935px"
            backgroundImage="url('/images/home.svg')">
            <Flex align="center" w='100%' h='100%'>
                <Flex ml='22em' direction='column'>
                    <Text fontWeight='bold' fontSize='80' color='white'> Solução em Etiquetas </Text>
                    <Text fontWeight='bold' fontSize='80' color='white'> e Bobinas Térmicas </Text>
                    <Box maxWidth='837px'>
                        <Text fontWeight='sm' fontSize='28' color='white'>
                            Etiquetas e Rótulos personalizados para indústria e comércio. Bobinas Térmicas personalizadas.
                            Ribbons, Etiquetadoras, Impressoras Térmicas etc.
                        </Text>
                    </Box>
                    <Button width='12.5em' bg='#1797C6' variant='solid'>
                        <Text fontWeight='bold' >Fale conosco</Text>
                    </Button>
                </Flex>
            </Flex>

        </Box>
    )
}