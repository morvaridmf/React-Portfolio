import React from 'react'

function ProjectsList({ id, title, active, setItem }) {
    return (
        <div className='ProjectsList'>
            <li>
                <p className={active ? "ProjectsList list--active" : "ProjectsList"} onClick={() => setItem(id)}>{title}</p>
            </li>

        </div>
    )
}

export default ProjectsList