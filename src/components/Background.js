import React from "react";
import Card from "./Card";


function Background(props) {
    
    const { pic, title, date, explanation, changeYear, yearsArray} = props;
    return (
        <div className="background" style={{display: 'flex', justifyContent: 'center', backgroundImage: 'url("https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80")', backgroundSize: 'contain', height: '100vh'}}>
            {/* really cool background image */}
            <Card 
            pic={pic}
            title={title}
            date={date}
            explanation={explanation}
            changeYear={changeYear}
            yearsArray={yearsArray}
            />
            
        </div>
    )
}

export default Background;