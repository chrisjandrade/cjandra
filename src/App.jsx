import React from 'react';
import ReactDOM from 'react-dom';

import 'font-awesome/css/font-awesome.css';

import Resume from './components/resume/Resume';

class App extends React.Component {

	render() {
		return (
			<div className="app-container">
				<Resume/>
			</div>
		);
	}

}

ReactDOM.render(
	<App/>,
	document.querySelector('#content'));
