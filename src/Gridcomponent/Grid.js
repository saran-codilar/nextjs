import React, { Component } from 'react';
import './Grid.css';

export default class Grid extends Component {
  render() {
    return <div>
        <div className="grid">
            <div className="grid1">
                <h4>Image Optimization</h4>
                <p className="text1"> Image and Automatic Image Optimization with instant builds.</p>
                <p className="text2">Documentation →</p>
            </div>
            <div className="grid1">
                <h4>Internationalization</h4>
                <p className="text1">Built-in Domain & Subdomain Routing and Automatic Language detection.</p>
                <p className="text2">Documentation →</p>
            </div>
            <div className="grid1">
                <h4>Next.js Analytics</h4>
                <p className="text1">A true lighthouse score based on real visitor data & page-by-page insights</p>
                <p className="text2">Documentation →</p>
            </div>
            <div className="grid1">
                <h4>Zero Config</h4>
                <p className="text1">Automatic compilation and bundling. Optimized for production from the start.</p>
                <p className="text2">Documentation →</p>
            </div>
            <div className="grid1">
                <h4>Hybrid: SSG and SSR</h4>
                <p className="text1">Pre-render pages at build time (SSG) or request time (SSR) in a single project.</p>
                <p className="text2">Documentation →</p>
            </div>
            <div className="grid1">
                <h4>Incremental Static Regeneration</h4>
                <p className="text1">Add and update statically pre-rendered pages incrementally after build time.</p>
                <p className="text2">Documentation →</p>
            </div>
            <div className="grid1">
                <h4>TypeScript Support</h4>
                <p className="text1">Automatic TypeScript configuration and compilation.</p>
                <p className="text2">Documentation →</p>
            </div>
            <div className="grid1">
                <h4>Fast Refresh</h4>
                <p className="text1">Fast, reliable live-editing experience, as proven at Facebook scale.</p>
                <p className="text2">Documentation →</p>
            </div>
            <div className="grid1">
                <h4>File-system Routing</h4>
                <p className="text1">Every component in the pages directory becomes a route.</p>
                <p className="text2">Documentation →</p>
            </div>
            <div className="grid1">
                <h4>API Routes</h4>
                <p className="text1">Optionally create API endpoints to provide backend functionality.</p>
                <p className="text2">Documentation →</p>
            </div>
            <div className="grid1">
                <h4>Built-in CSS Support</h4>
                <p className="text1">Create component-level styles with CSS modules. Built-in Sass support.</p>
                <p className="text2">Documentation →</p>
            </div>
            <div className="grid1">
                <h4>Code-splitting and Bundling</h4>
                <p className="text1">Optimized bundle splitting algorithm created by the Google Chrome team.</p>
                <p className="text2">Documentation →</p>
            </div>
            <div className="extra">
                <h4>And more:</h4>
                <p className="more1">Support for <span>environment variables</span>, <span>preview mode</span>, <span>custom head tags</span>, <span>automatic polyfills</span>, and more.</p>
            </div>
        </div>
        <p className="more"><b>And more:</b> Support for <span>environment variables</span>, <span>preview mode</span>, <span>custom head tags</span>, <span>automatic polyfills</span>, and more.</p>
    </div>
  }
}

