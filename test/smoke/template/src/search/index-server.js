'use strict'

// import React from 'react';
// import logo from './images/logo1.png'
// import './search.less'
// import largeNumber from 'large-number';
const React = require('react');
const largeNumber = require('large-number');
const logo = require('./images/logo1.png');
require('./search.less');



class Search extends React.Component {

    constructor(){
        super(...arguments);

        this.state = {
            Text:null
        }
    }

    loadComponent() {
        import('./text.js').then((Text)=>{
            this.setState({
                Text:Text.default
            })
        });
    }

    render(){
        const {Text} = this.state;
        const addRes = largeNumber('888','2');
        return <div className="search-name">
                {
                    Text ? <Text /> : null
                }
                {addRes}
                   搜索的页面你好的<img src={logo} onClick={this.loadComponent.bind(this)} alt=""/>
                    
                </div>;
    }
}

module.exports = <Search />;