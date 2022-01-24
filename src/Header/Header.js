import React, { Component } from 'react'
import './Header.css';
import Vercel from './vercel.png';
import Nextjs from './nextjs.png';
import Github from './github.png';
import Menu from './menu.png';
import Close from './close.png';

export default class Header extends Component {

    constructor(props){
        super(props);
        this.state=
        {
            isMenu: true,
            isMenubar: true
        };
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({isMenu:!this.state.isMenu})
        this.setState({isMenubar:!this.state.isMenubar})
      }

    render() {
        return (
            <div>
                <div className="header">
                    <img src={Vercel} alt="image" className="vercel" />
                    <span className="heading">Deploy Next.js in seconds →</span>
                </div>
                <div className="body1">
                    <a href="#"><img src={Nextjs} alt="image" className="nextjs" /></a>
                    <a href="#" className="title">Showcase</a>
                    <a href="#" className="title">Docs</a>
                    <a href="#" className="title">Blog</a>
                    <a href="#" className="title">Analytics</a>
                    <a href="#" className="title">Examples</a>
                    <a href="#" className="title">Enterprise</a>
                    <a href="#" className="learn">Learn</a>
                    <img src={Github} alt="image" className="github" />
                    <img src={Menu} alt="image" className={this.state.isMenubar? ('menu'):('menu menu1')} onClick={this.handleClick} />
                    <img src={Close} alt="image" className={this.state.isMenubar? ('close'):('close close1')} onClick={this.handleClick} />

                </div>
                <div className={this.state.isMenu? ('dropdown'):('dropdown dropdown1')}>
                    <ol className="droplist"><a href="#">Learn</a></ol>
                    <ol className="droplist"><a href="#">Showcase</a></ol>
                    <ol className="droplist"><a href="#">Docs</a></ol>
                    <ol className="droplist"><a href="#">Blog</a></ol>
                    <ol className="droplist"><a href="#">Analytics</a></ol>
                    <ol className="droplist"><a href="#">Commerce</a></ol>
                    <ol className="droplist"><a href="#">Examples</a></ol>
                    <ol className="droplist"><a href="#">Enterprise</a></ol>
                    <ol className="droplist1"><a href="#">GitHub</a></ol>
                </div>
                <div className="body2">
                    <a href="#" className="box"><p><b className="new">NEW</b> Rust Compiler, Middleware, Edge Functions, Checks, and more! <b className="bold">Watch the latest Next.js Conf Keynote →</b></p></a>
                </div>
            </div>
        )
    }
}
