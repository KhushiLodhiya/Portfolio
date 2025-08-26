import React from "react";
import {Link as ScrollLink} from 'react-scroll';
import {Link as RouterLink} from 'react-router-dom';
import './nav.css';

function Navbar(){
    return(
        <>
        <nav className="nav">
            <div className="nav-left">
                <ul>
                    <li><RouterLink to='/'>Home</RouterLink></li>
                    <li><RouterLink to='/about'>About</RouterLink></li>
                    <li><ScrollLink to='projects' smooth={true} duration={500}>Projects</ScrollLink></li>
                    <li><ScrollLink to='skills' smooth={true} duration={500}>Skills</ScrollLink></li>
                    <li><ScrollLink to='contact' smooth={true} duration={500}>Contact</ScrollLink></li>
                    
                </ul>
            </div>

            <div className="nav-right">
                <button
                className="resume-btn"
                onClick={()=>window.open('/Khushi Lodhiya (1).pdf', '_blank')}> View My Resume</button>
            </div>
        </nav>
        </>
    )
}
export default Navbar;