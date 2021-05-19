import React from 'react'
import NavBarHome from '../Components/NavBarHome'
import Drawer from '../Components/Drawer';
import "../Styles/Home.css";
import ExpandedDrawer from "../Components/ExpandedDrawer";

function Home() {
    return (
        <div className="Home">
            <NavBarHome></NavBarHome>
            <section className="Section-Flex">
                <div>
                    <ExpandedDrawer></ExpandedDrawer>
                </div>
            </section>
        </div>
    )
}

export default Home
