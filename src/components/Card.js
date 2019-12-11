import React from "react";
import Buttons from "./Buttons";

function Card(props) {
    const { pic, title, date, explanation } = props;

    return (
        <>
        <div className="card" style={{width: '600px', background: 'slateGray'}}>
            <h2>{title}</h2>
            <h3>{date}</h3>
            <div >
                <img style={{width: '200px', height: '200px'}} src={pic} alt="pic"/>
            </div>
            <p>{explanation}</p>
        </div>
        <Buttons/>
        </>
    )
}

export default Card;