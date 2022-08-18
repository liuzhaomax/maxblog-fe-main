import React from "react"
import { useState } from "react"
import "./UseState.css"

const UseState = () => {
    const [count, setCount] = useState("请输入")
    // const click = () => {
    //     setCount(count+1)
    // }
    const change = (e) => {
        e.preventDefault()
        setCount(e.target.value)
    }

    const keyup = (e) => {
        if(e.keyCode === 13){
            document.getElementsByClassName("text")[0].innerText = count
        }
    }

    return(
        <div>
            {count}
            <input type="text" onChange={change} onKeyUp={keyup}/>
            <div className="text">

            </div>
        </div>

    )
}

export default  UseState