import React, { useEffect } from "react"
import "./DemoExample.css"
import { getDemoById } from "./handlers"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { DEMO } from "../../config/cstModule"
import { notification } from "antd"
import { FrownOutlined } from "@ant-design/icons"

function DemoExample() {
    const demo = useSelector(state => state.demo)
    const navigate = useNavigate()

    useEffect(() => {
        (async ()=>{
            await getDemoById(demo.demoId)
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => {
                    console.log(err)
                    notification.open({
                        message: "跳转失败",
                        description: "您所输入的地址不存在",
                        icon: <FrownOutlined style={{ color: "#ff4d4f" }} />,
                    })
                    navigate(DEMO.FULL_PATH)
                })
        })()
    },[])

    return(
        <div className="demo-example-container">

        </div>
    )
}

export default DemoExample