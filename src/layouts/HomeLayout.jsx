import React, { useEffect } from "react"
import "./HomeLayout.css"
import bgSky from "../assets/forest/sky.png"
import bgBackRock from "../assets/forest/back_rock.png"
import bgBridge from "../assets/forest/bridge.png"
import bgFrontRock from "../assets/forest/front_rock.png"
import HomeNav from "./HomeNav"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
import { GITHUB } from "../config/constants"
import { GithubOutlined } from "@ant-design/icons"
// import {Button} from "antd"

function HomeLayout() {
    useEffect(() => {
        let sky = document.getElementById("sky")
        let backRock = document.getElementById("back-rock")
        let bridge = document.getElementById("bridge")
        let text = document.getElementById("text")
        let slogan1 = document.getElementById("slogan1")
        let slogan2 = document.getElementById("slogan2")
        let instruction = document.getElementById("instruction")
        let explore = document.getElementById("explore")
        window.addEventListener("scroll", () => {
            let value = window.scrollY
            sky.style.top = value * 0.5 + "px"
            backRock.style.top = value * 0.3 + "px"
            bridge.style.top = value * 0.5 + "px"
            text.style.marginRight = value * 4 + "px"
            text.style.marginTop = value * 1.5 - 420 + "px"
            slogan1.style.marginLeft = value * 4 + "px"
            slogan1.style.marginTop = value * 1.5 - 250 + "px"
            slogan2.style.marginLeft = value * 4 + "px"
            slogan2.style.marginTop = value * 1.5 - 170 + "px"
            instruction.style.marginLeft = value * 4 + "px"
            instruction.style.marginTop = value * 1.5 - 60 + "px"
            // explore.style.marginTop = value * 1.5 + 30 + "px"
            explore.style.marginTop = value * 1.5 + "px"
        })
    })

    const mousemove = e => {
        let sky = document.getElementById("sky")
        let backRock = document.getElementById("back-rock")
        e.mx = e.pageX || e.clientX + document.body.scrollLeft
        let windowWidth = document.body.clientWidth
        let center = windowWidth / 2
        backRock.style.left = (center - e.mx) / 5 * 0.1 + "px"
        sky.style.left = (center - e.mx) / 5 * 0.18 + "px"
    }

    const explore = () => {
        window.open(GITHUB)
        // document.getElementById("HomeOverview").scrollIntoView(true)
    }

    return (
        <div className="HomeLayout" onMouseMove={mousemove}>
            <HomeNav />
            <section id="parallax-compo">
                <img id="sky" src={bgSky} alt="sky img" data-depth="0.03" />
                <img id="back-rock" src={bgBackRock} alt="back rock img" data-depth=".05" />
                <h4 id="slogan1" data-depth="0">配置CI/CD DevOps流程的微服务架构Web应用</h4>
                <div id="slogan2" data-depth="0">
                    <img src="https://img.shields.io/badge/Golang-00a7d0?style=flat-square&logo=go&logoColor=white" alt="go"/>
                    <img src="https://img.shields.io/badge/-JavaScript-red?style=flat-square&logo=javascript&logoColor=white" alt="js"/>
                    {/*<img src="https://img.shields.io/github/release/liuzhaomax/maxblog-fe-main.svg?style=flat-square" alt="release"/>*/}
                </div>
                <h6 id="instruction" data-depth="0">GitHub开源项目</h6>
                {/*<Button id="explore" shape="round" onClick={explore} data-depth="0">浏览</Button>*/}
                <GithubOutlined id="explore" shape="round" onClick={explore} data-depth="0" />
                <h3 id="text" data-depth="0">马克西的博客</h3>
                <img id="bridge" src={bgBridge} alt="bridge img" data-depth="0" />
                <img id="front-rock" src={bgFrontRock} alt="front rock img" data-depth=".01" />
            </section>
            <Outlet />
            <Footer />
        </div>
    )
}

export default HomeLayout

