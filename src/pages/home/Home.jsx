import React from "react"
import "./Home.css"
import { HOME } from "../../config/cstModule"
// import HomeProjIntro from "./HomeProjIntro"

function Home() {

    return (
        <div id={HOME.KEY} className={HOME.KEY}>
            {/*<HomeProjIntro/>*/}
            <div className="home-test">I m home1</div>
            <div className="home-test">I m home2</div>
            <div className="home-test">I m home3</div>
            <div className="home-test">I m home4</div>
        </div>
    )
}

export default Home