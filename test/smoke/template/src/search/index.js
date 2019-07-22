'use strict'

import React from 'react';
import ReactDOM from 'react-dom'
import logo from './images/logo1.png'
import './search.less'
import largeNumber from 'large-number';
import {a} from './tree-shaking';


class Search extends React.Component {

    constructor(){
        super(...arguments);

        this.state = {
            Text:null
        }
    }

    loadComponent (){
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
                   搜索的页面你好的李欣<img src={logo} onClick={this.loadComponent.bind(this)} alt=""/>
                    
                </div>;
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
);