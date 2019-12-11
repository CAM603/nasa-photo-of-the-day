import React from "react";
import Card from "./Card";
import Buttons from "./Buttons";

function Background(props) {
    
    const { pic } = props;
    
    return (
        <div className="background">
            {/* really cool background image */}
            <Card pic={pic} />
            <Buttons/>
        </div>
    )
}

export default Background;