import React from "react"
import "./Home.css"
import { HOME } from "../../config/cstModule"
import HomeProjIntro from "./HomeProjIntro"
import HomeMe from "./HomeMe"

function Home() {
    return (
        <div id={HOME.KEY} className={HOME.KEY}>
            <HomeProjIntro/>
            <HomeMe/>
        </div>
    )
}

export default Home