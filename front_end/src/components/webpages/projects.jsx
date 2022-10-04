import { keyboardImplementationWrapper } from "@testing-library/user-event/dist/keyboard/index.js";
import React,{useState} from "react";
import * as projectData from '../../data/projects.js'
import ResourceButton from '../elements/resourceButtons'
import ProjectDisplay from '../elements/projectDisplay'

export default function Projects(){
    
    /* Project display state */
    const [projectDisplay,setProjectDisplay] = useState("Select resource type");

    const changeProjectDisplay = function(data){
        setProjectDisplay(<ProjectDisplay data={data}/>)
    }
    
    /* Create an array of buttons (financial markets, programming) */
    const resource = projectData.resources()
    const ResourceButtons = resource.map(resource => {
        return <ResourceButton name={resource} handleClick={changeProjectDisplay}/>
    })

    
    
    

    return(
        <div>
            <h1>PROJECTS</h1>
            {ResourceButtons}
            <div>
                {projectDisplay}
            </div>
        </div>
        
    )
}