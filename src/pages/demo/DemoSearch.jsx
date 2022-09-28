import { Input, Space } from "antd"
import React from "react"
import "./DemoSearch.css"

const { Search } = Input
const onSearch = (value) => console.log(value)

const DemoSearch = () => (
    <Space className="demo-search" direction="vertical" >
        <Search placeholder="请输入样例标题关键字"
            onSearch={onSearch}
            size="large"
            allowClear
            enterButton />
    </Space>
)

export default DemoSearch