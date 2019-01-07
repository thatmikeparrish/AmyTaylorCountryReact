import React, { Component } from 'react'
import "./store.css"

import NavBar from '../nav/NavBar'
import Subscribe from "../subscribe/Subscribe"

import Mix from "../store/img/Mix.jpg"
import Back from "../store/img/Back.jpg"

export default class Store extends Component {

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <div className="background"></div>
                <div className="container scroller">
                    <div className="store">
                        <h1 className="title">Store</h1>
                        <div className="row">
                            <div className="col-2 d-flex justify-content-center flex-column">
                                    <img className="shopImg" src={Mix} />
                                    <img className="shopImg" src={Back} />
                            </div>
                            <div className="col-6">
                                <div className="largeShopImg"></div>
                            </div>
                            <div className="col-3 sales textbox">
                                <h3>Amy Taylor T-Shirts</h3>
                                <h6>$15.00 + S&H</h6>
                                <h6>Available Sizes S, M, L, XL, XXL</h6>
                                <br></br>
                                <h6>Contact me for sales!</h6>
                                <p>amytaylorcountry@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <Subscribe />
                </div>
            </React.Fragment>
        );
    }
}