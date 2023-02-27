import React from "react"
import { Footer, Navbar, Panel, Sidebar } from "../../../fragments"

export const Dashboard = () => {
    return (
        <div className="wrapper">
            <Navbar />
            <Sidebar />
            <Panel />
            <Footer />
            <aside className="control-sidebar control-sidebar-dark">
            </aside>
        </div>
    )
}