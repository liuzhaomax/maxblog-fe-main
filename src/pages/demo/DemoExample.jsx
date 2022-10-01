import React, { useEffect } from "react"
import "./DemoExample.css"
import { getDemoById } from "./handlers"

function DemoExample() {


    useEffect(() => {
        (async ()=>{
            await getDemoById()
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        })()
    },[])

    return(
        <div className="demo-example-container">
            demo
        </div>
    )
}

export default DemoExample