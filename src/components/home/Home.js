import "bootstrap/dist/css/bootstrap.min.css"
import React, { Component } from 'react'

import './home.css'

import NavBar from "../nav/NavBar"
import Header from "../header/Header"
import News from "../news/News"
import Subscribe from "../subscribe/Subscribe"

export default class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <div className="background"></div>
                <div className="container scroller">
                    <Header />
                    <News />
                    <Subscribe /> 
                </div>
            </React.Fragment>
        );
    }
}