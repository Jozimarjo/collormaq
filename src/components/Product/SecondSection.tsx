import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import SecondSectionComponent from "../SecondSection";
import secondMaxImg from '../../../public/images/section_2x.svg';
import { FirstSectionComponent } from "../FirstSection";
import { RiArrowRightLine } from "react-icons/ri";

export function ProductSecondSectionComponent() {
    return (
        <>
            <Box my='100px' w='100%' px='1.17em' header={false} opacity='1' height='auto' bgImage='white'>
                <Flex justify='center'>
                    <Box ml='136px' flex='1'>
                        <Image height='550px' src='http://d2r9epyceweg5n.cloudfront.net/stores/902/999/products/bobina-termica-80x4041-1bb5041ed233033c4215512067391815-640-0.png' ></Image>
                    </Box>
                    <Box my='100px' width='55%' >
                        <Text as='h2' fontWeight='bold' color='green.800' fontSize={{ base: '28', lg: '72px' }}>
                            Bobinas termicas com a mais alta qualidade.
                        </Text>

                        <Text as='p' mt='8' w={{ base: '100%', lg: '70%' }} fontWeight='normal' color='#262626' fontSize='16'>
                            Atendemos todas as necessidades da indústria, comércio e serviço.
                            Investimos constantemente em equipamentos de ponta e treinamento de colaboradores,
                            visando crescimento, comprometimento, qualidade dos produtos, e presteza no atendimento aos nossos clientes.
                        </Text>

                        <Button rightIcon={<RiArrowRightLine />} mt='8' p='25px' borderRadius='125px' width='13.5em' bg='green.800' variant='solid'>
                            <Text fontWeight='bold' >Peça seu Orçamento</Text>
                        </Button>

                    </Box>
                    {/* <Box ml='136px' flex='1'>
                        <Image height='550px' src='http://d2r9epyceweg5n.cloudfront.net/stores/902/999/products/bobina-termica-80x4041-1bb5041ed233033c4215512067391815-640-0.png' ></Image>
                    </Box> */}
                </Flex>


            </Box>
        </>

    )
}