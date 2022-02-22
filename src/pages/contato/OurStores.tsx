import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import CityCard from "./CityCard";

export default function OurStores() {
    const cards = [
        {
            img: '/images/quem_somos_section_1.svg', title: 'Manaus',
            description: 'Rua Maurice Ravel, 175 - Shangrila VII - Parque Dez de Novembro.CEP: 69054 - 759 - Manaus / AM. Fones: (92) 3654 - 7373 / 3634 - 6204. E - mail: collormaq.am@collormaq.com.br'
        },
        { img: '/images/quem_somos_section_1.svg', title: 'Boa Vista', description: 'Av. Ataide Teive, 3270 - Buritis. CEP: 69000-000 - Boa Vista/RR. Fones: (95) 3626-0550 / 3626-0838. E-mail: collormaq.rr@collormaq.com.br' },
        { img: '/images/quem_somos_section_1.svg', title: 'Porto Velho', description: 'Av. Guaporé, 395 - Agenor de Carvalho. CEP: 76.820-277 - Porto Velho/RO. Fones: (69) 3224-8204 / 3026-3103. E-mail: collormaq.ro@collormaq.com.br' },
    ]

    return (
        <Box as='section' width='100%' p='30px' background='#f9f9f9' borderBottom='1px solid #eee' textAlign='center'>
            <Flex direction='column' align='center' mb='70px'>
                <Text as='h1' textAlign={{ base: 'left', md: 'center' }} mb='8' fontSize={{ base: '28', md: '48' }} color='#305F3C' fontWeight='bold'>Visite uma de nossas lojas</Text>
                <Text as='h2' textAlign={{ base: 'left', md: 'center' }} maxWidth='586px' fontSize='16' color='#262626'>Dispomos de 03 Unidades para melhor servi-lo com qualidade e equipe especializada a tirar todas as suas dúvidas.</Text>
            </Flex>
            <Stack direction={{ base: 'column', md: 'row' }} justify='center' align='center' spacing="8">
                {
                    cards.map(card => (
                        <CityCard key={card.title} img={card.img} title={card.title} description={card.description} />
                    ))
                }
            </Stack>
        </Box>
    )
}