import SecondSectionComponent from "../../components/SecondSection";
import secondMaxImg from '../../../public/images/section_2x.svg';
import { Box, Button, Divider, Flex, HStack, Text, VStack } from "@chakra-ui/react";

export default function SecondSection() {
    const text = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin, felis ac lacinia finibus, odio dolor convallis augue, et rutrum elit quam eget mi.</br>'
    return (
        <SecondSectionComponent img={secondMaxImg}>
            <VStack align={{base:'center', lg:'flex-start'}} spacing={8}>
                <Text fontWeight='bold' color='#414181' lineHeight='53px' maxWidth='510px' fontSize={{ base: '28', lg: '48' }}>
                    Lorem ipsum dolor sit amet
                </Text>
                <Text mt='8' w={{ base: '100%', lg: '530px' }} maxWidth='530px' fontWeight='normal' color='#262626' fontSize='16'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin, felis ac lacinia finibus, odio dolor convallis augue, et rutrum elit quam eget mi.
                </Text>
                <Text mt='8' w={{ base: '100%', lg: '530px' }} maxWidth='530px' fontWeight='normal' color='#262626' fontSize='16'>
                    Maecenas non ornare ante, tincidunt congue libero. Aenean metus justo, hendrerit vel mauris eu, bibendum laoreet sapien.
                    Aliquam erat volutpat.
                </Text>
                <Text mt='8' w={{ base: '100%', lg: '530px' }} maxWidth='530px' fontWeight='normal' color='#262626' fontSize='16'>
                    Nam vel ultrices dolor. Curabitur maximus posuere rutrum. Pellentesque euismod turpis non mollis sollicitudin.
                </Text>

                <Button width='12.5em' bg='#414181' variant='solid'>
                    <Text fontWeight='bold' >Fale conosco</Text>
                </Button>

                <HStack spacing='8'>
                    <Box>
                        <Text fontWeight='bold' fontSize='40px' color='#262626'>5%</Text>
                        <Text fontWeight='normal' fontSize='21px' color='#707070'>Lorem ipsum</Text>
                    </Box>
                    <Divider orientation='vertical' height='84px'></Divider>
                    <Box>
                        <Text fontWeight='bold' fontSize='40px' color='#262626'>26K</Text>
                        <Text fontWeight='normal' fontSize='21px' color='#707070'>Lorem ipsum</Text>
                    </Box>
                </HStack>
            </VStack>
        </SecondSectionComponent>
    )
}