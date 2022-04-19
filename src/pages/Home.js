import {Container} from "@chakra-ui/react"
import CameraContainer from "../components/CameraContainer";

function Home(){
    return(
        <Container mt={16} maxW="container.lg">
            <CameraContainer/>
        </Container>
    );
}
export default Home;