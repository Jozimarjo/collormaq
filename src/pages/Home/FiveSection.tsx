import { Box, Divider, Flex, Icon } from "@chakra-ui/react";
import { RiFacebookFill } from "react-icons/ri";

export default function FiveSection() {
    return (
        <Box w='100%' height='900px' backgroundImage="linear-gradient(69deg, rgba(10,27,74,1) 0%, rgba(48,95,60,1) 79%)">
            <Flex justify="space-evenly">
                {/* <Icon src={RiFacebookFill} c></Icon> */}
            </Flex>
            <Flex>
                <Flex>

                </Flex>
                <Divider></Divider>
                <Box>

                </Box>
            </Flex>
        </Box>
    )
}