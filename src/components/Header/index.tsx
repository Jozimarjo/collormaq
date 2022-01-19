import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Profile } from "./Profile";
import { MenuIconsNav } from "./MenuIconsNav";
import { SearchBox } from "./SearchBox";
import { Logo } from "./Logo";
import { useEffect, useState } from "react";
import { ScreenSize } from "../../interfaces/ScreenSize";

export default function Header({ isWideVersion }: ScreenSize) {
    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1200}
            h="16"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >
            <Logo />
            <Flex align="center" ml="auto">
                {isWideVersion && <MenuIconsNav />}
            </Flex>
        </Flex>
    )
}