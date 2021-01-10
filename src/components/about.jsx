import React, { Component } from 'react';
import mainImage from './images/computerex.gif';
import './about.css';

export default class About extends Component {
    render () {
	return (
	    <div className="container col-md-10">
		<img src={mainImage} alt="Main Page" className="chamonixImage" />
	    </div>
	)
    }
}
