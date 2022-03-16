
import { Avatar, Button, Flex, Image, Text, Wrap } from "@chakra-ui/react";

export default function SecondSectionBlog() {
    return (
        <Flex flexDirection={'column'} marginTop={'101px'} marginX={'auto'} borderRadius={'2xl'} w='1200px' h='1024px' padding='50px' bg='#FFF'>
                    <Flex>
                        <Flex width={'520px'} flexDirection="column"> 
                            <Text fontWeight={'bold'} fontSize="48px" color={'#262626'} marginBottom={'51px'}>Highly Delight<br/>Present Tropical<br/>to sub-Tropical Tree</Text>
                            <Text fontWeight={'normal'} fontSize="21px" color={'#262626'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin, felis ac lacinia finibus, odio dolor convallis augue, et rutrum elit quam eget mi(...)
                            </Text>
                            <Flex justifyContent={'space-between'} alignItems={'center'} marginTop={'29px'}>
                                <Flex alignItems={'center'}>
                                    <Avatar />
                                    <Text fontSize={'14px'} color={'#262626'} marginLeft={'10px'}>Autor</Text>
                                </Flex>
                                <Text fontSize={'14px'} color={'#262626'}>14 de Marça de 2022</Text>
                            </Flex>
                            <Button marginTop={'30px'} w={'120px'} h={'35px'} color={'#213472'} bg={'transparent'} border={'1px'}>Leia mais</Button>
                        </Flex>
                        {/* <Box borderRadius={'2xl'} w={'519.5px'} h={'526px'} bg="yellow" marginLeft={'60.5px'}> */}
                            <Image borderRadius={'2xl'} marginLeft={'60.5px'} w={'519.5px'} h={'526px'} objectFit='cover' src='https://bit.ly/dan-abramov' alt='Dan Abramov'/>
                        {/* </Box> */}
                    </Flex>
                    
                    {/* CARDS DE POSTS */}
                    <Wrap spacing={'27px'}>
                        <Flex w={'348.33px'} flexDirection={'column'}>
                            <Image borderRadius={'2xl'} mb={'21.3px'} mt={'50px'} w={'348.33px'} h={'194.46px'} objectFit='cover' src='https://bit.ly/dan-abramov' alt='Dan Abramov'/>
                            <Text mb={'6px'} color={'#1D211F'} fontSize={'21px'}>
                                Highly Delighted Present Tropical to sub-Tropical Tree
                            </Text>
                            <Text mb={'11px'} color={'#1D211F'} fontSize={'12px'}>
                                14 de Março de 2022
                            </Text>
                            <Text color={'#1D211F'} fontSize={'16px'}>
                                Would be the word "and" and the Little Blind Text should turn around and return
                            </Text>
                        </Flex>
                        <Flex w={'348.33px'} flexDirection={'column'}>
                            <Image borderRadius={'2xl'} mb={'21.3px'} mt={'50px'} w={'348.33px'} h={'194.46px'} objectFit='cover' src='https://bit.ly/dan-abramov' alt='Dan Abramov'/>
                            <Text mb={'6px'} color={'#1D211F'} fontSize={'21px'}>
                                Highly Delighted Present Tropical to sub-Tropical Tree
                            </Text>
                            <Text mb={'11px'} color={'#1D211F'} fontSize={'12px'}>
                                14 de Março de 2022
                            </Text>
                            <Text color={'#1D211F'} fontSize={'16px'}>
                                Would be the word "and" and the Little Blind Text should turn around and return
                            </Text>
                        </Flex>
                        <Flex w={'348.33px'} flexDirection={'column'}>
                            <Image borderRadius={'2xl'} mb={'21.3px'} mt={'50px'} w={'348.33px'} h={'194.46px'} objectFit='cover' src='https://bit.ly/dan-abramov' alt='Dan Abramov'/>
                            <Text mb={'6px'} color={'#1D211F'} fontSize={'21px'}>
                                Highly Delighted Present Tropical to sub-Tropical Tree
                            </Text>
                            <Text mb={'11px'} color={'#1D211F'} fontSize={'12px'}>
                                14 de Março de 2022
                            </Text>
                            <Text color={'#1D211F'} fontSize={'16px'}>
                                Would be the word "and" and the Little Blind Text should turn around and return
                            </Text>
                        </Flex>
                    </Wrap>
                </Flex>
    )
}