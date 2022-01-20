import { Flex, useBreakpointValue } from "@chakra-ui/react";
import FirstSection from "./FirstSection";
import FiveSection from "./FiveSection";
import FourthSection from "./FourthSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

export default function Home() {
    let isWideVersion = useBreakpointValue({
        base: false,
        sm: false,
        md: false,
        lg: true
    });
    return (
        <>
            <Flex w='100%' h='100%' direction='column'>
                <FirstSection isWideVersion={isWideVersion} />
                <SecondSection />
                <ThirdSection />
                <FourthSection />
                <FiveSection isWideVersion={isWideVersion} />
            </Flex>
        </>
    )
}