import { Box, Grid, Flex, Spacer, Heading } from "@chakra-ui/react"
import { ColorModeSwitcher, TwitchIcon, DiscordIcon} from "./header-icons"
import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <Flex grow="true" padding="2">
            <Box p="2" paddingRight="0">
                <Link to="/">
                 <Heading size="lg">Nami Studio</Heading>
                </Link>
            </Box>
            <Spacer />
            <Box>
                <TwitchIcon marginLeft="0" justifySelf="flex-end" />
                <DiscordIcon justifySelf="flex-end"/>
                <ColorModeSwitcher justifySelf="flex-end" />
            </Box>
        </Flex>
    )
}

