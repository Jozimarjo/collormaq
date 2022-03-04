import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import SecondSectionComponent from "../../components/SecondSection";

import secondMaxImg from '../../../public/images/section_2x.svg';

export function FourthSection() {
    return (
        <SecondSectionComponent img={secondMaxImg}>
            <VStack align={{ base: 'center', lg: 'flex-start' }} spacing={8}>
                <Text as='h2' fontWeight='bold' color='#414181' lineHeight='53px' maxWidth='510px' fontSize={{ base: '28', lg: '48' }}>
                    Missão, Visão e valores
                </Text>
                <Text as='p' mt='8' w={{ base: '100%', lg: '530px' }} maxWidth='530px' fontWeight='normal' color='#262626' fontSize='16'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin, felis ac lacinia finibus, odio dolor convallis augue, et rutrum elit quam eget mi. Maecenas non ornare ante, tincidunt congue libero. Aenean metus justo, hendrerit vel mauris eu, bibendum laoreet sapien. Aliquam erat volutpat. Nam vel ultrices dolor. Curabitur maximus posuere rutrum. Pellentesque euismod turpis non mollis sollicitudin.                </Text>

                <Button width='12.5em' bg='#414181' variant='solid'>
                    <Text fontWeight='bold' >Fale conosco</Text>
                </Button>
                
            </VStack>
        </SecondSectionComponent>

    );
}