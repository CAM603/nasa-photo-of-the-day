import React, { useEffect, useState } from "react";
import Background from "./Background";
import axios from "axios";
import { fakeObj } from "./object";


function Grid() {

    const [pic, setPics] = useState();
    const [filter, setFilter] = useState();

    // useEffect(() => {
    //     axios
    //     .get("https://api.nasa.gov/planetary/apod?api_key=Bw21GChImV11mec2NOlucGBUSzmTRPiLcEAVgdoX")
    //     .then(response => {
    //         console.log(response)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     });
    // }, []);
    useEffect(() => {
        console.log(fakeObj);
        const pic = fakeObj.data.hdurl;
        setPics(pic);

    }, []);

    return (
        <>
            <Background pic={pic}/>
        </>
    )
}

export default Grid;