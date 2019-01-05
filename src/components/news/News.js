import React, { Component } from 'react'
import "./news.css"

import tour20190119 from './img/20190119.png'
import tour20181218 from './img/20181230.jpg'
import tour20181101 from './img/20181101.jpg'
import tour20181013 from './img/20181013.png'

export default class News extends Component {
    render() {


        return (
            <div className="news">
                <h1 className="title">News</h1>
                <div id="card" class="carousel slide" data-ride="carousel">

                    {/* <!-- Indicators --> */}
                    <ul class="carousel-indicators">
                        <li data-target="#card" data-slide-to="0" class="active"></li>
                        <li data-target="#card" data-slide-to="1"></li>
                        <li data-target="#card" data-slide-to="2"></li>
                        <li data-target="#card" data-slide-to="3"></li>
                    </ul>

                    {/* <!-- The slideshow --> */}
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="card">
                                <img class="card-img-top" src={tour20190119} alt="New tour date 1 19 2019" />
                                <div class="card-body">
                                    <h5 class="card-title">New tour date for 2019!</h5>
                                    <p class="card-text">Booked my first show for the new year! Look out Texas, I'm coming back! More info coming soon!</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card">
                                <img class="card-img-top" src={tour20181218} alt="New tour date 12 18 2018" />
                                <div class="card-body">
                                    <h5 class="card-title">New tour date for 2018!</h5>
                                    <p class="card-text">Sunday December 30th at Just Love Coffee Cafe on Music Row.</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card">
                                <img class="card-img-top" src={tour20181101} alt="New tour date 11 01 2018" />
                                <div class="card-body">
                                    <h5 class="card-title">Get ready Texas!</h5>
                                    <p class="card-text">Y'all asked for it! Here I come Texas!</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card">
                                <img class="card-img-top" src={tour20181013} alt="New tour date 10 13 2018" />
                                <div class="card-body">
                                    <h5 class="card-title">New tour date for 2018!</h5>
                                    <p class="card-text">Gonna be a great weekend!!!!!!!! Here I come Indiana and Kentucky!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Left and right controls --> */}
                    <a class="carousel-control-prev" href="#card" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="#card" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>
        );
    }
}