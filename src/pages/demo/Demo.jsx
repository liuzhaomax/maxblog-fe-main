import React, { useEffect } from "react"
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
let count = 0

function Demo() {
    const navigate = useNavigate()
    let root

    useEffect(() => {
        (async () => {
            await getDemo()
                .then(res => {
                    loadCards(res.data.data)
                    data = data.concat(res.data.data)
                    count = count + 1
                })
                .catch(err => {
                    console.log((err))
                })
        })()
        let container = document.getElementById("demo-card-wrap")
        root = ReactDOM.createRoot(container)
    },[])

    useEffect(() => {
        scrollToShowMore()
    },[count])

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
        window.addEventListener("scroll", (e) => {
            let more = document.getElementById("demo-card-more-card")
            let footer = document.getElementsByClassName("Footer")[0]
            let body = document.getElementById("App")
            // more顶部到网页顶部的距离 - 窗口的高度 => more在窗口出现的时机 = 将要滚动到more时滚动的距离
            if (window.scrollY >= body.clientHeight - footer.clientHeight - more.clientHeight - window.innerHeight) {
                debounceLoadMoreCards(e)
            }
        })
    }

    const loadMoreCards = () => {
        if(count < 3){
            (async () => {
                await getDemoByCount(count)
                    .then(res => {
                        loadCards(res.data.data)
                        data = data.concat(res.data.data)
                        count = count + 1
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })()
        }
    }

    // function throttle(fun, delay) {
    //     let last, deferTimer
    //     return function (args) {
    //         let that = this
    //         let _args = args
    //         let now = +new Date()
    //         if (last && now < last + delay) {
    //             clearTimeout(deferTimer)
    //             deferTimer = setTimeout(function () {
    //                 last = now
    //                 fun.apply(that, _args)
    //             }, delay)
    //         }else {
    //             last = now
    //             fun.apply(that,_args)
    //         }
    //     }
    // }

    function debounce(fun, delay) {
        return function (args) {
            let that = this
            let _args = args
            clearTimeout(fun.id)
            fun.id = setTimeout(function () {
                fun.call(that, _args)
            }, delay)
        }
    }

    // let throttleLoadMoreCards = throttle(loadMoreCards, 2000)
    let debounceLoadMoreCards = debounce(loadMoreCards, 200)

    const clickToLoadMoreCards = () => {
        if(count >= 3) {
            (async () => {
                await getDemoByCount(count)
                    .then(res => {
                        loadCards(res.data.data)
                        data = data.concat(res.data.data)
                        count = count + 1
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
                    <div id="demo-card-more-card" className="demo-card-more-card" onClick={clickToLoadMoreCards}>
                        ↓更多样例↓
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Demo