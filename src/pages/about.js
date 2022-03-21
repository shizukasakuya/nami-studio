import {SimpleGrid, Image, Text, Box} from '@chakra-ui/react'

export const About =  ()=> {
    return (
        <SimpleGrid 
        minChildWidth="300px" 
        spacing="40px" 
        margin = "auto"
        paddingTop = "20px" 
        paddingBottom = "20px"
        alignItems="center"
        maxWidth="90%"
        >
            <Image
                margin="auto"
                borderRadius="full"
                boxSize="300px"
                src="https://nami.studio/img/icon.png"
                alt="Shizuka Sakuya"
            />
            <Box>
                <Text>
                I’m KuyaNine (he/him), an American 27yo gamer & streamer. Calm yet chatty vTuber. Looking forward to hanging out & playing together.
                </Text>
                <br/>
                <Text>
                Business Inquries:
                </Text>
                <Text>
                sakuya@KuyaNine.com
                </Text>
            </Box>
        </SimpleGrid>
    )
}