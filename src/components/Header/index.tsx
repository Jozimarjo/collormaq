import { Flex } from "@chakra-ui/react";
import { MenuIconsNav } from "./MenuIconsNav";
import { Logo } from "./Logo";
import { ScreenSize } from "../../interfaces/ScreenSize";

export default function Header({ isWideVersion = true }: ScreenSize) {
    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1200}
            h="16"
            pt='4'
            mx="auto"
            pl={{ base: '0', md: '0', xl: '3,75em' }}
            align="center"
        >
            <Logo />
            <Flex align="center" ml="auto">
                {!!isWideVersion && (<MenuIconsNav />)}
            </Flex>
        </Flex>
    )
}