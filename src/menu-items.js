import { Text, Center, SimpleGrid, useColorMode } from "@chakra-ui/react"
import {Link} from "react-router-dom"
import {shadeColor} from "./util/shade"

//https://www.joshwcomeau.com/react/rainbow-button/

const light = ["#ff71ce", "#01cdfe", "#05ffa1", "#b967ff", "#fffb96"]

const MenuItem = ({children, to, item})=> {
    const itemN = item | 0
    const { colorMode } = useColorMode()
    const colors = colorMode === "light" ? 
        light :
        light.map(color => shadeColor(color, -30)) ;
    return (
        <Link to={to}>
            <Center 
                bg="tomato" height="120px" 
                bgGradient={`linear(to-l,${colors[itemN % colors.length]} , ${colors[(itemN +1) %colors.length]})`} 
                borderRadius="md" 
                textAlign="center" verticalAlign="center" boxShadow="dark-lg" 
                _hover={{ boxShadow: "none" }}
                fontWeight="medium"
            >
                {children}
            </Center>
        </Link>
    )
}

export const MenuItems = () => {
    return (
        <SimpleGrid 
            minChildWidth="230px" 
            spacing="40px" 
            margin = "auto"
            paddingTop = "20px" 
            paddingBottom = "20px"
            maxWidth="90%"
            >
            <MenuItem to="/hap" item={0} >
                :)
            </MenuItem>
            <MenuItem to="/about" item={1} >
                About me
            </MenuItem>
            <MenuItem to="/comment" item={2} >
                Ask a question
            </MenuItem>
            <MenuItem to="/merrrch" item={3} >
                Merch?
            </MenuItem>
        </SimpleGrid>
      );
}