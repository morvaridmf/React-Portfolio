import React, { useContext } from 'react'
import { ThemeContext } from "../../contex/ThemeContex"


function TopbarList({ title, id, active, setItem, address }) {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={theme === "dark" ? "topbarList" : "topbarList-light"}>

            <li><a className={active ? " topbarList topbar--active" : "topbarList"} href={address} onClick={() => setItem(id)}>{title}</a></li>

        </div >
    )
}

export default TopbarList