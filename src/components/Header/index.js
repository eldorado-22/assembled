import React, {useEffect, useState} from 'react';
import logo from './../../assets/img/logo.svg'
import {Link} from "react-router-dom";

const Index = () => {
    const [burger, setBurger] = useState(true)

    return (

        <header id='header'>
            <div className="container">
                <div className="header">
                    <Link to={'/'}>
                        <img src={logo} alt={logo}/>
                    </Link>
                    <div className="navBar">
                        <a href="#">Home</a>
                        <a href="#">Support</a>
                        <a href="#">About Us</a>
                        <a href="#">Contact</a>
                    </div>
                    <button>Sign Up</button>
                </div>
            </div>
        </header>

    );
};

export default Index;