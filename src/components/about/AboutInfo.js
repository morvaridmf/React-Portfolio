import React from 'react'
import CV from "../../assets/cv-morvarid.pdf";


function AboutInfo() {
    return (
        <div className='aboutInfo'>
            <p>I know myself as a motivated and hard-working person
                who attends to bring into accomplishment every task
                with maximum care & diligence.
                I am a social person and I enjoy working with others.
                A former Architect whose passion for coding led her
                to change her career to programming.
</p>
            <button><a download="" href={CV}>Download CV</a></button>

        </div>
    )
}

export default AboutInfo