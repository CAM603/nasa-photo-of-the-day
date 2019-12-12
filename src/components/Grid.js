import React, { useEffect, useState } from "react";
import Background from "./Background";
import axios from "axios";



function Grid() {

    
    // Lets get todays date and format it for url insertion
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    
    today = `${yyyy}-${mm}-${dd}`;
    const fiveYearsAgo = `${yyyy - 5}-${mm}-${dd}`;
    const tenYearsAgo = `${yyyy - 10}-${mm}-${dd}`;
    const fifteenYearsAgo = `${yyyy - 15}-${mm}-${dd}`;
    const twentyYearsAgo = `${yyyy - 20}-${mm}-${dd}`;
    const twentyFiveYearsAgo = `${yyyy - 25}-${mm}-${dd}`;
    
    const yearsArray = [`date=${fiveYearsAgo}&`,`date=${tenYearsAgo}&`,`date=${fifteenYearsAgo}&`,`date=${twentyYearsAgo}&`,`date=${twentyFiveYearsAgo}&`]
    const [currentYear, setCurrentYear] = useState(today);
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=Bw21GChImV11mec2NOlucGBUSzmTRPiLcEAVgdoX`)
        .then(response => {
            const data = response.data;
            setData(data);
            console.log(data)
        })
        .catch(error => {
            console.log(error)
        });
        
    }, []);
    const pic = data.hdurl;
    const title = data.title;
    const date = data.date;
    const explanation = data.explanation;
    //const pic = data.hdurl;
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
            pic={pic}
            title={title}
            date={date}
            explanation={explanation}
            />
        </>
    )
}

export default Grid;

