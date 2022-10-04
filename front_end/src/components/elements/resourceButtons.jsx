import React from "react";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

export default function resourceButtons(input){
    return(
        <button onClick={(value)=>{input.handleClick(input.name)}}>{input.name}</button>
    )
}


