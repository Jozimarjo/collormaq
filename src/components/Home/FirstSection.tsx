import { Box, Button, Flex, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { FirstSectionComponent } from "../../components/FirstSection";
import { ScreenSize } from "../../interfaces/ScreenSize";

export function FirstSection({ isWideVersion = true }: ScreenSize) {

    return (
        <FirstSectionComponent
            isWideVersion={isWideVersion}
            bgImage="linear-gradient(59deg, #17179659 0%, #098c4f96 100%),url(/images/home.svg)">
            <>
                <Flex direction="column" w={{ base: '100%', lg: '100%' }}>
                    <Text
                        as='h1'
                        textShadow='0px 0px 6px #000000a1;'
                        lineHeight='70px'
                        fontWeight='bold'
                        fontSize={{ base: '2.25em', lg: '5em' }}
                        color='white'>
                        Solução em Etiquetas {!isWideVersion && 'e'}
                    </Text>
                    <Text
                        as='h2'
                        textShadow='0px 0px 6px #000000a1;'
                        fontWeight='bold'
                        fontSize={{ base: '2.25em', lg: '5em' }}
                        color='white'>
                        {isWideVersion && 'e'} Bobinas Térmicas
                    </Text>
                </Flex>

                <Box maxWidth='837px' mb='16px'>
                    <Text
                        as='h2'
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
            </>
        </FirstSectionComponent>
    )
}