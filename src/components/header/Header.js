import React, { Component } from 'react'
import "./header.css"
/* import logo from './img/logo.png'
import amy from './img/amy.jpg' */


export default class Header  extends Component {
    render() {
        return (
            <div className="header" id="home">
                <h1 className="title">Home</h1>
                <div className="container d-flex justify-content-center">
                    <div className="logo"></div>
                    <div className="amy"></div>
                </div>
            </div>
        );
    }
}