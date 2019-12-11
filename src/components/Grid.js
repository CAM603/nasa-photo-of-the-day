import React, { useEffect, useState } from "react";
import Background from "./Background";
import axios from "axios";



function Grid() {

    const [url, setUrl] = useState();
    const [year, setYear] = useState();

    // Lets get todays date and format it for url insertion
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    today = `${}`




    const yearsArray = ['date=2015-04-20&','date=2015-04-20&','date=2015-04-20&','date=2015-04-20&','date=2015-04-20&']

    useEffect(() => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=Bw21GChImV11mec2NOlucGBUSzmTRPiLcEAVgdoX")
        .then(response => {
            const url = response;
            setUrl(url);
        })
        .catch(error => {
            console.log(error)
        });
    }, []);
    
    // useEffect(() => {
    //     const pic = fakeObj.data.hdurl;
    //     setPics(pic);
    //     const title = fakeObj.data.title;
    //     setTitle(title);
    //     const date = fakeObj.data.date;
    //     setDate(date);
    //     const explanation = fakeObj.data.explanation;
    //     setExplanation(explanation);

    // }, []);

    return (
        <>
            <Background 
            url={url}
            />
        </>
    )
}

export default Grid;

