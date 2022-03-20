import { Box, Button, Flex, HStack, Image, Input, Stack, Text, Wrap } from "@chakra-ui/react";
import { FiSearch } from 'react-icons/fi'
export function FristSectionFiles() {
    return (
        <Box w={'1200px'} marginX={'auto'} mb={'185.83px'}>
            
            <Flex mt={'95px'} mb={'97px'} color={'#262626'} w={'100%'} alignItems={'center'} justifyContent={'space-between'}>
                <Text fontWeight={'bold'} fontSize={'60px'}>Resultado da busca</Text>

                <Flex w={'320px'} h={'60px'} alignItems={'center'}>
                    <Input type={'text'} border={'1px'} borderColor={'#414181'} placeholder="Pesquisar" borderRadius={'5px 0 0 5px'} />
                    <Button bg={'#414181'} alignItems={'center'} justifyContent={'center'} w={'60px'} borderRadius={'0 5px 5px 0'}>
                        <FiSearch color="#FFFFFF" />
                    </Button>
                </Flex>
            </Flex>

            <Wrap spacing={'30px'} w={'1200px'}>
                <Flex flexDirection={'column'} w={'380px'}>
                    <Image mb={'23.3px'} borderRadius={'2xl'} w={'380px'} h={'194.46px'} src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                    <Text mb={'6px'} fontSize={'21px'} lineHeight={'28px'} color={'#1D211F'}>Highly Delighted Present Tropical to sub-Tropical Tree</Text>
                    <Text mb={'12px'} fontSize={'12px'} color={'#1D211F'}>10 de Março de 2022</Text>
                    <Text fontSize={'16px'} color={'#1D211F'}>Would be the word "and" and the Little Blind Text should turn around and return</Text>
                </Flex>
                <Flex flexDirection={'column'} w={'380px'}>
                    <Image mb={'23.3px'} borderRadius={'2xl'} w={'380px'} h={'194.46px'} src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                    <Text mb={'6px'} fontSize={'21px'} lineHeight={'28px'} color={'#1D211F'}>Highly Delighted Present Tropical to sub-Tropical Tree</Text>
                    <Text mb={'12px'} fontSize={'12px'} color={'#1D211F'}>10 de Março de 2022</Text>
                    <Text fontSize={'16px'} color={'#1D211F'}>Would be the word "and" and the Little Blind Text should turn around and return</Text>
                </Flex>
                <Flex flexDirection={'column'} w={'380px'}>
                    <Image mb={'23.3px'} borderRadius={'2xl'} w={'380px'} h={'194.46px'} src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                    <Text mb={'6px'} fontSize={'21px'} lineHeight={'28px'} color={'#1D211F'}>Highly Delighted Present Tropical to sub-Tropical Tree</Text>
                    <Text mb={'12px'} fontSize={'12px'} color={'#1D211F'}>10 de Março de 2022</Text>
                    <Text fontSize={'16px'} color={'#1D211F'}>Would be the word "and" and the Little Blind Text should turn around and return</Text>
                </Flex>
                <Flex flexDirection={'column'} w={'380px'}>
                    <Image mb={'23.3px'} borderRadius={'2xl'} w={'380px'} h={'194.46px'} src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                    <Text mb={'6px'} fontSize={'21px'} lineHeight={'28px'} color={'#1D211F'}>Highly Delighted Present Tropical to sub-Tropical Tree</Text>
                    <Text mb={'12px'} fontSize={'12px'} color={'#1D211F'}>10 de Março de 2022</Text>
                    <Text fontSize={'16px'} color={'#1D211F'}>Would be the word "and" and the Little Blind Text should turn around and return</Text>
                </Flex>
                <Flex flexDirection={'column'} w={'380px'}>
                    <Image mb={'23.3px'} borderRadius={'2xl'} w={'380px'} h={'194.46px'} src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                    <Text mb={'6px'} fontSize={'21px'} lineHeight={'28px'} color={'#1D211F'}>Highly Delighted Present Tropical to sub-Tropical Tree</Text>
                    <Text mb={'12px'} fontSize={'12px'} color={'#1D211F'}>10 de Março de 2022</Text>
                    <Text fontSize={'16px'} color={'#1D211F'}>Would be the word "and" and the Little Blind Text should turn around and return</Text>
                </Flex>
                <Flex flexDirection={'column'} w={'380px'}>
                    <Image mb={'23.3px'} borderRadius={'2xl'} w={'380px'} h={'194.46px'} src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                    <Text mb={'6px'} fontSize={'21px'} lineHeight={'28px'} color={'#1D211F'}>Highly Delighted Present Tropical to sub-Tropical Tree</Text>
                    <Text mb={'12px'} fontSize={'12px'} color={'#1D211F'}>10 de Março de 2022</Text>
                    <Text fontSize={'16px'} color={'#1D211F'}>Would be the word "and" and the Little Blind Text should turn around and return</Text>
                </Flex>
            </Wrap>

            <Flex mt={'66px'} w={'100%'} justifyContent={'center'} alignItems={'center'}>
                <HStack spacing={'5px'}>
                    <Button w={'34'} h={'34'} borderRadius={'5px'} bg={'#414181'}>1</Button>
                    <Button w={'34'} h={'34'} borderRadius={'5px'} border={'1px'} borderColor={'#414181'} color={'#414181'}>2</Button>
                    <Button w={'34'} h={'34'} borderRadius={'5px'} border={'1px'} borderColor={'#414181'} color={'#414181'}>3</Button>
                </HStack>
            </Flex>

        </Box>
    )
}