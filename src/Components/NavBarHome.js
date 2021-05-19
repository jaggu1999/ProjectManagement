import React from 'react'
import { FaBars } from "react-icons/fa";
import "../SVGs/LogoLight"
import Logo from "../SVGs/LogoLight";
import Identicon from 'react-identicons';
import "../Styles/NavBar.css";

const NavBarHome = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#4a2849"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="">
                    <Logo></Logo>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FaBars color="#f0e5f6" size={30}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                <Identicon string="Jagadeesh" bg="#ffffff" size="34"/>
                                <text style={{marginLeft:"10px"}}>Ch Jagadeesh</text>
                                <span style={{marginLeft:"10px"}}>
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0)">
                                        <path d="M15.7027 5.21173L9.10989 13.4723C8.48448 14.228 7.52031 14.228 6.92096 13.4723L0.328131 5.21173C-0.297276 4.42998 0.0154277 3.83063 0.979597 3.83063H15.0513C16.0415 3.83063 16.3281 4.42998 15.7027 5.21173Z" fill="#F0E5F6"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0">
                                        <rect width="16.06" height="16" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                            </a>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBarHome
