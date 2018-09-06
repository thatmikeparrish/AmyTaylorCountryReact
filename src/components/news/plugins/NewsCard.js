import React, { Component } from 'react'
import "../news.css"

export default class NewsCard  extends Component {
    render() {
        return (
            <div className="card">
                    <div className="card-header">
                        <h6>{this.props.event.title}</h6>
                    </div>
                    <div className="card-body">
                        <p>{this.props.event.date}</p>
                        <p>{this.props.event.location}</p>
                        <p>{this.props.event.address}</p>
                        <p>{this.props.event.city}, {this.props.event.state}, {this.props.event.zipcode}</p>
                    </div>
                </div>
        )
    }
}