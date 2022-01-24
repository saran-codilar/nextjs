import React, { Component } from 'react';
import './Bottom.css';
import Tab from './learn.png';

export default class Bottom extends Component {
    render() {
        return <div>
            <div className="bottom">
                <h2 className="learnnext">Learn Next.js</h2>
                <p>Learn Next.js step-by-step and earn points ✨.</p>
            </div>
            <div className="tab" >
                <img src={Tab} alt="image" className="tabimage" />
            </div>
            <div className="para">
                <span className="start">Get Started</span>
            </div>
            <div className="mail">
                <div className="box1">
                    <h2 className="content1">Next.js is getting better every day — don’t miss out on all the action.</h2>
                    <p className="content2">Join the Next.js newsletter and stay updated on new releases and features, guides, and case studies.</p>
                </div>
                <div className="box2">
                    <input type="text" class="icon" placeholder="you@domain.com"></input>
                    <div className="sub">
                        <span className="subscribe">Subscribe</span>
                    </div>
                </div>
            </div>
        </div>;
    }
}
