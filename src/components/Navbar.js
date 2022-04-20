import {Box, Container, Heading, Stack, Link} from "@chakra-ui/react"
import {useColorModeValue, Menu, MenuButton, MenuList, MenuItem, IconButton} from "@chakra-ui/react"
import {HamburgerIcon} from "@chakra-ui/icons"
import styled from "@emotion/styled"
import Toggler from "./DarkModeToggler"

const MenuLinks = styled.a`
    width: 100%;
    height: 100%;
`;

function Navbar(){
    const bgColor = useColorModeValue('white', '#222227');
    return(
        <Box 
            as="nav"
            p={{base: 2, md: 4}}
            pl={{md: 10}}
            pr={{md: 10}}
            position="fixed"
            top="0"
            w="100%"
            bg={bgColor}
            boxShadow="0 5px 4px rgba(0,0,0,.02), 0 5px 8px rgba(0,0,0,.08);"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
        >
            <Heading
                as="h2"
                size="lg"
            >
                Traffic Tracker
            </Heading>
            

            <Box flex={1} align="right">
                <Toggler display={{base: "inline-block", md: "none"}}/>
                <Box ml={2} display={{base: 'inline-block', md:'none'}}>
                    <Menu>
                        <MenuButton 
                        as={IconButton} 
                        icon={<HamburgerIcon/>} 
                        variant="outline" 
                        aria-label="options"
                        />
                        <MenuList bg={bgColor}>
                            <MenuItem><MenuLinks href="javascript:void(0)">Saved</MenuLinks></MenuItem>
                        </MenuList> 
                    </Menu>
                </Box>
            </Box>
            <Stack
                direction="row"
                display={{base: "none", md: "flex"}}
                mr={4}
            >
                <Link>Saved</Link>
            </Stack>
            <Toggler display={{base: "none", md: "flex"}}/>
        </Box>
    );
}
export default Navbar;