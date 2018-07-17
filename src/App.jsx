import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, NavbarGroup, NavbarHeading, NavbarDivider, Alignment } from '@blueprintjs/core';

import 'font-awesome/css/font-awesome.css';
import 'typeface-coda-caption/index.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
				<div className="application">
					<Navbar className="bp3-dark" fixedToTop>
            <NavbarGroup align={ Alignment.LEFT }>
              <NavbarHeading>
                <Link to={ `/` }>
                  www.<b>chrisandrade</b>.me
                </Link>
              </NavbarHeading>
              <NavbarDivider/>
              
              <span>Centreville, VA  &#9632; chrisjandrade AT gmail com</span>
            </NavbarGroup>
            <NavbarGroup align={ Alignment.RIGHT }>
              <a href="https://github.com/chrisjandrade" target="_blank">
                <i className="fa fa-github-square"/>
              </a>
              <a href="https://www.linkedin.com/in/chrisjandrade/" target="_blank">
 	  						<i className="fa fa-linkedin-square"/>
   						</a>
               <a href="https://medium.com/chrisjandrade" target="_blank">
                <i className="fa fa-medium"/>
               </a>
            </NavbarGroup>
					</Navbar>

          <div className="banner"/>
          <Resume/>
				</div>
			</Router>
		);
	}

}

ReactDOM.render(
	<App/>,
	document.querySelector('#content'));
