import React, { Component } from 'react'
import "./photos.css"

export default class Photos  extends Component {
    render() {
        return (
            <div className="photos">
                <h1 className="title">Photos</h1>
                <div className="photoHolder d-flex flex-row justify-content-center">
                    <div className="mainPhoto"></div>
                    <img src=""></img>
                    <div className="secondaryPhotos d-flex flex-row flex-wrap justify-content-between">
                        <div className="sPhoto"></div>
                        <div className="sPhoto"></div>
                        <div className="sPhoto"></div>
                        <div className="sPhoto"></div>
                        <div className="sPhoto"></div>
                        <div className="sPhoto"></div>
                        <div className="sPhoto"></div>
                        <div className="sPhoto"></div>
                    </div>
                </div>
            </div>
        );
    }
}