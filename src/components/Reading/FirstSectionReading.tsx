import { Avatar, Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function FirstSectionReading() {
    return (
        <Box w={'900px'} marginX={'auto'}>
            <Heading mt={'98px'} mb={'60px'} color={'#262626'}>Highly Delighted Present</Heading>
            <Text mb={'60.50px'} color={'#262626'} fontWeight={'bold'} fontSize={'1rem'}>
                Morbi mollis vestibulum sollicitudin. Nunc in eros a justo facilisis rutrum.
                Aenean id ullamcorper libero. Vestibulum imperdiet nibh vel magna lacinia ultrices.
                Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna,
                condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aliquam vulputate, tortor nec commodo ultricies,
                vitae viverra urna nulla sed turpis. Nullam lacinia faucibus risus,
                a euismod lorem tincidunt id.
            </Text>
            <Flex mb={'60px'} justifyContent={'space-between'}>
                <Text fontSize={'18px'} color={'#262626'}>Autor</Text>
                <Text fontSize={'18px'} color={'#262626'}>23 de Abril de 2022</Text>
            </Flex>
            <Image mb={'59.62px'} w={'100%'} h={'400px'} src='https://www.inteligenciaderiscos.com.br/wp-content/uploads/2016/09/entrega-a-domicilio-600x270.jpg' />
            <Text color={'#262626'} fontSize={'1rem'} lineHeight={'24px'}>
                Morbi mollis vestibulum sollicitudin. Nunc in eros a justo facilisis rutrum. Aenean id ullamcorper libero. Vestibulum imperdiet
                nibh vel magna lacinia ultrices. Sed id interdum urna. Aenean id ullamcorper libero.
                Morbi mollis vestibulum sollicitudin. Nunc in eros a justo facilisis rutrum. Aenean id ullamcorper libero. Vestibulum imperdiet
                nibh vel magna lacinia ultrices. Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a
                vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate, tortor nec commodo
                ultricies, vitae viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id.
                <br/><br/>
                Donec maximus placerat tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                Suspendisse faucibus sed dolor eget posuere.Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna,
                condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet<br/><br/>
            </Text>
            <Text color={'#262626'} fontSize={'1rem'} lineHeight={'24px'}>
                Donec maximus placerat tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                Suspendisse faucibus sed dolor eget posuere.Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna,
                condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit ametVestibulum imperdiet nibh vel magna lacinia ultrices.
                Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. faucibus risus, a euismod lorem tincidunt id.
                <br/><br/>
                Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus
                urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate,
                tortor nec commodo ultricies, vitae viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id.<br/><br/>
            </Text>
            <Text color={'#262626'} fontSize={'1rem'} lineHeight={'24px'}>
                Vestibulum sollicitudin. Nunc in eros a justo facilisis rutrum. Aenean id ullamcorper libero. Vestibulum imperdiet nibh vel magna
                lacinia ultrices. Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a,
                hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate, tortor nec commodo
                ultricies,viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id. Suspendisse faucibus sed dolor
                eget posuere.
                <br/><br/>
                Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi
                Lorem ipsum dolor sit ametVestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. Nam ac elit a ante
                commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet.
            </Text>

            <Flex w={'900px'} mt={'90.1px'} mb={'100px'} justifyContent={'center'}>
                <Flex w={'89%'} alignItems={'center'}>
                    <Image zIndex={'1'} position={'relative'} borderRadius={'full'} w={'287px'} h={'287px'} src='https://bit.ly/sage-adebayo' />
                    <Flex ml={'100px'} w={'700px'} h={'240px'} position={'absolute'} justifyContent={'center'} borderRadius={'2xl'} flexDirection={'column'} bg={'#ECECEC'}>
                        <Flex flexDirection={'column'} ml={'220px'}>
                            <Text color={'#262626'} fontSize={'21px'} lineHeight={'28px'}>Autor</Text>
                            <Text color={'#262626'} fontSize={'36px'}>Rodrigo Scarpa</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>

        </Box>
        )
}