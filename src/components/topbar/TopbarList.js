import React from 'react'

function TopbarList({ title, id, active, setItem, address }) {
    return (
        <div className='topbarList'>

            <li><a className={active ? " topbarList topbar--active" : "topbarList"} href={address} onClick={() => setItem(id)}>{title}</a></li>



        </div >
    )
}

export default TopbarList