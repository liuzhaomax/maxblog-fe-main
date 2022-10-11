import React, { useEffect } from "react"
import "./HomeMe.css"
import portrait from "../../assets/home/0.jpg"

let addFoldedClassRemaining = 1 // 只对第一次进入滚动区时，设置folded和unfolded属性，避免后续打开卡片后，被重新设置属性，从而让被打开的卡片同时具有两种属性的BUG

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
                if (addFoldedClassRemaining) {
                    setTimeout(() => {
                        for (let i = 0; i < ability.length; i++) {
                            if (i === ability.length-1) {
                                ability[i].classList.add("unfolded")
                            } else {
                                ability[i].classList.add("folded")
                            }
                            ability[i].addEventListener("click", onClick)
                        }
                    },3000)
                    addFoldedClassRemaining = 0
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

    const onClick = e => {
        e.preventDefault()
        let ability = document.getElementsByClassName("home-me-ability")
        for (let i = 0; i < ability.length; i++) {
            for (let j = 0; j < ability[i].classList.length; j++) {
                if (ability[i].classList[j] === "unfolded") {
                    ability[i].classList.remove("unfolded")
                    ability[i].classList.add("folded")
                    e.currentTarget.classList.remove("folded")
                    e.currentTarget.classList.add("unfolded")
                    i = ability.length
                    break
                }
            }
        }
    }

    return (
        <div id="home-me" className="home-me home-me-relative">
            <div className="home-me-ability others">
                <div className="home-me-ability-wrap">
                    <h2>其他领域</h2>
                    <div className="home-me-ability-content-wrap">
                        <div className="home-me-ability-content common-content">
                            <h3>框架：React, Vue</h3>
                            <p>123</p>
                            <p>324</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-me-ability devops">
                <div className="home-me-ability-wrap">
                    <h2>DevOps</h2>
                    <div className="home-me-ability-content-wrap">
                        <div className="home-me-ability-content common-content">
                            <h3>框架：React, Vue</h3>
                            <p>123</p>
                            <p>324</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-me-ability database">
                <div className="home-me-ability-wrap">
                    <h2>数据库</h2>
                    <div className="home-me-ability-content-wrap">
                        <div className="home-me-ability-content common-content">
                            <h3>框架：React, Vue</h3>
                            <p>123</p>
                            <p>324</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-me-ability frontend">
                <div className="home-me-ability-wrap">
                    <h2>前端</h2>
                    <div className="home-me-ability-content-wrap">
                        <div className="home-me-ability-content common-content">
                            <h3>框架：React, Vue</h3>
                            <p>123</p>
                            <p>324</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-me-ability backend">
                <div className="home-me-ability-wrap">
                    <h2>后端</h2>
                    <div className="home-me-ability-content-wrap">
                        <div className="home-me-ability-content common-content">
                            <h3>框架：Golang-Gin, Nodejs-Express</h3>
                            <p>123</p>
                            <p>324</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-me-ability basic">
                <div className="home-me-ability-wrap">
                    <h2>基本信息</h2>
                    <div className="home-me-ability-content-wrap">
                        <img id="home-me-portrait" src={portrait} alt="portrait" />
                        <div className="home-me-ability-content basic-content">
                            <h3>欢迎您的来访</h3>
                            <p>我是马克西。全栈工程师。</p>
                            <p>最近在干什么，最近在学什么，代码仓库和B站，技能图标</p>
                            <p>祝前程似锦！</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeMe