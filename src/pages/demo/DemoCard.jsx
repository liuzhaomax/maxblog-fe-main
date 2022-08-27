import { Avatar, Card } from "antd"
import React from "react"
const { Meta } = Card
import "./DemoCard.css"

const DemoCard = (props) => (
    <Card className="demo-card-picture"
        cover={
            <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
        }
    >
        <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Card title"
            description={props.desc}
        />
    </Card>
)

export default DemoCard