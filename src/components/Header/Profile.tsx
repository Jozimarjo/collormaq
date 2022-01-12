import { Flex, Box, Avatar, Text } from '@chakra-ui/react'

export function Profile() {
    return (
        <Flex alignItems='center'>
            <Box mr="4" textAlign="right">
                <Text>collormaq</Text>
                <Text color="gray.300" fontSize="small">collormaq@collormarq.com.br</Text>
            </Box>
            <Avatar size="md" name="Jozimar Queiroz" src="https://github.com/jozimarjo.png"></Avatar>
        </Flex>
    )
}