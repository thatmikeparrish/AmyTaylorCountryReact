import React, { Component } from 'react'
import "../news.css"

export default class NewsCard  extends Component {

    render() {
        return (
            <div id={this.props.event.id} className="card newsCard">
                    <img className="card-img" src={`../img/${this.props.event.id}.jpg`} alt={this.props.event.title}/>
                    <div className="card-img-overlay">
                        <div className="card-title">
                            <h6>{this.props.event.title}</h6>
                        </div>
                        <div className="card-text">
                            <p>{this.props.event.date}</p>
                            <p>{this.props.event.location}</p>
                            <p>{this.props.event.address}</p>
                            <p>{this.props.event.city}, {this.props.event.state}, {this.props.event.zipcode}</p>
                        </div>
                    </div>
                </div>
        )
    }
}