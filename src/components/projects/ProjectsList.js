import React from 'react'

function ProjectsList({ id, title, active, setItem }) {
    return (
        <div className='ProjectsList'>
            <li>
                <a className={active ? "ProjectsList list--active" : "ProjectsList"} onClick={() => setItem(id)}>{title}</a>
            </li>

        </div>
    )
}

export default ProjectsList