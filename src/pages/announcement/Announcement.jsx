import React from "react"
import "./Announcement.css"
import "../demo/DemoNorth.css"
import imgPortrait from "../../assets/announcement/announcement_portrait.jpg"
import imgWechat from "../../assets/announcement/announcement_wechat.jpg"


const Announcement = () => {
    const demoState = [23,100,20000]
    return(
        <div id="ANNOUNCEMENT" className="ANNOUNCEMENT">
            <div className="announcement-title">公告
                <div className="announcement-border">
                    <p>
                        愿中国青年都摆脱冷气，只是向上走，不必听自暴自弃者流的话。能做事的做事，能发声的发声。
                        有一分热，发一分光。就令萤火一般，也可以在黑暗里发一点光，不必等候炬火。
                        ——鲁迅
                    </p>
                </div>
            </div>
            <div className="announcement-data-border">
                <div className="announcement-data-wrap">
                    <div className="announcement-data">
                        {demoState[0]}
                    </div>
                    <div className="announcement-data-title">
                        样例
                    </div>
                </div>
                <div className="announcement-data-wrap">
                    <div className="announcement-data">
                        {demoState[1]}
                    </div>
                    <div className="announcement-data-title">
                        访问
                    </div>
                </div>
                <div className="announcement-data-wrap">
                    <div className="announcement-data">
                        {demoState[2]}
                    </div>
                    <div className="announcement-data-title">
                        评论
                    </div>
                </div>

            </div>
            <div className="announcement-connect-picture">
                <div className="announcement-portrait-container">
                    <img src={imgPortrait} alt="announcement_portrait" className="announcement-portrait"/>
                    <a href="https://space.bilibili.com/18359348" target="_blank" rel="noreferrer">
                        <img src={"https://img.shields.io/badge/Bilibili-fb7299?style=flat-square&logo=Bilibili&logoColor=white"} alt="bilibili" className="announcement-bilibili"/>
                    </a>
                </div>
                <img src={imgWechat} alt="announcement_wechat" className="announcement-wechat"/>
            </div>
        </div>
    )
}

export default Announcement

