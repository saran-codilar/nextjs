import React, { Component } from 'react';
import './Marquee.css';
import Magicleap from './magicleap.svg';
import Pling from './pling.png';
import Ticketmaster from './ticketmaster.svg';
import Twitch from './twitch.svg';
import Eaz from './eaz.svg';
import Github from './github.svg';
import Netflix from './netflix.svg';
import Scale from './scale.svg';
import Sesame from './sesame.svg';
import Trulia from './trulia.svg';
import Open from './open.svg';

import Auth from './auth.svg';
import Binance from './binance.svg';
import Coin from './coin.svg';
import Docker from './docker.svg';
import God from './god.svg';
import Hulu from './hulu.svg';
import Jet from './jet.png';
import Tencent from './tencent.svg';
import Trovit from './trovit.svg';
import Uber from './uber.svg';
import Vision from './vision.svg';
import Hulutext from './hulutext.png';

export default class Marquee extends Component {
    render() {
        return <div>
            <div>
                <marquee scrollamount="3" className="marquee">
                    <img src={Ticketmaster} alt="image" className="marqueeimage" />
                    <img src={Twitch} alt="image" className="marqueeimage" />
                    <img src={Sesame} alt="image" className="marqueeimage" />
                    <img src={Pling} alt="image" className="marqueeimage" />
                    <img src={Open} alt="image" className="marqueeimage" />
                    <img src={Eaz} alt="image" className="marqueeimage" />
                    <img src={Magicleap} alt="image" className="marqueeimage" />
                    <img src={Trulia} alt="image" className="marqueeimage" />
                    <img src={Netflix} alt="image" className="marqueeimage" />
                    <img src={Github} alt="image" className="marqueeimage" />
                    <img src={Scale} alt="image" className="marqueeimage" />
                </marquee>

                <marquee scrollamount="3" className="marquee1">
                    <img src={Tencent} alt="image" className="marqueeimage1" />
                    <img src={Jet} alt="image" className="marqueeimage1" />
                    <img src={God} alt="image" className="marqueeimage1" />
                    <img src={Docker} alt="image" className="marqueeimage1" />
                    <img src={Hulu} alt="image" className="marqueeimage1" />
                    <img src={Coin} alt="image" className="marqueeimage1" />
                    <img src={Uber} alt="image" className="marqueeimage1" />
                    <img src={Vision} alt="image" className="marqueeimage1" />
                    <img src={Trovit} alt="image" className="marqueeimage1" />
                    <img src={Binance} alt="image" className="marqueeimage1" />
                    <img src={Auth} alt="image" className="marqueeimage1" />
                </marquee>
                <div className="casestudy">
                    <img src={Hulutext} alt="image" className="hulu" />
                    <p className="study">Read Case Study</p>
                </div>
            </div>
        </div>;
    }
}
