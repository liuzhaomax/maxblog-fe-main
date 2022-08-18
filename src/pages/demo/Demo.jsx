import React from "react"
import "./Demo.css"
import { DEMO } from "../../config/cstModule"
import UseState from "./UseState"

function Demo() {
    return (
        <div id={DEMO.KEY} className={DEMO.KEY}>
            <UseState />
        </div>
    )
}

export default Demo