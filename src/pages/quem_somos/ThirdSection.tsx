import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";

export default function ThirdSection() {
    return (
        <Box display='flex' p='30px' flexDirection='column' justifyContent='space-around' alignItems={{ base: 'flex-start', sm: 'center' }} background='#414181' w='100%'>
            <Flex ml={{ base: '0', sm: '0' }} maxWidth='586px' direction='column' align={{ base: 'flex-start', sm: 'center' }} justify='center' width='100%' my='16' >
                <Text fontSize={{ base: '28px', sm: '48px' }} mb='28px' textAlign={{base:'left', sm: 'center' }} fontWeight='bold'>Nossos diferencias</Text>
                <Text fontSize='16px' fontWeight='normal' lineHeight='24px' textAlign={{ sm: 'center' }}>Nosso compromisso com produtos de qualidade e entrega ágil segue sendo nosso principal diferencial frente a concorrência.</Text>
            </Flex>
            <HStack flexWrap='wrap' justify="center" spacing={{ base: '0', md: "12" }} rowGap='10' width={{ base: '100%', '2xl': '100%' }}>

                <VStack ml={{ base: '0', md: '12' }} h={{ base: '100%', md: '330px' }} spacing="8" maxWidth={{ base: "367px", '2xl': '30%' }} align="start">
                    <Box display='flex' justifyContent='center' alignItems='center' w='62px' h='62px' borderRadius='50%' background='white'>
                        <Text fontSize='36px' color='#414181' fontWeight='bold'>1</Text>
                    </Box>
                    <Text fontSize={{ base: '28', sm: '36px' }} lineHeight='45px' fontWeight='bold'>Produção Própria</Text>
                    <Text fontSize='16px' fontWeight='normal'>Produzimos e comercializamos bobinas térmicas, etiquetas e rótulos em diversos substratos. Também revendemos diversos suprimentos do setor comercial.</Text>
                </VStack>

                <VStack h={{ base: '100%', md: '330px' }} spacing="8" maxWidth={{ base: "367px", '2xl': '30%' }} align="start">
                    <Box display='flex' justifyContent='center' alignItems='center' w='62px' h='62px' borderRadius='50%' background='white'>
                        <Text fontSize='36px' color='#414181' fontWeight='bold'>2</Text>
                    </Box>
                    <Text fontSize={{ base: '28', sm: '36px' }} lineHeight='45px' fontWeight='bold'>Agregamos valor ao produto</Text>
                    <Text fontSize='16px' fontWeight='normal'>Com um rótulo/etiqueta bem trabalhada, seu cliente entenderá que sua empresa se preocupa com os detalhes, o que trará uma visão diferenciada ao seu produto.</Text>
                </VStack>

                <VStack h={{ base: '100%', md: '330px' }} spacing="8" maxWidth={{ base: "367px", '2xl': '30%' }} align="start">
                    <Box display='flex' justifyContent='center' alignItems='center' w='62px' h='62px' borderRadius='50%' background='white'>
                        <Text fontSize='36px' color='#414181' fontWeight='bold'>3</Text>
                    </Box>                    <Text fontSize={{ base: '28', sm: '36px' }} lineHeight='45px' fontWeight='bold'>Excelência em Atendimento</Text>
                    <Text fontSize='16px' fontWeight='normal'>Nosso atendimento é personalizado, focado em entender e atender as diversas necessidades do cliente.</Text>
                </VStack>

                <VStack h={{ base: '100%', md: '330px' }} spacing="8" maxWidth={{ base: "367px", '2xl': '30%' }} align="start">
                    <Box display='flex' justifyContent='center' alignItems='center' w='62px' h='62px' borderRadius='50%' background='white'>
                        <Text fontSize='36px' color='#414181' fontWeight='bold'>4</Text>
                    </Box>                    <Text fontSize={{ base: '28', sm: '36px' }} lineHeight='45px' fontWeight='bold'>Crescimento contínuo</Text>
                    <Text fontSize='16px' fontWeight='normal'>Investimos no desenvolvimento e na melhoria contínua de nossos serviços através das novas tecnologias presentes no mercado.</Text>
                </VStack>

                <VStack h={{ base: '100%', md: '330px' }} spacing="8" maxWidth={{ base: "367px", '2xl': '30%' }} align="start">
                    <Box display='flex' justifyContent='center' alignItems='center' w='62px' h='62px' borderRadius='50%' background='white'>
                        <Text fontSize='36px' color='#414181' fontWeight='bold'>5</Text>
                    </Box>                    <Text fontSize={{ base: '28', sm: '36px' }} lineHeight='45px' fontWeight='bold'>Entrega</Text>
                    <Text fontSize='16px' fontWeight='normal'>Contamos com entregas ágeis, especializadas e de confiança para a entrega dos nossos produtos.</Text>
                </VStack>

                <VStack h={{ base: '100%', md: '330px' }} spacing="8" maxWidth={{ base: "367px", '2xl': '30%' }} align="start">
                    <Box display='flex' justifyContent='center' alignItems='center' w='62px' h='62px' borderRadius='50%' background='white'>
                        <Text fontSize='36px' color='#414181' fontWeight='bold'>6</Text>
                    </Box>                    <Text fontSize={{ base: '28', sm: '36px' }} lineHeight='45px' fontWeight='bold'>Personalização</Text>
                    <Text fontSize='16px' fontWeight='normal'>Configuramos a arte do cliente para a personalização de rótulos, etiquetas e bobinas térmicas.</Text>
                </VStack>
            </HStack>
        </Box>
    )
}