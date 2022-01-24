import React, { Component } from 'react'
import './Bodycomponent.css';

export default class Bodycomponent extends Component {
    render() {
        return (
            <div>
                <div className="main1">
                    <h1>The React Framework for Production</h1>
                    <p>Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.</p>
                </div>
                <div className="main2">
                    <p className="startlearn">Start Learning</p>
                    <p className="docs">Documentation</p>
                </div>
                <div className="licence">
                    <p>License: MIT</p>
                    <p className="git">GitHub</p>
                </div>
                <div className="web">
                    <h1 className="sdk">The Web SDK</h1>
                    <p className="fast">Next.js has all the tools you need to make the Web. Faster.
</p>
                </div>
            </div>
        )
    }
}
