import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './navbar.css';

export default class Navbar extends Component {
    render() {
	return (
	    <div className="grid">
		<div dataSpy="scroll" dataTarget="#myScrollspy" dataOffset="1">
		    <nav id="navbar-example3" align="left" className="navbar col-md-2 navbar-light bg-light">
			<a classsName="navbar-brand" style={{marginLeft:"15px"}}><Link to="/" style={{color:"black"}}>Home </Link></a>
			    <nav classsName="nav nav-pills row flex-column">
				<div className="row">
				    <a classsName="nav-link col-md-9 col-8" style={{marginLeft:"30px"}}><Link to="/about" style={{color:"black"}}>About</Link></a>
				</div>
				<div className="row">
				    <a classsName="nav-link col-md-9 col-8" style={{marginLeft:"30px"}}><Link to="/" style={{color:"black"}}>Resume</Link></a>
				</div>
				<div className="row">
				    <a classsName="nav-link col-md-9 col-8" style={{marginLeft:"30px"}}><Link to="/" style={{color:"black"}}>item</Link></a>
				</div>
			    </nav>
			</nav>
		    </div>
		</div>
	)
    }
}
