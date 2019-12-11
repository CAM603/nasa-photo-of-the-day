import React from "react";

function Buttons() {

    const array = [2015, 2010, 2005, 2000, 1995];

    return (
        <div className="buttons">
            {array.map((year, index) => {
                return <button key={index}>{year}</button>
            })}

        </div>
    )
}

export default Buttons;