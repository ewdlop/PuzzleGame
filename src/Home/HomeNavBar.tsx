import React from "react"
import { NavLink } from "react-router-dom"

const activeStyle = { color: "#F15B2A" };

const HomeNavBar: React.FC = () => {
    
    // const { state: { scroll }} = useHomeContext();

    return (<div id="navbar">
        <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>
        <NavLink to="/Scene" activeStyle={activeStyle}>Scene</NavLink>
        <NavLink to="/Scene2" activeStyle={activeStyle}>Scene2</NavLink>
    </div>)
}

export default HomeNavBar