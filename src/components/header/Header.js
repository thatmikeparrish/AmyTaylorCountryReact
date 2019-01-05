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
                <ul className="playDates">
                    <li className="title">
                        <p><h1>2018-2019 Tour Dates</h1></p>
                    </li>
                    <li className="tour d-flex flex-row">
                        <div className="tourDate">
                            <h5>11/1/2018</h5>
                            <br />
                            <h6>7:00pm</h6>
                        </div>
                        <div className="tourInfo">
                            <p><h4>Richardson, TX</h4></p>
                            <p><h5>Guitars and Growlers</h5></p>
                        </div>
                    </li>
                    <li className="tour d-flex flex-row">
                        <div className="tourDate">
                            <h5>11/2/2018</h5>
                            <br />
                            <h6>7:30pm</h6>
                        </div>
                        <div className="tourInfo">
                            <p><h4>Fort Worth, TX</h4></p>
                            <p><h5>Fred's Texas Cafe</h5></p>
                        </div>
                    </li>
                    <li className="tour d-flex flex-row">
                        <div className="tourDate">
                            <h5>11/3/2018</h5>
                            <br />
                            <h6>5:00pm</h6>
                        </div>
                        <div className="tourInfo">
                            <p><h4>Clifton, TX</h4></p>
                            <p><h5>Texas Troubadour Singwriting Classic</h5></p>
                            <p>Tickets: $25</p>
                        </div>
                    </li>
                    <li className="tour d-flex flex-row">
                        <div className="tourDate">
                            <h5>12/30/2018</h5>
                            <br />
                            <h6>3:00pm</h6>
                        </div>
                        <div className="tourInfo">
                            <p><h4>Nashville, TN</h4></p>
                            <p><h5>Just Love Coffee Cafe</h5></p>
                        </div>
                    </li>
                    <li className="tour d-flex flex-row">
                        <div className="tourDate">
                            <h5>1/19/2019</h5>
                            <br />
                            <h6>tba</h6>
                        </div>
                        <div className="tourInfo">
                            <p><h4>TX</h4></p>
                            <p><h5>tba</h5></p>
                            <p>More info coming soon!</p>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}