import React, { useContext } from 'react'
import { ThemeContext } from "../../contex/ThemeContex"


function ProjectsList({ id, title, active, setItem }) {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={theme === "dark" ? "ProjectsList" : "ProjectsList-light"}>
            <li>
                <p className={active ? "ProjectsList list--active" : "ProjectsList"} onClick={() => setItem(id)}>{title}</p>
            </li>

        </div>
    )
}

export default ProjectsList