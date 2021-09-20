import React from 'react'
import "./menu.scss"
export default function Menu({menuOpen, setmenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setmenuOpen(!menuOpen)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setmenuOpen(!menuOpen)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={()=>setmenuOpen(!menuOpen)}>
                    <a href="#work">Works</a>
                </li>
                <li onClick={()=>setmenuOpen(!menuOpen)}>
                    <a href="#testimonial">Testimonials</a>
                </li>
                <li onClick={()=>setmenuOpen(!menuOpen)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
