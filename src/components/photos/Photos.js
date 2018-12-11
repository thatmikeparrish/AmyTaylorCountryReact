import React, { Component } from 'react'
import "./photos.css"

import NavBar from '../nav/NavBar'
import Subscribe from "../subscribe/Subscribe"

export default class Store extends Component {

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <div className="background"></div>
                <div className="container scroller">
                    <div className="bio">
                        <h1 className="title">Photos</h1>
                    </div>
                    <Subscribe />
                </div>
            </React.Fragment>
        );
    }
}