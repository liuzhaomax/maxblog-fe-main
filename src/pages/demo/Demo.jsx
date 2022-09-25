import React from "react"
import "./Demo.css"
import { DEMO } from "../../config/cstModule"
import UseState from "./UseState"
import TestConnect from "./TestConnect"

function Demo() {
    return (
        <div id={DEMO.KEY} className={DEMO.KEY}>
            <UseState />
            <TestConnect />
        </div>
    )
}

export default Demo