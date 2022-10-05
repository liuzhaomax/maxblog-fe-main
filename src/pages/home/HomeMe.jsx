import React, { useEffect } from "react"
import "./HomeMe.css"
import portrait from "../../assets/home/0.jpg"

function HomeMe() {
    useEffect(() => {
        animation()
    },[])

    const animation = () => {
        window.addEventListener("scroll", () => {
            let portal = document.getElementById("parallax-compo")
            let intro = document.getElementById("HOME_PROJ_INTRO")
            let me = document.getElementById("home-me")
            let ability = document.getElementsByClassName("home-me-ability")
            let value = window.scrollY
            if (value >= portal.clientHeight + intro.clientHeight &&
                value < portal.clientHeight + intro.clientHeight + me.clientHeight) {
                me.classList.remove("home-me-relative")
                me.classList.add("home-me-fixed")
                me.style.marginTop = 0
                for (let i = 0; i < ability.length-1; i++) {
                    ability[i].classList.add("animation"+i)
                }
            } else if (value >= portal.clientHeight + intro.clientHeight + me.clientHeight) {
                me.classList.remove("home-me-fixed")
                me.classList.add("home-me-relative")
                me.style.marginTop = me.clientHeight + "px"
            } else {
                me.classList.remove("home-me-fixed")
                me.classList.add("home-me-relative")
                me.style.marginTop = 0
            }
        })
    }

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
                    <img id="home-me-portrait" src={portrait} alt="portrait" />
                    <div className="home-me-ability-content">
                        <p>欢迎您的来访，我是马克西。全栈工程师。</p>
                        <p>最近在干什么，最近在学什么，代码仓库和B站，技能图标</p>
                        <p>祝前程似锦！</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeMe