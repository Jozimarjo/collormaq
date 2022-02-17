import { Box, Button, Image, Text, VStack } from "@chakra-ui/react";

interface CityCard {
    img: string;
    title: string;
    description: string;
}
export default function CityCard({ img, title, description }: CityCard) {
    return (
        <Box maxW='sm' height='485px' overflow='hidden'>
            <Image src={img} alt='img alt' />

            <VStack align='start' spacing='4' direction='column'>
                <Box display='flex' alignItems='baseline'>
                    <Text
                        color='#305F3C'
                        fontWeight='bold'
                        letterSpacing='wide'
                        fontSize='36'
                    >
                        {title}
                    </Text>
                </Box>

                <Text
                    color='#262626'
                    fontSize={{ base: '13px', md: '13px', lg: '16' }}
                    textAlign='left'
                >
                    {description}
                </Text>

                <Button width='168px' bg='#305F3C' variant='solid'>
                    <Text fontWeight='bold' >Ver no mapa</Text>
                </Button>
            </VStack>
        </Box>
    )
}