import styled from "styled-components";
import './Navbar.css'
import { useState } from "react";

const A = styled.a`
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
`
const Nav2 = ()=> {
    return (
        <div className="nav-2">
                <A href="./">About me</A>
                <A href="./">Skills</A>
                <A href="./">Proyects</A>
                <A href="./">Contact</A>
            </div>
    )
}

const Nav = ()=> {
    const [value, setValue] = useState(false)

    const handleValue = () => {
        setValue(!value)
    }

    return (
        <div>
            <div className="nav-1">
                <A href="./">About me</A>
                <A href="./">Skills</A>
                <A href="./">Proyects</A>
                <A href="./">Contact</A>
            </div>
            <div className="menu" onClick={handleValue}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
            </div>
            {value ? <Nav2/> : null}
        </div>
    )
}

export default Nav