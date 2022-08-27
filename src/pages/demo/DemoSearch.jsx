import { Input, Space } from "antd"
import React from "react"
const { Search } = Input

const onSearch = (value) => console.log(value)

const DemoSearch = () => (
    <Space direction="vertical">
        <Search placeholder="input search text" onSearch={onSearch} enterButton />
    </Space>
)

export default DemoSearch