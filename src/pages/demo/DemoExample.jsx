import React, { useEffect, useState } from "react"
import "./DemoExample.css"
import { getDemoById } from "./handlers"
import { useNavigate } from "react-router-dom"
import { DEMO } from "../../config/cstModule"
import { notification } from "antd"
import { FrownOutlined } from "@ant-design/icons"
import { isDigit } from "../../utils/utils"

function DemoExample() {
    const navigate = useNavigate()
    const [demoData, setDemoData] = useState({
        id: 0,
        title: "",
        ref: "",
        content: "",
        desc: "",
        createdAt: "",
        view: 0,
    })
    let datetime = new Date(demoData.createdAt)
    let year = datetime.getFullYear()
    let month = String(Number(datetime.getMonth())+1)
    let date = datetime.getDate()
    let hour = ("0"+datetime.getHours()).slice(-2)
    let minute = ("0"+datetime.getMinutes()).slice(-2)
    let createdAt = `${year}-${month}-${date} ${hour}:${minute}`

    useEffect(() => {

        (async ()=>{
            let path = location.pathname.split("/")
            if(path.length > 3 || !isDigit(path[2])) {
                notification.open({
                    message: "跳转失败",
                    description: "您所输入的地址不存在",
                    icon: <FrownOutlined style={{ color: "#ff4d4f" }} />,
                })
                navigate(DEMO.FULL_PATH)
            }
            let demoId = path[2]
            await getDemoById(demoId)
                .then(res => {
                    setDemoData(res.data.data)
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
            <div className="demo-example-north">
                <div className="demo-example-header">
                    <div className="demo-example-createdAt">
                        发布时间：{createdAt}
                    </div>
                    <div className="demo-example-view">
                        浏览：{demoData.view}
                    </div>
                </div>
                <h1 className="demo-example-title">
                    {demoData.title}
                </h1>
                <p className="demo-example-desc">
                    {demoData.desc}
                </p>
                <div className="demo-example-ref">
                    <p>参考资料</p>
                    {demoData.ref}
                </div>
            </div>
            <div className="demo-example-south">

            </div>
        </div>
    )
}

export default DemoExample