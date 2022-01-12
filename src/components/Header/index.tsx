import { Flex } from "@chakra-ui/react";
import { Profile } from "./Profile";
import { MenuIconsNav } from "./MenuIconsNav";
import { SearchBox } from "./SearchBox";
import { Logo } from "./Logo";

export function Header() {
    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1200}
            h="16"
            mx="auto"
            mt="0"
            px="6"
            align="center"
        >
            <Logo />

            {/* <SearchBox /> */}
            <Flex align="center" ml="auto">
                <MenuIconsNav />

                {/* <Profile /> */}
            </Flex>
        </Flex>
    )
}