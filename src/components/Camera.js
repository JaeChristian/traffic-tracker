import {Box,Image} from "@chakra-ui/react";

function Camera({obj}){
    return(
        <Box w={"100%"} bg="white">
            <Image src={obj.camera_url.url}></Image>
        </Box>
    );
}
export default Camera;