import React from "react"
import "./MainLayout.css"
import {Outlet} from "react-router-dom"
import MainNav from "./MainNav"
import Footer from "./Footer"

function MainLayout() {
    return (
        <div className="MainLayout">
            <MainNav/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default MainLayout

