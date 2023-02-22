import React from 'react';
import logo from './../../assets/img/logo.svg'

const Index = () => {
    return (
        <header id='header'>
            <div className="container">
                <div className="header">
                    <img src={logo} alt={logo}/>
                    <div className='header--nav'>
                        <a href='#'>Home</a>
                        <a href='#'>Recipes</a>
                        <a href='#'>Meat</a>
                        <a href='#'>About</a>
                        <a href='#'>Blog</a>
                        <a href='#'>Support</a>
                        <button className='header--nav__one'>Sign in</button>
                        <button className='header--nav__two'>Request demo</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Index;