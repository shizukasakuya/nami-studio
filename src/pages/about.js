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
                The name is Kuya (koo- ya), 
                </Text>
                <br/>
                <Text>
                I stream randomly at the moment! Usually daily at around 1am PST, but the times are subject to change!
                </Text>
                <Text>

                Full name is Shizuka Sakuya (Quiet Last Night) and I'm a kitsune-cat-neko-deity who codes, games, and is perpetually caught within an existentialist progression system.
                </Text>
                <br/>
                <Text>
                Business Inquries:
                </Text>
                <Text>
                sakuya@nami.studio
                </Text>
            </Box>
        </SimpleGrid>
    )
}