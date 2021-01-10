import React, { Component } from 'react';
import './contact.css'
import chamonix from './images/IMG_3935.JPG';

export default class Contact extends Component {
    render () {
	return (
	    <div classname="container-fluid contact" style={{backgroundColor:"#fff7e8",height:"100vh",overflow:"auto"}}>
		<h1 className="closing">Thanks for looking me over! Like what you saw? Reach out! Click on the LinkedIn icon at the top of the screen to connect.</h1>
		    <img src={chamonix} alt="finale" className="chax" />
	    </div>
	)
    }
}
