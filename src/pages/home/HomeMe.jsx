import React, { useEffect } from "react"
import "./HomeMe.css"

function HomeMe() {
    useEffect(() => {
        window.addEventListener("scroll", () => {
            let test = document.getElementById("home-me")
            let portal = document.getElementById("parallax-compo")
            let intro = document.getElementById("HOME_PROJ_INTRO")
            let me = document.getElementById("home-me")
            let value = window.scrollY
            if (value >= portal.clientHeight + intro.clientHeight &&
                value < portal.clientHeight + intro.clientHeight + me.clientHeight) {
                test.classList.remove("home-me-relative")
                test.classList.add("home-me-fixed")
                me.style.marginTop = 0
            } else if (value >= portal.clientHeight + intro.clientHeight + me.clientHeight) {
                test.classList.remove("home-me-fixed")
                test.classList.add("home-me-relative")
                me.style.marginTop = me.clientHeight + "px"
            } else {
                test.classList.remove("home-me-fixed")
                test.classList.add("home-me-relative")
                me.style.marginTop = 0
            }
        })
    },[])
    return (
        <div id="home-me" className="home-me home-me-relative">
            <div className="home-me-ability others">
                <div className="home-me-ability-wrap">
                    <h2>其他领域</h2>
                </div>
            </div>
            <div className="home-me-ability devops">
                <div className="home-me-ability-wrap">
                    <h2>DevOps</h2>
                </div>
            </div>
            <div className="home-me-ability database">
                <div className="home-me-ability-wrap">
                    <h2>数据库</h2>
                </div>
            </div>
            <div className="home-me-ability frontend">
                <div className="home-me-ability-wrap">
                    <h2>前端</h2>
                </div>
            </div>
            <div className="home-me-ability backend">
                <div className="home-me-ability-wrap">
                    <h2>后端</h2>
                </div>
            </div>
            <div className="home-me-ability basic">
                <div className="home-me-ability-wrap">
                    <h2>基本信息</h2>
                </div>
            </div>
        </div>
    )
}

export default HomeMe