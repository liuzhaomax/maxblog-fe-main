import React, { useEffect } from "react"
import "./Home.css"
import { HOME } from "../../config/cstModule"
import HomeProjIntro from "./HomeProjIntro"

function Home() {
    useEffect(() => {
        window.addEventListener("scroll", () => {
            let test = document.getElementById("home-test")
            let portal = document.getElementById("parallax-compo")
            let intro = document.getElementById("HOME_PROJ_INTRO")
            let value = window.scrollY
            if (value >= portal.clientHeight + intro.clientHeight) {
                test.classList.remove("home-test-relative")
                test.classList.add("home-test-fixed")
            } else {
                test.classList.remove("home-test-fixed")
                test.classList.add("home-test-relative")
            }
        })
    },[])
    return (
        <div id={HOME.KEY} className={HOME.KEY}>
            <HomeProjIntro/>
            <div id="home-test" className="home-test home-test-relative">
                sdfsdf
            </div>
        </div>
    )
}

export default Home