import {Container} from "@chakra-ui/react"
import CameraContainer from "../components/CameraContainer";

function Home(){
    return(
        <Container mt={{base: 20, md:24}} maxW="container.xl" display="flex" justifyContent="center" pr={2} pl={2}>
            <CameraContainer/>
        </Container>
    );
}
export default Home;