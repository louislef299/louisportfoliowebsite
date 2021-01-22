import './App.css';
import Navbar from './components/navbar.jsx';
import About from './components/about.jsx';
import Home from './components/homepage.jsx';
import Header from './components/header.jsx';
import Resume from './components/resume.jsx';
import Contact from './components/contact.jsx';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import {
  Switch,
  Route
} from "react-router-dom";
import React, { Component } from 'react';
import { API, Storage } from 'aws-amplify';

class App extends Component {
    render() {
	return (
	    <>
		<Header />
		<Navbar />

		<Switch>
		    <Route path="/about" exact component={Home} />
		    <Route path="/resume" exact component={Resume} />
		    <Route path="/contact" exact component={Contact} />
		    <Route path="/" component={About} />
		</Switch>
		<AmplifySignOut />
	    </>
	    
	);
    }
}

export default withAuthenticator(App);
