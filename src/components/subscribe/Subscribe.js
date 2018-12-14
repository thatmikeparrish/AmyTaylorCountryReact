import React, { Component } from 'react'
import "./subscribe.css"

import facebook from './img/facebook.png'
import twitter from './img/twitter.png'
import instagram from './img/instagram.png'
import spotify from './img/spotify.png'
import itunes from './img/itunes.svg'
import googlePlay from './img/googlePlay.png'
export default class Subscribe extends Component {
    render() {
        return (
            <div className="subscribe">
                <div className="d-flex justify-content-around">
                    <div className="box">
                        <h2 className="title line">Contact</h2>
                        <ul className="textbox list-unstyled">
                            <li>Phone: (724) 812-6795</li>
                            <li>E-mail: amytaylorcountry@gmail.com</li>
                        </ul>
                    </div>
                    <div className="box">
                    <h2 className="title line">Subscribe</h2>
                        <div className="d-flex flex-wrap justify-content-around">
                            <a className="" href="">
                                <img className="img" alt="" src={facebook} />
                            </a>
                            <a className="" href="">
                                <img className="img" alt="" src={twitter} />
                            </a>
                            <a className="" href="">
                                <img className="img" alt="" src={instagram} />
                            </a>
                            <a className="" href="">
                                <img className="img" alt="" src={spotify} />
                            </a>
                            <a className="" href="">
                                <img className="img" alt="" src={itunes} />
                            </a>
                            <a className="" href="">
                                <img className="img" alt="" src={googlePlay} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}