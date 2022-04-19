import {Box, Container} from "@chakra-ui/react"
import {useColorModeValue} from "@chakra-ui/react"
function Navbar(){
    const bgColor = useColorModeValue('whiteAlpha.200', '#20202380');
    return(
        <Box 
            p={3} 
            position="fixed"
            top="0"
            w="100%"
            bg={bgColor}
            boxShadow="0 5px 4px rgba(0,0,0,.02), 0 5px 8px rgba(0,0,0,.03)"
            style={{backdropFilter:'blur(10px)'}}
        >
            <Container>Hello</Container>
        </Box>
    );
}
export default Navbar;