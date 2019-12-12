import React from "react";

import { Button, Card, ButtonGroup} from 'reactstrap';

function Buttons(props) {
    
    const { yearsArray, changeYear } = props;
    const buttonLable = ['Today', 'Five Years Ago', 'Ten Years Ago', '15 Years Ago', '20 Years Ago', '25 Years Ago'];
    

    return (
        <div>
                {yearsArray.map((year, index) => {
                return <Button size="sm" color="primary" onClick={() => changeYear(year)} key={index}>{year.match(/[0-9,-]/g)}</Button>
                })}
        </div>
    )
}

export default Buttons;