import { Box, Flex, Text } from "@chakra-ui/react";
import { ScreenSize } from "../../interfaces/ScreenSize";
import { FirstSectionComponent } from '../../components/FirstSection'
interface FirstSection extends ScreenSize {
    title: string,
    subTitle: {
        paragraph: string[]
    }
}
export function FirstSection({ title, subTitle = { paragraph: [] }, isWideVersion = true }: FirstSection) {
    return (
        <FirstSectionComponent
            isWideVersion={isWideVersion}
            bgImage='linear-gradient(
                59deg, #174a96 0%, #098c4f66 100%),url(/images/quem_somos_section_1.svg)'
        >
            <>
                <Flex direction='column' w={{ base: '100%', lg: '100%' }}>
                    <Text
                        as='h1'
                        textShadow='0px 0px 6px #000000a1;'
                        fontWeight='bold'
                        mb='4'
                        fontSize={{ base: '2.25em', md:'54px',lg: '5em' }}
                        color='white'>
                        {title}
                    </Text>
                </Flex>
                <Box maxWidth='844px'>
                    {subTitle.paragraph.map((paragraph) => (
                        <Text
                        as='h2'
                            key={paragraph}
                            textShadow='0px 0px 6px #000000a1;'
                            w={{ base: '100%', lg: '100%' }}
                            fontWeight='normal'
                            mb='4'
                            fontSize={{ base: '1em', md: '28px', lg: '1.75em' }} color='white'>
                            {paragraph}
                        </Text>
                    ))}
                </Box>
            </>
        </FirstSectionComponent >
    )
}


