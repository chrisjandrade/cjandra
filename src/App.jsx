import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from "react-router-dom";

import 'font-awesome/css/font-awesome.css';

import Resume from './components/resume/Resume';

class App extends React.Component {

	routingComponents = {
		ResumeComponent: () => {
			return (<Resume/>);
		}
	};

	render() {
		const { ResumeComponent } = this.routingComponents;

		return (
			<Router>
				<div className="app-container">
					<div className="app-header">
						<div className="name">www.<strong>chrisandrade</strong>.me</div>
						<div className="pull-right navigation">
							<Link to="resume"><i className="fa fa-id-card-o"/> Resume</Link>
							<a href="https://medium.com/chrisjandrade" target="_blank"><i className="fa fa-medium"/> Blog</a>
						</div>
					</div>

					<Route exact path="/" component={ ResumeComponent }/>
					<Route path="/resume" component={ ResumeComponent }/>
				</div>
			</Router>
		);
	}

}

ReactDOM.render(
	<App/>,
	document.querySelector('#content'));
