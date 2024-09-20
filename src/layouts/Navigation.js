import { Component } from "react";
import { BrowserRouter as Router, Link, NavLink, Route, Routes } from "react-router-dom"
import "../styles/Navigation.css";

const list = [
    {name: "start", path: "/"},
    {name: "producty", path: "/products"},
    {name: "kontakt", path: "/contact"},
    {name: "panel admin", path: "/admin"},
]

const Navigation = () => {
    
    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={item.path}>{item.name}</NavLink>
        </li>
    ))

    return (
        <Router>
        <nav className="main">
            <ul>
                {menu}
            </ul>
        </nav>
        </Router>
        
    );
}
 
export default Navigation;