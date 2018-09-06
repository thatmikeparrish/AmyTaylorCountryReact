import React, { Component } from 'react'
import "./news.css"

import NewsDeck from './plugins/NewsDeck'

export default class News  extends Component {
    render() {
        return (
            <div className="news">
                <h1 className="title">News</h1>
                <NewsDeck {...this.props}/>                   
                <div id="music"></div>
            </div>
        );
    }
}