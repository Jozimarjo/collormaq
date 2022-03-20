import { Box, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";

export function PostsRelated() {
    return (
        <Box w={'1200px'} marginX={'auto'} mb={'111px'} mt={'100px'}>
            <Heading mb={'60px'} color={'#262626'}>Posts Relacionados</Heading>
            <HStack w={'100%'} spacing={'30px'}>
                <Flex w={'380px'} flexDirection={'column'} cursor={'pointer'}>
                    <Image w={'100%'} h={'220px'} borderRadius={'2xl'} mb={'30px'} src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                    <Text lineHeight={'32px'} fontSize={'24px'} color={'#262626'} mb={'14px'}>Highly Delighted Present Tropical to sub-Tropical Tree</Text>
                    <Text fontSize={'18px'} color={'#262626'}>Autor</Text>
                </Flex>
                <Flex w={'380px'} flexDirection={'column'} cursor={'pointer'}>
                    <Image w={'100%'} h={'220px'} borderRadius={'2xl'} mb={'30px'} src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                    <Text lineHeight={'32px'} fontSize={'24px'} color={'#262626'} mb={'14px'}>Highly Delighted Present Tropical to sub-Tropical Tree</Text>
                    <Text fontSize={'18px'} color={'#262626'}>Autor</Text>
                </Flex>
                <Flex w={'380px'} flexDirection={'column'} cursor={'pointer'}>
                    <Image w={'100%'} h={'220px'} borderRadius={'2xl'} mb={'30px'} src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                    <Text lineHeight={'32px'} fontSize={'24px'} color={'#262626'} mb={'14px'}>Highly Delighted Present Tropical to sub-Tropical Tree</Text>
                    <Text fontSize={'18px'} color={'#262626'}>Autor</Text>
                </Flex>
            </HStack>
        </Box>
    )
    
}