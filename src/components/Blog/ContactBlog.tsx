import { Button, Flex, Text } from "@chakra-ui/react";


export function ContactBlog() {
    return (
        <Flex mt={'111px'} justifyContent={'center'} w={'100%'} h={'440px'}
                    bg='linear-gradient(59deg, #174a96 0%, #098c4f66 100%)'
                >
                    <Flex flexDirection={'column'} w='1200px' alignItems={'center'} justifyContent={'center'}>
                        <Text fontSize={'60px'} fontWeight={'bold'} mb={'34px'}>Entre em contato</Text>
                        <Button bg={'#098C4F'}>Peça um orçamento</Button>
                    </Flex>
                </Flex>
    )
}