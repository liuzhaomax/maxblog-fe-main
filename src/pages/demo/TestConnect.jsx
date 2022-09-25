import React,{useEffect, useState} from "react"
import { Connect } from "./Connect"



const TestConnect = () => {
    const [data, setData] = useState("name")

    useEffect(() => {
        (async () => {
            await Connect()
                .then(res => {
                    console.log(res.data)
                    setData(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        })()
    },[])

    return(
        <div>
            {data.name}
        </div>
    )
}

export default TestConnect