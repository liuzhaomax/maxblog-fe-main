import { Card } from "antd"
import React from "react"
const { Meta } = Card
import "./DemoCard.css"
import { EyeOutlined } from "@ant-design/icons"
import { DEMO } from "../../config/cstModule"

const DemoCard = (props) => {
    let datetime = new Date(props.data.createdAt)
    let year = datetime.getFullYear()
    let month = String(Number(datetime.getMonth())+1)
    let date = datetime.getDate()
    let hour = ("0"+datetime.getHours()).slice(-2)
    let minute = ("0"+datetime.getMinutes()).slice(-2)
    let createdAt = `${year}-${month}-${date} ${hour}:${minute}`

    const clickCard = () => {
        props.navigate(DEMO.FULL_PATH + `/${props.data.id}`)
    }

    return (
        <div className="demo-card-container" onClick={clickCard}>
            <Card className="demo-card-picture"
                cover={
                    <img
                        alt="example"
                        src={props.data.preview}
                    />
                }
                bordered={false}
            >
                <Meta className="demo-card-meta"
                    title={props.data.title}
                    description={props.data.desc.length > 90 ? props.data.desc.slice(0,90)+"..." : props.data.desc}
                />
            </Card>
            <div className="demo-card-inner-wrap">
                <div className="demo-card-createdAt">
                    {createdAt}
                </div>
                <div className="demo-card-view">
                    <EyeOutlined /> {props.data.view}
                </div>
            </div>
        </div>
    )
}

export default DemoCard