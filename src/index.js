// var React = require('react');
// var ReactDom = require('react-dom');
import React from "react";
import ReactDom from "react-dom";
import "./index.css";
// import React from 'react';
// component is made of:
// state.
// lifecycle.event
// UI

class App extends React.Component {
    render(){
        return (
            <div>
                Hello world
            </div>
        )
    }
}
ReactDom.render(<App />, document.getElementById('root'));