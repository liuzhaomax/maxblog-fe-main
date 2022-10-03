import React, { useEffect } from "react"
import "./Home.css"
import { HOME } from "../../config/cstModule"
import HomeProjIntro from "./HomeProjIntro"

function Home() {
    useEffect(() => {
        window.addEventListener("scroll", () => {
            let test = document.getElementById("home-test")
            let value = window.scrollY
            console.log(value)
            if (value >= 1695) {
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