import React from "react"
import "./Announcement.css"
import "../demo/demoNorth.css"
import imgPortrait from "../../assets/announcement/announcement_portrait.png"
import imgBili from "../../assets/announcement/bilibili.png"
import imgWechat from "../../assets/announcement/announcement_wechat.png"


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
                    <img src={imgBili} alt="bilibili" className="announcement-bilibili"/>
                </div>
                <img src={imgWechat} alt="announcement_wechat" className="announcement-wechat"/>
            </div>
        </div>
    )
}

export default Announcement

