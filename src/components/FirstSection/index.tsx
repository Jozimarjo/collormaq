import { Box, Flex, VStack } from "@chakra-ui/react";
import React from "react";
import { ScreenSize } from "../../interfaces/ScreenSize";
import Header from "../Header";

interface FirstSection extends ScreenSize {
    bgImage: string;
    children: React.ReactElement
}
export function FirstSectionComponent({ bgImage, children, isWideVersion = true }: FirstSection) {

    return (
        <Box
            width="100%"
            maxWidth="1920px"
            height="935px"
            opacity="0.88"
            px='1.17em'
            backgroundImage={bgImage}>
            <Header isWideVersion={isWideVersion} />
            <Flex mt={{ base: '28', lg: '0' }}
                align={{ base: 'none', lg: 'center' }}
                w='100%' h='100%'>
                <Flex ml={{ base: '0', lg: '3em', xl: '21em' }} direction='column'>
                    <VStack spacing={{base:'0', xl:'8'}} align='left'>
                        {children}
                    </VStack>
                </Flex>
            </Flex>

        </Box >
    )
}