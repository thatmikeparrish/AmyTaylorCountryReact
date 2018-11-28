import "bootstrap/dist/css/bootstrap.min.css"
import React, { Component } from 'react'
import NavBar from "../nav/NavBar"
import Header from "../header/Header"
import News from "../news/News"
import Music from "../music/Music"
import Photos from "../photos/Photos"
import Bio from "../bio/Bio"
import Subscribe from "../subscribe/Subscribe"
import Footer from "../footer/Footer"

import './appBuilder.css'
import JSONManager from '../../modules/JSONManager';

export default class AppBuilder extends Component {

    /* state = {
        events: [],
        photos: []
    }

    componentDidMount() {
        let newState = {}

        JSONManager.getAll("events").then(allEvents => newState.events = allEvents)
            .then(() => JSONManager.getAll("photos"))
            .then(allPhotos => newState.photos = allPhotos)
            .then(() => {
                this.setState(newState)
            })
    } */

    render() {
        return (
            <React.Fragment>
                <div className="background"></div>
                <div className="container scroller">
                    <NavBar />
                    <div id="top"></div>
                    <Header />
                    {/* <News events={this.state.events} /> */} 
                    <div id="bio"></div>
                    <Bio /> 
                    <div id="music"></div>
                    <Music /> 
                    <div id="photos"></div>
                    <Photos /> 
                    <div id="subscribe"></div>
                    <Subscribe /> 
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}