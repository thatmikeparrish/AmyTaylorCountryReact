import React, { Component } from 'react'
import "./header.css"
/* import logo from './img/logo.png'
import amy from './img/amy.jpg' */


export default class Header  extends Component {
    render() {
        return (
            <div className="header d-flex flex-row justify-content-around" id="home">
                <div className="amy">
                    <div className="logo"></div>
                </div>
                <ul className="tour">
                    <li>
                        <h4>The Spot</h4>
                        <h6>Nashville, TN</h6>
                        <h6>3/18/18 @ 5:30pm</h6>
                        <p>blah blah blah abla blah blah balah</p>
                    </li>
                    <li>Date 2</li>
                    <li>Date 3</li>
                    <li>Date 4</li>
                    <li>Date 5</li>
                </ul>
            </div>
        );
    }
}