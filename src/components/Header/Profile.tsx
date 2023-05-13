import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex
            align="center"
        >
            <Box mr="4" textAlign="right">
                <Text>Rafael Araujo</Text>
                <Text color="gray.300" fontSize="small">rafa12gmail.com</Text>
            </Box>

            <Avatar size="md" name="Rafael araujo" />
        </Flex>
    )
} 