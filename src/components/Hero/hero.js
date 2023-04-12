import React, {useState} from 'react';
// import {fireEvent} from "@testing-library/react";
import {data} from "../../data/data";


const Hero = () => {

    // const [counter, setCounter] = useState(0)

    const [modal, setModal] = useState(true)



    return (
        <section id='hero'>
            <div className='container'>
                {
                    data.map(el => (
                        <div>
                            <div>
                                <h4>{el.name}</h4>
                                {el.ingredients.map(ingredients => (
                                    <ul>
                                        <li>{ingredients.name}</li>
                                    </ul>
                                ))}
                            </div>

                            <div>
                                <h5>{el.steps}</h5>
                                {el.steps.map(steps => (
                                    <ul></ul>
                                ))}
                            </div>

                            <div>
                                <h5>{el.name.ingredients}</h5>
                                {el.ingredients.map((ingredients => (
                                    <ul></ul>
                                )))}
                            </div>
                         </div>
                    ))
                }

                {/*<div className="App">*/}
                {/*    <h1>{counter}</h1>*/}
                {/*    <button*/}
                {/*        onClick={() => setCounter(counter + 1)}*/}
                {/*    >Increment*/}
                {/*    </button>*/}
                {/*    <button*/}
                {/*        onClick={() => setCounter(counter - 1)}> Decrement*/}
                {/*    </button>*/}
                {/*</div>*/}

                <div id="social-modal">
                    <div className="social-modal">
                        <h2>Send</h2>

                        <div className="social-modal icons">
                            <div className="social-modal whatsapp">
                                {/*<FiInstagram/>*/}
                            </div>
                            <div className="social-modal instagram"></div>
                        </div>

                        <button style={{
                            transition: '.4s',
                            background: modal ? 'gray' : 'red',
                            color:  modal ? 'black' : 'black'
                        }}  onClick={() => setModal(!modal)}>{modal ? 'open modal' : "close modal"}</button>

                        <div style={{
                            transform: modal ? "translateY(1000px)" : 'translateY(0)',
                            transition: '.4s',
                            background: modal ? 'gray' : '',
                        }} className='block' placeholder="holder">
                            <button onClick={() => setModal(true)}> {modal ? '' : 'X'}</button>

                            <input type="text"/>
                            <p> Mozilla Firefox — свободный браузер на движке Quantum, разработкой и
                                распространением которого занимается Mozilla Corporation. Четвёртый по популярности
                                браузер
                                в мире и первый среди свободного ПО — в марте 2021 года его рыночная доля составила
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;