import React, { Component } from 'react'
import "./photos.css"

import NavBar from '../nav/NavBar'
import Subscribe from "../subscribe/Subscribe"

import one from "./img/1.jpg"
import two from "./img/2.jpg"
import three from "./img/3.png"
import four from "./img/4.jpeg"
import five from "./img/5.jpg"
import six from "./img/6.jpg"
import seven from "./img/7.jpg"
import eight from "./img/8.jpg"
import nine from "./img/9.jpg"

export default class Store extends Component {

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <div className="background"></div>
                <div className="container scroller">
                    <div className="bio">
                        <h1 className="title">Photos</h1>
                        <div class="card-columns container">
                            <div class="card">
                                <img class="card-img-top" src={one} alt="Card image cap" />
                            </div>
                            <div class="card">
                                <img class="card-img-top" src={two} alt="Card image cap" />
                            </div>
                            <div class="card">
                                <img class="card-img-top" src={three} alt="Card image cap" />
                            </div>
                            <div class="card">
                                <img class="card-img-top" src={four} alt="Card image cap" />
                            </div>
                            <div class="card">
                                <img class="card-img-top" src={five} alt="Card image cap" />
                            </div>
                            <div class="card">
                                <img class="card-img-top" src={six} alt="Card image cap" />
                            </div>
                            <div class="card">
                                <img class="card-img-top" src={seven} alt="Card image cap" />
                            </div>
                            <div class="card">
                                <img class="card-img-top" src={eight} alt="Card image cap" />
                            </div>
                            <div class="card">
                                <img class="card-img-top" src={nine} alt="Card image cap" />
                            </div>
                        </div>
                    </div>
                    <Subscribe />
                </div>
            </React.Fragment>
        );
    }
}