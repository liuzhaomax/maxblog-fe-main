import React from "react"
import "./Project.css"
import { PROJECT } from "../../config/cstModule"

function Project() {
    return (
        <div id={PROJECT.KEY} className={PROJECT.KEY}>
            <div className="project">I m project1</div>
            <div className="project">I m project2</div>
            <div className="project">I m project3</div>
            <div className="project">I m project4</div>
        </div>
    )
}

export default Project