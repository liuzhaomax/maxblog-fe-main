import React, { useEffect } from "react"
import "./Demo.css"
import "./DemoNorth.css"
import { DEMO } from "../../config/cstModule"
import Announcement from "../announcement/Announcement"
import DemoSearch from "./DemoSearch"
import DemoCard from "./DemoCard"
import { getDemo } from "./handlers"
import * as ReactDOM from "react-dom/client"


function Demo() {

    useEffect(() => {
        (async () => {
            await getDemo()
                .then(res => {
                    loadCards(res.data)
                })
                .catch(err => {
                    console.log((err))
                })
        })()
    },[])

    const loadCards = demos => {
        let container = document.getElementById("demo-card-wrap")
        let cards = demos.data.map((element,index) => {
            return <DemoCard key={index} data={element}/>
        })
        ReactDOM.createRoot(container).render(cards)
    }

    return (
        <div id={DEMO.KEY} className={DEMO.KEY}>
            <div className="demo-container">
                <div className="demo-north">
                    <Announcement/>
                    <div className="demo-north-picture">
                        tupian
                    </div>
                </div>
                <div className="demo-south">
                    <DemoSearch/>
                    <div id="demo-card-wrap" className="demo-card-wrap"/>
                    <div className="demo-card-more-card">
                        ↓更多样例↓
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Demo