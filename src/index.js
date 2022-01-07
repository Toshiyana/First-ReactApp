import React, { Component } from 'react';
import { render } from 'react-dom';
import AppFooter from './AppFooter';

class App extends Component {

	render() {
		return (
			<div>
				<div>
					<h1>Hello, world!</h1>
				</div>
				<AppFooter />
			</div>
		);
	}
}

render(<App />, document.getElementById('root'));