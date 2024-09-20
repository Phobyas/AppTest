import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter as Router, Link, NavLink, Route, Routes } from "react-router-dom"
import Header from './layouts/Header';
import Navigation from './layouts/Navigation';
import Page from './layouts/Page';
import Footer from './layouts/Footer';

const Home = () => {
  console.log("renderuje")
  return(
<h1>Strona startowa</h1>
  )
}
const News = () => <h1>Aktualności</h1>
const Contact = () => <h1>Kontakt do nas</h1>

const ErrorPage = () => <h1>ERRRRRRORRRR NIE MA TAKIEJ STRONY</h1>

class App extends Component {
  state = {  } 
  render() { 
    return (
      <Router>
      <div>
        <header>
          <nav>
            <ul>
              {/* <li><a href="/">Start</a></li>
              <li><a href="/news">Aktualności</a></li>
              <li><a href="contact">Kontact</a></li> */}
              <li><NavLink to="/" className={({ isActive }) => (isActive ? "home-selected" : "")}>Start</NavLink></li>
              <li><NavLink to="/news" className={({ isActive }) => (isActive ? "news-selected" : "")}>Aktualności</NavLink></li>
              <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "contact-selected" : "")}>Kontakt</NavLink></li>
            </ul>
          </nav>
        </header>
        <section>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<ErrorPage />} />
          </Routes>
        </section>
      </div>
      </Router>
    );
  }
}
 
export default App;