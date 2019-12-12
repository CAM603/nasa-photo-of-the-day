import React from "react";

function Buttons(props) {

    const { yearsArray, changeYear } = props;
    const buttonLable = ['Today', 'Five Years Ago', 'Ten Years Ago', '15 Years Ago', '20 Years Ago', '25 Years Ago'];
    

    return (
        <div className="buttons">
            {yearsArray.map((year, index) => {
            return <button onClick={() => changeYear(year)} key={index}>{year.match(/[0-9,-]/g)}</button>
            })}
        </div>
    )
}

export default Buttons;