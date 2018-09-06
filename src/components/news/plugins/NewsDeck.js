import React, { Component } from 'react'
import "../news.css"

import NewsCard from './NewsCard'

export default class NewsDeck  extends Component {
    render() {
        return (
            <div className="cardDeck d-flex justify-content-center">
                {
                    this.props.events.map(event =>
                        <NewsCard key={event.id} event={event} {...this.props} />
                    )
                }
            </div>
        );
    }
}