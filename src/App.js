import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ChakraProvider, useColorModeValue} from "@chakra-ui/react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import theme from "./theme";

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Navbar/>
            <Router>
                <Routes>
                    <Route
                        exact path="/"
                        element={<Home/>}
                    />
                </Routes>
            </Router>
        </ChakraProvider>
    );
}

export default App;
