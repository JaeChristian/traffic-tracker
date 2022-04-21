import {Box,Image, Text, Heading, useColorModeValue, useDisclosure} from "@chakra-ui/react";
import CameraModal from "./CameraModal";

function Camera({obj, UpdateHandler}){
    const CardBG = useColorModeValue("white", "#27262a");
    const {isOpen, onOpen, onClose} = useDisclosure();

    return(
        <Box 
            display="flex"
            flexDir="column"
            gap={2}
            bg={CardBG}
            padding={4}
            borderRadius="md"
            h="100%"
            boxShadow="0 5px 4px rgba(0, 0, 0, 0.08), 0 5px 8px rgba(0, 0, 0, 0.05);"
            onClick={onOpen}
            _hover={{cursor: "pointer"}}
        >
            <Image 
                src={obj.camera_url.url + "?" + UpdateHandler} 
                alt={obj.camera_url.description} 
                w={{base: "450px", md: "300px"}}
                height={{base: "200px",md: "180px"}}
                borderRadius="md"
            />
            <Box>
                <Text
                    fontSize="xl"
                    fontWeight="500"
                >
                    {obj.camera_url.description}
                </Text>
                <Text>
                    {obj.camera_location}
                </Text>
            </Box>

            <CameraModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} obj={obj} UpdateHandler={UpdateHandler}/>
        </Box>
    );
}
export default Camera;