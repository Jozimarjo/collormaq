import { Box, Image } from "@chakra-ui/react";
import logo from '../../assets/images/MARCA_COLLORMAQ_2021.svg';

export function Logo() {
    return (
        // <Text
        //     fontSize="3xl"
        //     fontWeight="bold"
        //     letterSpacing="tight"
        //     w="64"
        // >
        //     dashgo
        //     <Text as="span" ml="1" color="pink.500" >.</Text>
        // </Text>
        <Box width={['167px', '213px']} minWidth={167} >
            <Image src={logo} alt="Rocketshoes" width={['167px', '213px']}
                height={64} />

        </Box>

    )
}