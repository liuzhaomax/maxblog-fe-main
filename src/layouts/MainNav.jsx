import React, { useEffect, useState } from "react"
import "./MainNav.css"
import {Menu} from "antd"
import { HOME, MODULE } from "../config/cstModule"
import { MENU_ITEMS_WITHOUT_SUB, MENU_ITEMS_WITH_SUB } from "../config/cstMenuItem"
import { useLocation, useNavigate } from "react-router-dom"

function MainNav() {
    const [current, setCurrent] = useState("")
    const [menu, setMenu] = useState(null)

    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        setCurrent(searchCurrKey())
        scrollToTop()
        menuHandler()
        listenWindowSize()
    }, [current])

    const searchCurrKey = () => {
        if (location.state) {
            return location.state.module.KEY
        }
        for (const key in MODULE) {
            if (window.location.pathname === MODULE[key].FULL_PATH) {
                return MODULE[key].KEY
            }
        }
    }

    const listenWindowSize = () => {
        window.addEventListener("resize", menuHandler.bind(this))
    }

    const menuHandler = () => {
        if (document.body.clientWidth >= 1020) {
            setMenu(
                <Menu id="main-nav-menu" className="menu"
                    onClick={toggleNav}
                    selectedKeys={[current]}
                    mode={"horizontal"}
                    key="nav-menu-without-sub"
                    items={MENU_ITEMS_WITHOUT_SUB}
                />
            )
        } else {
            setMenu(
                <Menu id="main-nav-menu" className="menu"
                    onClick={toggleNav}
                    selectedKeys={[current]}
                    mode={"horizontal"}
                    key="nav-menu-with-sub"
                    items={MENU_ITEMS_WITH_SUB}
                />
            )
        }
    }

    const scrollToTop = () => {
        let component
        for (const key in MODULE) {
            component = document.getElementById(MODULE[key].KEY)
            if (component) {
                component.scrollIntoView(true)
            }
        }
    }

    const toggleNav = e => {
        setCurrent(e.key)
        if (e.key === HOME.KEY) {
            jumpToPath(HOME)
        } else {
            for (const key in MODULE) {
                if (key === e.key) {
                    jumpToPath(MODULE[key])
                    break
                }
            }
        }
        scrollToTop()
    }

    const jumpToPath = module => {
        navigate(module.FULL_PATH, {
            replace: true,
            state: { module }
        })
    }

    return (
        <div className="MainNav">
            <div id="main-nav-logo" className="logo" onClick={jumpToPath.bind(this, HOME)}/>
            {menu}
        </div>
    )
}

export default MainNav