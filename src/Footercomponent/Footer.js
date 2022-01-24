import React, { Component } from 'react';
import Vercel from './vercel.png';
import './Footer.css';

export default class extends Component {
    render() {
        return <div>
            <hr></hr>
            <div class="grid2">
                <div class="list">
                    <ol><a href="#" className="item"><b>General resources</b></a></ol>
                    <ol><a href="#">Docs</a></ol>
                    <ol><a href="#">Learn</a></ol>
                    <ol><a href="#">Showcase</a></ol>
                    <ol><a href="#">Blog</a></ol>
                    <ol><a href="#">Analytics</a></ol>
                    <ol><a href="#">Next.Js Conf</a></ol>
                    <ol><a href="#">Live</a></ol>
                </div>

                <div class="list">
                    <ol><a href="#" className="item"><b>More</b></a></ol>
                    <ol><a href="#">Commerce</a></ol>
                    <ol><a href="#">Contact Sales</a></ol>
                    <ol><a href="#">GitHub</a></ol>
                    <ol><a href="#">Releases</a></ol>
                    <ol><a href="#">Telemetry</a></ol>
                </div>

                <div class="list">
                    <ol><a href="#" className="item"><b>About Vercel</b></a></ol>
                    <ol><a href="#">Open Source Software</a></ol>
                    <ol><a href="#">GitHub</a></ol>
                    <ol><a href="#">Twitter</a></ol>
                </div>

                <div class="list">
                    <ol><a href="#" className="item"><b>Legal</b></a></ol>
                    <ol><a href="#">Privacy Policy</a></ol>
                </div>
            </div>
            <div>
                <img src={Vercel} alt="image" className="vercel" />
                <p className="copyright">Copyright © 2022 Vercel, Inc. All rights reserved.</p>
            </div>
        </div>
    }
}
