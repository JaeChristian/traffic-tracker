import React from "react";
import {IconButton, useColorMode, useColorModeValue} from "@chakra-ui/react"
import {SunIcon, MoonIcon} from "@chakra-ui/icons"

function ModeToggleButton({display}){
    const {toggleColorMode} = useColorMode();

    return(
        <IconButton 
            aria-label="Toggle theme"
            colorScheme={useColorModeValue("purple", "orange")}
            icon={useColorModeValue(<MoonIcon/>,<SunIcon/>)}
            onClick={toggleColorMode}
            display={display}
        />
    );
}

export default ModeToggleButton;