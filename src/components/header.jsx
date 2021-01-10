import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './header.css';

export default class Header extends Component {
    render() {
	return (
	    <div className="container-fluid col-12 flex-fill">
		<h1 className="headerName">
		    <Link to="/about" style={{color:"black"}}>Louis Lefebvre</Link>
		    
		    <ul className="icons">
			    <li><a href="https://www.linkedin.com/in/louis-lefebvre-3b1279173/" target="_blank" rel="noopener noreferrer" className="fab fa-linkedin"></a></li>
			    <li><a href="mailto: lefeb073@umn.edu" target="_blank" rel="noopener noreferrer" className="far fa-paper-plane"></a></li>
			    <li><a href="https://www.instagram.com/louis_lefebvree/" target="_blank" rel="noopener noreferrer" className="fab fa-instagram"></a></li>
			    <li><a href="https://github.com/louislef299" target="_blank" rel="noopener noreferrer" className="fab fa-github"></a></li>
			    <li><a href="https://www.strava.com/athletes/53228508" target="_blank" rel="noopener noreferrer" className="fab fa-strava"></a></li>
			    <li><a href="https://open.spotify.com/user/lefavorite?si=qRWphRWmRvSxwdSe7pN5Xw" target="_blank" rel="noopener noreferrer" className="fab fa-spotify"></a></li>

			</ul>
		    
		</h1>
	    </div>
	)
    }
}
