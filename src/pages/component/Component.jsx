import React from "react"
import "./Component.css"
import { COMPONENT } from "../../config/cstModule"

function Component() {
	return (
		<div id={COMPONENT.KEY} className={COMPONENT.KEY}>
            I am Component
		</div>
	)
}

export default Component