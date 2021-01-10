import React, { Component } from 'react';
import './homepage.css';
import louislogo from './images/IMG_4986.jpg';
import runningphoto from "./images/IMG_3157 2.JPG";

export default class Homepage extends Component {
    render () {
	return (
	    <div className="homepage-container col-md-10">
		<div className="hero-text">
		    <img className="louisphoto" src={louislogo} alt="This is supposed to be a picture of me :/" />
		    <h1 className="education">Education</h1>
		    <p>Currently a senior at the University of Minnesota, I plan to graduate with a B.A. in Computer Science June 2021. There have been a multitude of classes taken including Introduction to Programming, Advanced Algorithms, and Calculus, but my favorites so far have been Advanced Operating Systems and Introduction to Machine Architecture. Both of these classes were taught using the C programming language, which I consider to be a difficult yet powerful language. My education began in Edina where I got my diploma in 2017. There was only one computer science class offered in my high school at the time, and was where I was introduced to the Java OOP language. Outside of education, I have started a couple website projects including this one. For more information on these, take a look at my GitHub linked at the top!</p>

		    <h1 className="education">Hobbies <i class="fas fa-running"></i></h1>
		    <img className="runningphoto" src={runningphoto} alt="Running Photo" /><p className="floatLeft">Remaining active and healthy has always been a priority to me and I enjoy learning about sports science to maintain and push my body. Cooking and nutrition has been a daily practice and enjoyable reading topic in my free time. Running marathons has been an area of focus since my freshman year of college as well. In the past, I have ran the Twin Cities Marathon and Grandma's Marathon. During Grandma's, which I ran in the summer of 2019, I qualified for the Boston Marathon by breaking the 3-hour barrier and running the 26.2 miles in 2 hours and 53 minutes. However, because of covid, the Boston Marathon was cancelled and I was unable to run it. Since the time I ran expires before this year's Boston, I will be running Grandma's Marathon again in June with my training partner David Madison.</p>
		    
		</div>		
	    </div>
	    
	)
    }
}
