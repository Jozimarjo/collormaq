import Image from "next/image";
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
        <Image src={logo} alt="Rocketshoes" width={213}
            height={64} />

    )
}