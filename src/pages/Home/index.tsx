import { Flex } from "@chakra-ui/react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

export default function Home() {
    return (
        <>
            <Flex w='100%' h='100%' className='Jozimar' direction='column'>
                <FirstSection />
                <SecondSection />
                <ThirdSection />
            </Flex>
        </>
    )
}