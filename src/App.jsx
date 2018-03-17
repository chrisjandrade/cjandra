import React from 'react';
import ReactDOM from 'react-dom';

import 'font-awesome/css/font-awesome.css';

class App extends React.Component {

	render() {
		return (
			<div className="app-container">
				<div className="header">
					<img className="my-image" src="/img/me.jpg"/>
					Christopher J Andrade
					<div className="sub-header">Centreville, VA <i className="fa fa-circle"/> chrisjandrade AT gmail com</div>

					<div className="links">
						<a href="https://github.com/chrisjandrade" target="_blank">
							<i className="fa fa-github-square"/>
						</a>
						<a href="https://www.linkedin.com/in/chrisjandrade/" target="_blank">
							<i className="fa fa-linkedin-square"/>
						</a>
					</div>
				</div>

				<div className="summary section">
					<h2>Summary</h2>

					Software Engineering Professional focused primarily on web application development. 
					Highly adaptable, Strong problem solving capabilities, has worked individually, on teams and in leadership capacities.   Well versed in the SCRUM agile development methodology,
					and can also work the full stack as needed.
				</div>

				<div className="experience section">
					<h2>Experience</h2>

					<div className="sub-section">
						<h3>Senior Software Engineer 
							<span className="company">Blue Ridge Dynamics, Inc.</span>
							<span className="dates">Oct 2016 to Present</span>
						</h3>
						Supports various DARPA development efforts and projects. Worked to revamp the QED entity and 
						persona resolution application, QED assisted analysts with resolving potential online personas to a 
						known entity (candidate).  QED is used to discover and annotate potentially derogatory information 
						for an entity and its personas.  I worked to re-factor/re-write the application in backbone.js, 
							adjusting its look and feel, and usability, and also ensuring that the web-ui performed optimally. 
						Created a working prototype for the blue-map application.  The blue-map application was written using Vue.js.  
						It is a geo-spatial focused application that allows an analyst understand a target’s pattern of life, places of interest, and day-to-day operation.  
						It provides a high-level overview focused on a map using openlayers. Developed the Know Your Customer (KYC) application Web Interface.  
						KYC is another entity analytic focused application, that works to assist an analyst with performing an “enhanced” search.  
						Using a google search term as a base, an analyst could perform a search to develop a dossier on an individual or other target.  
						The KYC gui was written using ReactJS, and provides visualizations which help the analyst understand the target’s presence on the internet. 
						Currently developing the Blue Lake application.  Blue Lake is an artifact management system that assists analysts discover 
						and analyze data at both a high level and at a very granular level.  It provides tools for quickly triaging data, and for 
						long term deep analytics.  It supports searching against, audio, video, images, documents, application data, SMS, cell phone calls,
						 contact lists.  I worked to develop the initial architecture of the application, the GUI interface, and also integrate the various 
						 analytic tools which are run on the data. Blue Lake is developed using ReactJS, Docker, and Python.
					</div>

					<div className="sub-section">
						<h3>Senior Software Engineer 
							<span className="company">Probity LLC.</span>
							<span className="dates">Oct 2015 to Oct 2016</span>
						</h3>
						The principal engineer responsible for converting the legacy Acacia Media Player application from C# to NW.js. 
						Worked to create a faster than realtime audio pipeline and media visualization tool. This includes transcoding 
						various media formats to PCM16, time-stretch (tempo adjustment without pitch distortion), audio-gain control, 
						muting, audio interleaving, and energy waveform visualization. Worked to create a service wrapper for VAD/VF 
						(Voice Activity Detection and Voice Filtering) command line tools, and integrated this service with the 
						existing Acacia Desktop application. Currently working on the effort to migrate the Acacia Desktop application 
						from C# to NW.js
					</div>

					<div className="sub-section">
						<h3>Lead Developer 
							<span className="company">Six3 - CACI</span>
							<span className="dates">Jul 2015 to Oct 2015</span>
						</h3>
						Development lead for DCTC Bedrock-Tasking team. Works directing the team development effort, and 
						coordinating with other DCTC Bedrock Projects. Currently leading the effort to convert the legacy 
						Ruby application to the new micro-service and angular architecture.
					</div>

					<div className="sub-section">
						<h3>Software Engineer 
							<span className="company">Six3 - CACI</span>
							<span className="dates">Jan 2014 - Jul 2015</span>
						</h3>
						Key contributor to the DCTC Bedrock Program, working across multiple missions primarily with Angular JS, and NodeJS.
						<ul>
							<li>Developed pluggable architecture for Advanced Search capability using Elastic Search.</li>
							<li>Developed user authentication, session management, and role based access control.</li>
							<li>Developed initialization and error handling framework for the UI.</li>
							<li>Introduced the majority of the Karma – Jasmine unit-testing coverage into the projects.</li>
							<li>Key contributor to the TASKERS project across the full stack, from end-to-end.</li>
						</ul>
					</div>

					<div className="sub-section">
						<h3>UI Technical Lead 
							<span className="company">IBM</span>
							<span className="dates">Dec 2009 to Jan 2014</span>
						</h3>
						Software Engineer leading the development effort on front-end/UI.
						<ul>
							<li>Conducted code-reviews, and enforced/developed best practices across the LATCH front-end.</li>
							<li>Designed and developed mechanisms for Visualizing customer meta-data in a meaningful way.</li>
							<li>Used Raphael to visualize HLT (human language tools) data in an audio wave-form.</li>
							<li>Used Raphael to display pattern-of-life for data gathered across a span of time.</li>
							<li>Used Pixastic to allow for browser-side image enhancement.</li>
							<li>Developed framework to sync a large amount of data and meta-data across a time-line.</li>
							<li>Syncing GEO-location to a specific point in time (previously visited locations, and current known location) with Open Layers.</li>
							<li>Syncing AUDIO, VIDEO and IMAGE data and meta-data to a specific point in time.</li>
							<li>Developed mission time-line playback capability for a pool of AUDIO, VIDEO, IMAGE and GEO-POINT data in a time-line.</li>
							<li>Re-factored Data Management system for loading a large store of data into the browser.</li>
							<li>Solidified jasmine unit-testing.</li>
							<li>Frequent presenter for GBS technical book club: Presented on usability, basic & advanced JavaScript</li>
						</ul>
					</div>

					<div className="sub-section">
						<h3>Solutions Developer 
							<span className="company">Powertest - Verizon</span>
							<span className="dates">Feb 2007 to Mar 2010</span>
						</h3>
						Solution provider for the Verizon Testing Lab.
						<ul>
							<li>Developed a platform for automated end-to-end configuration and testing of a network.</li>
							<li>Provisioning and Configuring the Edge Router (WAN Side configuration)</li>
							<li>Includes provisioning and configuration of prototype MOCA switches.</li>
							<li>Provisioning and Configuring the Customer Route (LAN Side configuration)</li>
							<li>Configuring the Operating System for testing.</li>
							<li>Latency and Throughput Testing through FTP.</li>
							<li>Security Analysis with NESSUS.</li>
							<li>Performance Testing using OOKLA.</li>
							<li>Developed application for analyzing performance of a WIFI system with signal attenuation / degradation simulation.</li>
							<li>Developed application integrated with WASP for laboratory equipment inventory and management.</li>
						</ul>
					</div>
				</div>

			</div>
		);
	}

}

ReactDOM.render(
	<App/>,
	document.querySelector('#content'));
