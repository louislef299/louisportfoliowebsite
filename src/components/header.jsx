import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
    render() {
	return (
	    <div className="container-fluid col-12 flex-fill">
		<h1 className="headerName">
		    Louis Lefebvre
		    
			<ul>
			    <li><a href="https://open.spotify.com/user/lefavorite?si=qRWphRWmRvSxwdSe7pN5Xw" target="_blank" rel="noopener noreferrer" className="fab fa-spotify"></a></li>
			    <li><a href="https://www.linkedin.com/in/louis-lefebvre-3b1279173/" target="_blank" rel="noopener noreferrer" className="fab fa-linkedin"></a></li>
			    <li><a href="https://www.instagram.com/ddbarochiya/" target="_blank" rel="noopener noreferrer" className="fab fa-instagram"></a></li>
			    <li><a href="https://github.com/louislef299" target="_blank" rel="noopener noreferrer" className="fab fa-github"></a></li>
			    <li><a href="https://www.facebook.com/dhruv.barochia" target="_blank" rel="noopener noreferrer" className="fa fa-envelope"></a></li>
			    <li><a href="https://www.strava.com/athletes/53228508" target="_blank" rel="noopener noreferrer" className="fab fa-strava"></a></li>
			</ul>
		    
		</h1>
	    </div>
	)
    }
}
