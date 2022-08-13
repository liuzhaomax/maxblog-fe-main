import React, { useEffect, useState } from "react"
import { Menu } from "antd"
import "./HomeNav.css"
import { HOME, MODULE } from "../config/cstModule"
import { useNavigate } from "react-router-dom"
import { MENU_ITEMS_WITH_SUB, MENU_ITEMS_WITHOUT_SUB } from "../config/cstMenuItem"

function HomeNav() {
    const [current, setCurrent] = useState(HOME.KEY)
    const [menu, setMenu] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        let nav = document.getElementById("home-nav")
        window.addEventListener("scroll", () => {
            let value = window.scrollY
            if (value >= 710) {
                nav.style.backgroundColor = "#333"
                nav.style.height = "50px"
            } else {
                nav.style.backgroundColor = "rgba(0,0,0,0)"
                nav.style.height = "100px"
            }
        })
        scrollToTop()
        menuHandler()
        listenWindowSize()
    }, [])

    const listenWindowSize = () => {
        window.addEventListener("resize", menuHandler.bind(this))
    }

    const menuHandler = () => {
        if (document.body.clientWidth >= 1020) {
            setMenu(
                <Menu id="home-nav-menu" className="menu"
                    onClick={toggleNav}
                    selectedKeys={[current]}
                    mode={"horizontal"}
                    key="home-nav-menu-without-sub"
                    items={MENU_ITEMS_WITHOUT_SUB}
                />
            )
        } else {
            setMenu(
                <Menu id="home-nav-menu" className="menu"
                    onClick={toggleNav}
                    selectedKeys={[current]}
                    mode={"horizontal"}
                    key="home-nav-menu-with-sub"
                    items={MENU_ITEMS_WITH_SUB}
                />
            )
        }
    }

    const toggleNav = e => {
        setCurrent(e.key)
        if (e.key === HOME.KEY) {
            scrollToTop()
        } else {
            for (const key in MODULE) {
                if (key === e.key) {
                    jumpToPath(MODULE[key])
                    break
                }
            }
        }
    }

    const scrollToTop = () => {
        document.getElementById("parallax-compo").scrollIntoView(true)
    }

    const jumpToPath = module => {
        navigate(module.FULL_PATH, {
            replace: true,
            state: { module }
        })
    }

    return (
        <div id="home-nav" className="HomeNav">
            <div id="home-nav-logo" className="logo" onClick={jumpToPath.bind(this, HOME)} />
            {menu}
        </div>
    )
}

export default HomeNav