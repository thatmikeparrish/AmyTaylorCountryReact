import { Route } from "../../../node_modules/react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import React, { Component } from 'react'

import Home from "../home/Home"
import Bio from "../bio/Bio"
import Music from "../music/Music"
import Store from "../store/Store"
import Photos from "../photos/Photos"

export default class App extends Component {

    render() {
        return (
            <React.Fragment>

                <Route path="/home" render={() => {
                    return <Home />
                }} />

                <Route path="/bio" render={() => {
                    return <Bio />
                }} />

                <Route path="/music" render={() => {
                    return <Music />
                }} />

                <Route path="/store" render={() => {
                    return <Store />
                }} />

                <Route path="/photos" render={() => {
                    return <Photos />
                }} />

            </React.Fragment>
        );
    }
}