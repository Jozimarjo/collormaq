import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { ScreenSize } from "../../interfaces/ScreenSize";

interface SecondSectionProps {
    img: string;
    children: React.ReactElement;
}
export default function SecondSectionComponent({ img, children }: SecondSectionProps) {
    return (
        <Box as='section' width='100%' p='4' my='125px' bgColor='gray.100'>
            <Flex
                direction={{ base: 'column', lg: 'row' }}
                justify='space-evenly'
                alignItems='center'
                w='100%'
                h='100%'>
                <Box display='flex' justifyContent='center' w={{ base: '315px', lg: '525px' }} >
                    <Image alt="pointer maps icon" src={img} />
                </Box>


                <Flex p={{ base: '5', lg: '7' }} alignSelf={{ base: 'flex-start', sm: 'center' }} alignItems={{ base: 'flex-start', sm: 'center' }} direction='column'>
                    {children}
                </Flex>
            </Flex>
        </Box>
    )
}