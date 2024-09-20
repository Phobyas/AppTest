import { Component } from "react";
import { BrowserRouter as Router, Link, NavLink, Route, Routes } from "react-router-dom"
import "../styles/Header.css";

import img1 from "../images/header1.jpg";
import img2 from "../images/header2.jpg";
import img3 from "../images/header3.jpg";

const Header = () => {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<img src={img1} alt="miasto" />} />
            <Route path="/products" element={<img src={img2} alt="miasto" />} />
            <Route path="/contact" element={<img src={img3} alt="miasto" />} />
            <Route path="/admin" element={<img src={img1} alt="miasto" />} />
            <Route element={<img src={img1} alt="miasto" />} />
        </Routes>
        </Router>
    );
}

export default Header;