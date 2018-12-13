import React, { Component } from 'react'
import "./bio.css"

import NavBar from '../nav/NavBar'
import Subscribe from "../subscribe/Subscribe"

export default class Bio extends Component {

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <div className="background"></div>
                <div className="container scroller">
                    <div className="bio">
                        <h1 className="title">Bio</h1>
                        <div className="d-flex justify-content-center">
                            <div className="bioInfo">
                                <div className="amyBio justify"></div>
                                <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Amy Taylor loves all types of music, as well as her love for all types of people, animals and, most of all, books. Finding inspiration from all melodies, but staying true to her voice so deeply rooted in country, bluegrass, and southern gospel. Amy's songwriting is nothing but three chords and her truth. Inspired by a young girl that reminded her so much of herself produced "Wallflower Beauty" and "Until You" shares her own personal love story with husband Chad. Every song she writes is a chapter from her story. Then with her seamless vocals she helps her audience feel every lyric.</p>

                                <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; That voice has landed Amy on stage performing all over Applachia, the Mid-Atlantic, the South and other parts of the U.S. From large festivals like the International Bluegrass Music Association to opening an arena show for Mark Wills and John Berry. Amy has participated in competitions like Texas Troubadour Songwriter Classic where she won Song of the Year for "Halfway to Memphis" in front of Suzy Bogguss, who is an idol of Amy's. She continues to share her great stories in songwriter rounds at places such as Bobby's Idle Hour with upcoming artists like Ashley McBryde. And she is a regular at Belcourt Taps, Jim Oliver's Smokehouse, and Natchez Hills at Fontanel. All of these experiences have given her the opportunities to play with so many great musicians, as well as some of her inspirations that she only dreamed of getting to sing with!</p>

                                <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Looking to inspire others with her songs and voice, she also loves to sing the songs from those that greatly inspired her. Alison Krauss, Sara Evans and Lee Ann Womack are female vocalists that resonate the most with Amy. While there are so many more, but never enough space to include the rest. She never forgets about the boys, loving the songs of Randy Travis, Keith Whitley and Jamey Johnson. Each of these artist's sound and style can be heard when you listen closely to Amy.</p>

                                <p>​&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; When Amy got her first taste of the spotlight singing on the radio at the age of five, she was hooked. Growing up in the same house with her biggest female vocal influence, her mom, Valerie Gabehart. This is where Amy learned the value of family harmony and is blessed with Valerie's smooth, clear tone. Amy's dad, Jim Gabehart, has an ear so good he can play anything with strings and taught Amy how to play guitar, upright bass and mandolin. The music was constant in her life and in her blood. There was no stopping her from getting to Nashville, TN where artists, like herself create the most beautiful stories in song.</p>
                            </div>
                        </div>
                    </div>
                    <Subscribe />
                </div>
            </React.Fragment >
        );
    }
}