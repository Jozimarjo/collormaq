import { Box, ChakraProps, Flex, VStack } from "@chakra-ui/react";
import React from "react";
import { ScreenSize } from "../../interfaces/ScreenSize";
import Header from "../Header";

interface FirstSection extends ScreenSize, ChakraProps {
    bgImage: string;
    children: React.ReactElement
}
export function FirstSectionComponent({ bgImage, children, isWideVersion = true, ...rest }: FirstSection) {

    return (
        <Box
            width="100%"
            maxWidth="1920px"
            height="935px"
            opacity="0.88"
            px='1.17em'
            {...rest}
            backgroundImage={bgImage}>
            <Header isWideVersion={isWideVersion} />
            <Flex
                align={{ base: 'none', md: 'center' }}
                w='100%' h='100%'>
                <Flex ml={{ base: '0', md: '10em', xl: '20em' }} direction='column'>
                    <VStack spacing={{ base: '4', xl: '8' }} align='left'>
                        {children}
                    </VStack>
                </Flex>
            </Flex>

        </Box >
    )
}