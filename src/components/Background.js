import React from "react";
import MyCard from "./Card";



function Background(props) {
    
    const { pic, title, date, explanation, changeYear, yearsArray, media} = props;
    return (
        <div className="background">
            {/* really cool background image */}
            <MyCard 
            pic={pic}
            title={title}
            date={date}
            explanation={explanation}
            changeYear={changeYear}
            yearsArray={yearsArray}
            media={media}
            />
            
        </div>
    )
}

export default Background;