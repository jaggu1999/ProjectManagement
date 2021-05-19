import React from "react";
import { FaBars } from "react-icons/fa";
import "../SVGs/LogoLight"
import Logo from "../SVGs/LogoLight";
import GetStarted from "../SVGs/GetStarted";

const NavBarIntro = () => {
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
                            <a className="nav-link active" aria-current="page" href="#">Login</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">
                            <GetStarted></GetStarted>
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBarIntro
