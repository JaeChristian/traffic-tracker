import {useEffect, useState} from "react";
import {SimpleGrid, Box} from "@chakra-ui/react";
import Axios from "axios";
import Camera from "./Camera"

function Cameras() {
    const CameraAPI = "https://data.calgary.ca/resource/k7p9-kppz.json";
    const [Cameras, setCameras] = useState([]);
    const [UpdateHandler, setUpdateHandler] = useState(0);
    useEffect(()=>{
        Axios.get(CameraAPI).then((res)=>{
            console.log(res.data, "response");
            setCameras(res.data);
        });
        
        const interval = setInterval(()=>{
            Axios.get(CameraAPI).then((res)=>{
                console.log(res.data, "response");
                setCameras(res.data);
            });
            //alert("10 seconds");
            setUpdateHandler(UpdateHandler => UpdateHandler + 1);
        }, 10000);
    },[]);
    
    return(
        <SimpleGrid
            columns={{base: 1, md: 3, lg: 4}}
            gap={4}
        >
            {Cameras.map((obj) => {
                return(
                    <div key={obj.camera_location}>
                        <Camera obj={obj} UpdateHandler={UpdateHandler}/>
                    </div>
                );
            })}
        </SimpleGrid>
    );
}
export default Cameras;