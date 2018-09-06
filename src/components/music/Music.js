import React, { Component } from 'react'
import SpotifyPlayer from 'react-spotify-player'
import "./music.css"

export default class Music  extends Component {
    render() {
        return (
            <div className="music">
                <h1 className="title">Music</h1>
                <div className="d-flex justify-content-center">
                    <div className="album">
                        <SpotifyPlayer
                            uri="https://open.spotify.com/album/18nlzhk6H0AFGPkI5NHBHP?si=VqqEDi5AQr2jG5DBNhaYGg"
                            size="large"
                            view="list"
                            theme="black"
                        />
                    </div>
                    <div className="album">
                        <SpotifyPlayer
                            uri="https://open.spotify.com/album/5P9nV0Ia1XvyUbPVRrmfgS?si=XziIyGxFQ_mGreDoNo1Ipg"
                            size="large"
                            view="list"
                            theme="black"
                        />
                    </div>
                </div>
                <div id="photos"></div>
            </div>
        );
    }
}