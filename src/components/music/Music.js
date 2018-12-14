import React, { Component } from 'react'
import SpotifyPlayer from 'react-spotify-player'
import "./music.css"

import NavBar from '../nav/NavBar'
import Subscribe from "../subscribe/Subscribe"

export default class Music extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <div className="background"></div>
                <div className="container scroller">
                    <div className="music">
                        <h1 className="title">Music</h1>
                        <div className="d-flex justify-content-center">
                            <div className="d-flex flex-column">
                                <h2 className="musicTitle">What Kind of a Bar</h2>
                                <div className="musicBox d-flex">
                                    <div className="textbox d-flex flex-row">
                                        <div className="album">
                                            <SpotifyPlayer
                                                uri="https://open.spotify.com/album/5P9nV0Ia1XvyUbPVRrmfgS?si=XziIyGxFQ_mGreDoNo1Ipg"
                                                size="compact"
                                                view="list"
                                                theme="black"
                                            />
                                        </div>
                                        <p>Amy's newly released single, <i>What Kind of a Bar</i> is now available!</p>
                                    </div>
                                </div>
                                <h2 className="musicTitle">Amy Taylor (album)</h2>
                                <div className="musicBox d-flex">
                                    <div className="textbox d-flex flex-row">
                                        <div className="album">
                                            <SpotifyPlayer
                                                uri="https://open.spotify.com/album/18nlzhk6H0AFGPkI5NHBHP?si=VqqEDi5AQr2jG5DBNhaYGg"
                                                size="large"
                                                view="list"
                                                theme="black"
                                            />
                                        </div>
                                        <div>
                                            <p>Engineered and Produced by <i>Steve Thomas</i>.</p>
                                            <p>Recorded at <i>Eagle Canyon Music</i> and <i>Gain Train Studios</i> in Nashville, TN</p>
                                            <p><b>Musicians:</b> Josh Shilling - Keyboards, Background Vocals | James Mitchell - Electric Guitar | R.K. Brown - Bass | Grady Saxman - Drums | Steve Thomas - Acoustic Guitar, Fiddle, Mandolin | Jenelle Arthur - Background Vocals</p>
                                            <p><b>Songs:</b> Until You - Amy Taylor and Christina Cecrle (Christina Christian Publishing) (BMI) | Outlaw to my In-Laws - Amy Taylor and Liz Downing (Liz Downing Music) (BMI) (ASCAP) | Halfway to Memphis - Amy Taylor (BMI) | Wallflower Beauty - Amy Taylor (BMI) | Home is Where the Heart Is - Haywood, Kelley, Scott, Shaw (BMI) (SESAC) | Right Where I Want Ya - Amy Taylor and Amanda Cooksey (BMI) (ASCAP) | Kids Again - Amy Taylor, Patricia Patts, and Russell Wix (Row Hound Publishing) (BMI) (ASCAP)</p>
                                            <p>Photography: Antonio Fajardo</p>
                                            <p>HMUA: Samantha Hedges</p>
                                            <p>Location: Mount Juliet Library</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Subscribe />
                </div>
            </React.Fragment>
        );
    }
}