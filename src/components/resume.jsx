import React, { Component } from 'react';
import './resume.css';

export default class Resume extends Component {
    render() {
	return (
	    <div className="container-fluid resume">
		<h1>Resume</h1>
		<h2>Education</h2>
		<h3>University of Minnesota - Twin Cities</h3>
		<h4>Expected Graduation June 2021</h4>
		<p>B.A. Computer Science</p>
		<h3>Edina High School</h3>
		<h4>Sep 2014 - May 2017</h4>
		<p>Honors: AP Scholar, Athlete Scholar, Varsity Captain</p>
		<h2>Experience</h2>
		<h3>Best Buy - Small Parcel Delivery</h3>
		<h4>Current</h4>
		<ul>
		    <li>In charge of retrieving and delivering same-day and next-day packages to customers in an efficient and timely manner</li>
		    <li>An independent role that required responsibility and time-management skills</li>
		</ul>
		<h3>Rainbow Treecare - Tree Technician</h3>
		<h4>June 2018 - Aug 2020</h4>
		<ul>
		    <li>Valued member of team whose job was to inject pesticides into American Elm trees order to prevent Dutch Elm Disease</li>
		    <li>Orchestrate timely arrival,  client interaction to ensure the proper and safe application of treatment to the correct tree with the correct dosage,  typically 4-6 trees per day, resulting in over 300 trees over the course of a summer</li>
		    <li>Demonstrated strong work ethic and integrity evidenced by return over three summers with increasing responsibilities</li>
		</ul>
		<h3>Tea House - Server</h3>
		<h4>Aug 2019 - Feb 2020</h4>
		<ul>
		    <li>Server at an Asian restaurant 2-4 days a week, serving over 20 guests per shift, depending on the season</li>
		    <li>Demanded delivering attentive customer service which entailed  patience and immediate, decisive decisions in time sensitive situations</li>
		</ul>
		<h3>University of Minnesota Classroom Services - Classroom Condition Monitor</h3>
		<h4>Jan 2018 - May 2018</h4>
		<ul>
		    <li>Facilitated the classroom setting through aiding the morning janitors by marking problems in classrooms</li>
		    <li>Required the discipline of early weekday mornings to ensure proper classroom sanitary conditions</li>
		</ul>
		<h2>Relevant Experience Within Field</h2>
		<p>At Edina High School I advanced interest in Engineering by completing Introduction to Engineering Design, Principles of Engineering, Engineering Design and Development, and AP Computer Science. Projects completed required working with Autodesk Inventor, breadboard circuits, and learning the basics of programming through Java. At the University of Minnesota, I am advancing my interest within the computer science field by having taken Introduction to Computing and Programming where I completed studies in Python, Introduction to Algorithms and Data Structures where we worked with Java and learned more about memory and code efficiency, and Discrete Structures of Computer Science where we learned about truth tables, induction, and encryption. Completed Elementary Computational Linear Algebra, Machine Architecture and Organization(working in C), and Advanced Programming Principles(OCaml). Currently, I am taking Advanced Algorithms and Data Structures where we delve into learning computational critical thinking skills, learning algorithms like Merge-Sort, Matrix-Chain Multiplication, and Dijkstra’s Algorithm. Introduction to Operating Systems is another class I am taking where we are working further into systems calls and working on the fundamentals of networking, thread, and processes, using C and Linux.</p>
	    </div>
	)
    }
}
