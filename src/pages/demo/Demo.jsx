import React, { useEffect, useState } from "react"
import "./Demo.css"
import "./DemoNorth.css"
import { DEMO } from "../../config/cstModule"
import Announcement from "../announcement/Announcement"
import DemoSearch from "./DemoSearch"
import DemoCard from "./DemoCard"
import { getDemo, getDemoByCount } from "./handlers"
import ReactDOM from "react-dom/client"
import { useNavigate } from "react-router-dom"

let data = []

function Demo() {
    const navigate = useNavigate()
    const [count, setCount] = useState(0)
    let root

    useEffect(() => {
        (async () => {
            await getDemo()
                .then(res => {
                    loadCards(res.data.data)
                    data = data.concat(res.data.data)
                })
                .catch(err => {
                    console.log((err))
                })
        })()
        let container = document.getElementById("demo-card-wrap")
        root = ReactDOM.createRoot(container)
        scrollToShowMore()
    },[])

    const loadCards = demos => {
        if(data !== null) {
            demos = [...data, ...demos]
        }
        if(root === null) {
            root = ReactDOM.createRoot(document.getElementById("demo-card-wrap"))
        }
        let cards = demos.map((element,index) => {
            return <DemoCard key={index} data={element} navigate={navigate}/>
        })
        root.render(cards)
    }

    const scrollToShowMore = () => {
        let more = document.getElementById("demo-card-more-card")
        let footer = document.getElementsByClassName("Footer")[0]
        let body = document.getElementById("App")
        window.addEventListener("scroll", () => {
            // more顶部到网页顶部的距离 - 窗口的高度 => more在窗口出现的时机 = 将要滚动到more时滚动的距离
            if (window.scrollY >= body.clientHeight - footer.clientHeight - more.clientHeight - window.innerHeight ) {
                loadMoreCards()
            }
        })
    }

    const loadMoreCards = () => {
        setCount(count+1)
        if(count < 3){
            (async () => {
                await getDemoByCount(count + 1)
                    .then(res => {
                        loadCards(res.data.data)
                        data = data.concat(res.data.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })()
        }
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
                    <div id="demo-card-more-card" className="demo-card-more-card">
                        ↓更多样例↓
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Demo