import React, { Component } from 'react'
import "./header.css"
/* import logo from './img/logo.png'
import amy from './img/amy.jpg' */


export default class Header extends Component {
    render() {
        return (
            <div className="header d-flex flex-row justify-content-around" id="home">
                <div className="amy">
                    <div className="logo"></div>
                </div>
                <ul className="">
                    <h1>Tour Dates</h1>
                    <li className="tour d-flex flex-row">
                        <div className="tourDate">
                            <h5>3/18/18</h5>
                            <br />
                            <h6>5:30pm</h6>
                        </div>
                        <div className="tourInfo">
                            <h4>Nashville, TN</h4>
                            <h5>The Spot</h5>
                            <p>blah blah blah abla blah blah balah</p>
                        </div>
                    </li>
                    <li className="tour d-flex flex-row">
                        <div className="tourDate">
                            <h5>3/18/18</h5>
                            <br />
                            <h6>5:30pm</h6>
                        </div>
                        <div className="tourInfo">
                            <h4>Nashville, TN</h4>
                            <h5>The Spot</h5>
                            <p>blah blah blah abla blah blah balah</p>
                        </div>
                    </li>
                    <li className="tour d-flex flex-row">
                        <div className="tourDate">
                            <h5>3/18/18</h5>
                            <br />
                            <h6>5:30pm</h6>
                        </div>
                        <div className="tourInfo">
                            <h4>Nashville, TN</h4>
                            <h5>The Spot</h5>
                            <p>blah blah blah abla blah blah balah</p>
                        </div>
                    </li>
                    <li className="tour d-flex flex-row">
                        <div className="tourDate">
                            <h5>3/18/18</h5>
                            <br />
                            <h6>5:30pm</h6>
                        </div>
                        <div className="tourInfo">
                            <h4>Nashville, TN</h4>
                            <h5>The Spot</h5>
                            <p>blah blah blah abla blah blah balah</p>
                        </div>
                    </li>
                    <li className="tour d-flex flex-row">
                        <div className="tourDate">
                            <h5>3/18/18</h5>
                            <br />
                            <h6>5:30pm</h6>
                        </div>
                        <div className="tourInfo">
                            <h4>Nashville, TN</h4>
                            <h5>The Spot</h5>
                            <p>blah blah blah abla blah blah balah</p>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}