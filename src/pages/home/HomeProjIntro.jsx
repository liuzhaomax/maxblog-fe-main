import "./HomeProjIntro.css"
import React from "react"
import { Button, Card } from "antd"

function HomeProjIntro () {
    return(
        <div id="HOME_PROJ_INTRO" className="HOME_PROJ_INTRO">
            <iframe className="intro-video" src="//player.bilibili.com/player.html?aid=587865856&bvid=BV1UB4y1c7k8&cid=332237656&page=1"
                allowFullScreen="allowfullscreen" width="80vw" height="500" scrolling="no" frameBorder="0"
                sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts" />
            <div className="home-proj-intro-content">
                <Card className="home-proj-intro-card">
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Button type="primary" className="home-proj-intro-button">详情</Button>
            </div>
        </div>
    )
}

export default HomeProjIntro