import {Textarea, Box, Button, Text, VStack, useColorMode, Flex, Spacer} from "@chakra-ui/react"
import React, { useState } from 'react';
import {shadeColor} from "../util/shade"


const Placeholder = () => {
    return (
        <Box>
            <br/>
            <Text color="red">
                sorry I don't work right now :( 
            </Text>
        </Box>
    )
}

export const Comment = () => {
    const [clicked, setClicked] = useState(false);
    return (
            <Box 
                maxWidth="90%" 
                margin="auto"
                paddingTop = "20px" 
            >
                <Textarea placeholder="ask a question" />
                <Button marginTop="5" onClick={()=>setClicked(true)} >ASK</Button>
                {clicked ?  <Placeholder/> : ""}
                <br/>
              <QAndA itemN={0} />
              <QAndA itemN={1} />
            </Box>
    )
}

const light = ["#ff71ce", "#01cdfe", "#05ffa1", "#b967ff", "#fffb96"]

const QAndA = ({itemN}) => {
    const d = new Date();
    // d.setUTCFullYear(2004);
    // d.setUTCMonth(1);
    // d.setUTCDate(29);
    // d.setUTCHours(2);
    // d.setUTCMinutes(45);
    // d.setUTCSeconds(26);
    const dateString = d.toLocaleDateString()
    const timeString = d.toLocaleTimeString()
    const { colorMode } = useColorMode()
    const colors = colorMode === "light" ? 
        light :
        light.map(color => shadeColor(color, -30)) ;

   return ( 
        <Box 
            maxWidth="90%" 
            margin="auto"
            paddingTop = "20px" 
        > 
            <Box 
                borderWidth="1px" 
                borderRadius="lg" 
                overflow="hidden" 
                p="2" 
                boxShadow="dark-lg" 
                bgGradient={`linear(to-l,${colors[itemN % colors.length]} , ${colors[(itemN +1) %colors.length]})`} 
            >
                <Flex>
                    <Box >
                        I am a question 
                    </Box>
                    <Spacer />
                    <Text as="sub" >
                        {dateString + "  -  " + timeString.toLowerCase()}
                    </Text>
                </Flex>
                <br/>
                <Box 
                    borderWidth="1px" 
                    borderRadius="lg" 
                    overflow="hidden" 
                    margin="2" 
                    p="2"
                    boxShadow="dark-lg" 
                    bgGradient={`linear(to-l,${colors[(itemN +1) %colors.length]}, ${colors[itemN % colors.length]})`} 
                >
                    <Text>
                        I am response 
                    </Text>
                    <br/>
                    <Text textAlign="right">
                        ~ kuya
                    </Text>
                </Box>
            </Box>
            <br/>
        </Box>
    )
}



// leave some comment
// cloudfunction that write's to json
// read that json 
