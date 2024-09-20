import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Route, Routes } from "react-router-dom"
import "../styles/AppSpa.css"
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';

class AppSpa extends Component {
    state = {  } 
    render() { 
        return (
            <div className="app">
                <header>
                    {<Header />}
                </header>
                <main>
                
                    <aside>
                   
                        {<Navigation />}
                       
                    </aside>
                
                    <section className="page">
                        {<Page />}
                    </section>
                </main>
                <footer>
                    {<Footer />}
                </footer>
            </div>
        );
    }
}
 
export default AppSpa;