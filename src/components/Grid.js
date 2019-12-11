import React, { useEffect, useState } from "react";
import Background from "./Background";
import axios from "axios";
import { fakeObj } from "./object";


function Grid() {

    const [pic, setPics] = useState();
    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [explanation, setExplanation] = useState();
    
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
        const title = fakeObj.data.title;
        setTitle(title);
        const date = fakeObj.data.date;
        setDate(date);
        const explanation = fakeObj.data.explanation;
        setExplanation(explanation);

    }, []);

    return (
        <>
            <Background 
            pic={pic}
            title={title}
            date={date}
            explanation={explanation}
            />
        </>
    )
}

export default Grid;