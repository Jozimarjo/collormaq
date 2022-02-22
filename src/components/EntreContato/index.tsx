import { Box, Button, Flex, Text } from "@chakra-ui/react";

export function EntreContato() {
    return (
        <Box as='section' w='100%' height={{ base: '248px', md: '440px' }}
            backgroundImage='linear-gradient(0deg, rgb(33 52 114 / 72%) 0%, rgb(33 52 114 / 26%) 100%),url(/images/footer.svg)'
            backgroundRepeat='no-repeat'>
            <Flex direction='column' justify="center" alignItems="center" height="100%">
                <Text mb='8' fontSize={{ base: '28', md: "60" }} fontWeight="bold">Entre em Contato</Text>
                <Button width='12.5em' bg='#047a43' variant='solid'>
                    <Text fontWeight='bold'>Peça um orçamento</Text>
                </Button>
            </Flex>
        </Box>
    )
}