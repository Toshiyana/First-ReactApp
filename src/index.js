import React, { Component } from 'react';
import { render } from 'react-dom';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import AppContent from './AppContent';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';

class App extends Component {

	render() {
		const myProps = {
			title: "My Cool App!",
			subject: "My subject",
			favorite_color: "red",
		}

		return (
			<div className="app">
				<AppHeader {...myProps} />
				<AppContent />
				<AppFooter />
			</div>
		);
	}
}

render(<App />, document.getElementById('root'));