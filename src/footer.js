import { Text, Grid, Flex, Button, Spacer, Heading } from "@chakra-ui/react"



export const Footer = () => {
    return (
        <Flex alignItems="flex-end">
            <Text fontSize="sm" paddingLeft = "4px" >
                 nami-studio 
            </Text>
            <Spacer />
            <Text fontSize="sm" paddingRight = "4px"  >
                 shizuka sakuya
            </Text>
        </Flex>
    )
}