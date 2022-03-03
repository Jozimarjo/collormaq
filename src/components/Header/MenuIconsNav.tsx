import { HStack, Icon, Link, Text } from "@chakra-ui/react";
import { RiSearchLine } from 'react-icons/ri'

export function MenuIconsNav() {
    return (
        <HStack as='nav' spacing="4" mx="8" pr="8" py="1" color="gray.300"  borderColor="gray.700" >
            <Link href="/">
                <Text fontWeight='bold' color='white'>Home</Text>
            </Link>
            <Link href="/quem_somos">
                <Text fontWeight='bold' color='white'>Quem somos</Text>
            </Link>
            <Link href="/contato">
                <Text fontWeight='bold' color='white'>Contato</Text>
            </Link>
            <Link>
                <Text fontWeight='bold' color='white'>Menu 4</Text>
            </Link>
            <Icon as={RiSearchLine} fontSize="20" />
        </HStack>
    )
}