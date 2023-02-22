import React from "react"
import { Footer, Navbar, Panel, Sidebar } from "../../../fragments"

export const Dashboard = () => {
    return (
        <div className="hold-transition sidebar-mini layout-fixed dark-mode" data-panel-auto-height-mode="height">
            <div className="wrapper">
                <Navbar />
                <Sidebar />
                <Panel />
                <Footer />
                <aside className="control-sidebar control-sidebar-dark">
                </aside>
            </div>
        </div>
    )
}