import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

	render() {
		return (
			<div className="app-container">
				<div className="header">
					<img className="my-image" src="/img/me.jpg"/>
					Christopher J Andrade
					<div className="sub-header">Centreville, VA &diams; chrisjandrade AT gmail com</div>
				</div>
			</div>
		);
	}

}

ReactDOM.render(
	<App/>,
	document.querySelector('#content'));
