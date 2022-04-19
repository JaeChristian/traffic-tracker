import {useEffect, useState} from "react";
import {SimpleGrid, Box} from "@chakra-ui/react";
import Axios from "axios";
import Camera from "./Camera"

function Cameras() {
    const CameraAPI = "https://data.calgary.ca/resource/k7p9-kppz.json";
    const [Cameras, setCameras] = useState([]);
    useEffect(()=>{
        Axios.get(CameraAPI).then((res)=>{
            console.log(res.data, "response");
            setCameras(res.data);
        });
    },[]);
    
    return(
        <SimpleGrid
            columns={4}
            gap={2}
        >
            {Cameras.map((obj) => {
                return(
                    <div key={obj.camera_location}>
                        <Camera obj={obj}/>
                    </div>
                );
            })}
        </SimpleGrid>
    );
}
export default Cameras;