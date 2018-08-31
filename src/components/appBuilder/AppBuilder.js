import React, { Component } from 'react'
import NavBar from "../nav/NavBar"
import Header from "../header/Header"
import News from "../news/News"
import Music from "../music/Music"
import Photos from "../photos/Photos"
import Bio from "../bio/Bio"
import Subscribe from "../subscribe/Subscribe"

import './appBuilder.css'

export default class AppBuilder extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="background"></div>
                <div className="container scroller">
                    <NavBar />
                    <Header />
                    <News /> 
                    <Music /> 
                    <Photos /> 
                    <Bio /> 
                    <Subscribe /> 
                </div>
            </React.Fragment>
        );
    }
}