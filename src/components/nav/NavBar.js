import React, { Component } from "react"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./navbar.css"


class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap justify-content-center p-0 shadow">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a href="/home" className="nav-link" >Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/bio" className="nav-link" >Bio</a>
                        </li>
                        <li className="nav-item">
                            <a href="/music" className="nav-link" >Music</a>
                        </li>
                        <li className="nav-item">
                            <a href="/store" className="nav-link" >Store</a>
                        </li>
                        <li className="nav-item">
                            <a href="/photos" className="nav-link" >Photos</a>
                        </li>
                    </ul>
                </nav>
            </React.Fragment>
        )
    }
}

export default NavBar