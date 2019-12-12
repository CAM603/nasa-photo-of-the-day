import React, { useEffect, useState } from "react";
import Background from "./Background";
import axios from "axios";




function Grid() {

    
    // Get todays date and format it for url insertion
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    
    today = `date=${yyyy}-${mm}-${dd}&`;
    const fiveYearsAgo = `${yyyy - 5}-${mm}-${dd}`;
    const tenYearsAgo = `${yyyy - 10}-${mm}-${dd}`;
    const fifteenYearsAgo = `${yyyy - 15}-${mm}-${dd}`;
    const twentyYearsAgo = `${yyyy - 20}-${mm}-${dd}`;
    const twentyFourYearsAgo = `${yyyy - 24}-${mm}-${dd}`;
    
    const yearsArray = [`${today}`,`date=${fiveYearsAgo}&`,`date=${tenYearsAgo}&`,`date=${fifteenYearsAgo}&`,`date=${twentyYearsAgo}&`,`date=${twentyFourYearsAgo}&`]
    
    const [currentYear, setCurrentYear] = useState(today);
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?${currentYear}api_key=Bw21GChImV11mec2NOlucGBUSzmTRPiLcEAVgdoX`)
        .then(response => {
            const data = response.data;
            setData(data);
            console.log(data)
        })
        .catch(error => {
            console.log(error)
        });
        
    }, [currentYear]);

    const pic = data.hdurl;
    const title = data.title;
    const date = data.date;
    const explanation = data.explanation;
    
    const changeYear = year => {
        setCurrentYear(year)
    }
    
    return (
        <>
            <Background 
            pic={pic}
            title={title}
            date={date}
            explanation={explanation}
            changeYear={changeYear}
            yearsArray={yearsArray}
            />
        </>
    )
}

export default Grid;

