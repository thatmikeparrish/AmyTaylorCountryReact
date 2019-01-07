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
                            <a className="" href="https://www.facebook.com/amytaylorcountry/">
                                <img className="img" alt="" src={facebook} />
                            </a>
                            <a className="" href="https://twitter.com/ataylorcountry">
                                <img className="img" alt="" src={twitter} />
                            </a>
                            <a className="" href="https://www.instagram.com/amytaylorcountry/">
                                <img className="img" alt="" src={instagram} />
                            </a>
                            <a className="" href="https://open.spotify.com/artist/6VlEebnc4BQmYGAkIbdfU6?si=Tnpwen74Q5WXZKRA721lmQ">
                                <img className="img" alt="" src={spotify} />
                            </a>
                            <a className="" href="https://itunes.apple.com/album/id1241202375?ls=1&app=itunes">
                                <img className="img" alt="" src={itunes} />
                            </a>
                            <a className="" href="https://play.google.com/store/music/album/Amy_Taylor_Amy_Taylor?id=Bzzbkzkpbjddisykklm3eo2ncju">
                                <img className="img" alt="" src={googlePlay} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}