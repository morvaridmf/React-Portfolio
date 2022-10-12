import React from 'react'

function AboutList({ id, title, active, setItem }) {
    return (
        <div className='aboutList'>
            <li>
                <a className={active ? "aboutList aboutList--active" : "aboutList"} onClick={() => setItem(id)}>{title}</a>
            </li>

        </div>
    )
}

export default AboutList