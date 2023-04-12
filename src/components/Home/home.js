import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <section id="home">
            <div className="container">
                <div className="home">
                    <Link to={'/home'}>
                        <h1>Hello Home!!!</h1>
                        
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Home;