import { ChakraProps, Flex } from "@chakra-ui/react";
import { MenuIconProps, MenuIconsNav } from "./MenuIconsNav";
import { Logo } from "./Logo";
import { ScreenSize } from "../../interfaces/ScreenSize";


interface HeaderProps extends ScreenSize, MenuIconProps {

}
export default function Header({ isWideVersion = true, color, ...rest }: HeaderProps) {
    return (
        <Flex
            as="header"
            w="100%"
            h="16"
            pt='4'
            justify={{ base: 'start', lg: "space-around" }}
            mx="auto"
            pl={{ base: '0', md: '0', xl: '3,75em' }}
            align="center"
            {...rest}
        >
            <Logo />
            <Flex align="center">
                {!!isWideVersion && (<MenuIconsNav color={color} />)}
            </Flex>
        </Flex>
    )
}