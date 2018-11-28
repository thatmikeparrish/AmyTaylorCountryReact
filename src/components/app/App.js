import "bootstrap/dist/css/bootstrap.min.css"
import React, { Component } from 'react'
import NavBar from "../nav/NavBar"
import Header from "../header/Header"
import News from "../news/News"
import Music from "../music/Music"
import Photos from "../photos/Photos"
import Bio from "../bio/Bio"
import Subscribe from "../subscribe/Subscribe"

import './App.css'

export default class AppBuilder extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="background"></div>
                <div className="container scroller">
                    <NavBar />
                    <div id="top"></div>
                    <Header />
                    <div id="news"></div>
                    <News />
                    <div id="music"></div>
                    <Music /> 
                    <div id="bio"></div>
                    <Bio /> 
                    <div id="photos"></div>
                    <Photos /> 
                    <div id="subscribe"></div>
                    <Subscribe /> 
                </div>
            </React.Fragment>
        );
    }
}