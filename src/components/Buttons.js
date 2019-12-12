import React from "react";

import { Button } from 'reactstrap';

function Buttons(props) {
    
    const { yearsArray, changeYear } = props;
    
    return (
        <>
            {yearsArray.map((year, index) => {
            return <Button size="sm" color="dark" onClick={() => changeYear(year)} key={index}>{year.match(/[0-9,-]/g)}</Button>
            })}
        </>
    )
}

export default Buttons;