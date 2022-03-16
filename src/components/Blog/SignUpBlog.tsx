import { Button, Flex, Input, Text } from "@chakra-ui/react";


export function SignUpBlog() {
    return (
        <Flex mt={'100px'} justifyContent={'center'} w={'100%'} h={'250px'}
                    bg='linear-gradient(59deg, #174a96 0%, #098c4f66 100%)'
                >
                    <Flex w='1200px' alignItems={'center'}>
                        <Flex flexDirection={'column'}>
                            <Text fontWeight={'bold'} fontSize={'48px'}>Inscreva-se em nosso blog</Text>
                            <Text fontSize={'21px'}>Acesse, em primeira mão, nossos principais posts diretamente em seu email</Text>
                        </Flex>
                        <Flex marginLeft={'60px'}>
                            <Input borderRadius={"5px 0 0 5px"} w={'296px'} h={'40px'} placeholder="Email..."></Input>
                            <Button borderRadius={"0 5px 5px 0"} w={'100px'} h={'40px'} bg={'#fff'} color={'#305F3C'}>Enviar</Button>
                        </Flex>
                    </Flex>
                </Flex>
    )
}