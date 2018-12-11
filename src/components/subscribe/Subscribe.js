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
                <div className="line d-flex justify-content-around">
                    <h2 className="box title">Contact</h2>
                    <h2 className="box title">Subscribe</h2>
                    <h2 className="box title">Bookings</h2>
                </div>
                <div className="d-flex justify-content-around">
                    <form className="box" action="mailto:thatmikeparrish@gmail.com" method="post" encType="text/plain">
                        <input type="text"  name="name" placeholder="Name" />
                        <input type="text"  name="email" placeholder="Email" />
                        <textarea type="text"  name="comment" placeholder="Comment" />
                        <br></br>
                        <input type="submit" value="Send" />
                    </form>
                    <div className="box d-flex flex-wrap justify-content-around">
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
                    <div className="boxBookings">
                        <ul className="list-unstyled">
                            <li>Phone: (724)812-6795</li>
                            <li>E-mail: amytaylorcountry@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}