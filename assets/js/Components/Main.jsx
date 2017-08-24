import React from 'react'
import { Route } from 'react-router-dom'

import Users from './Users'
import Dashboard from './Dashboard'

class Main extends React.Component {

	render() {
		return (
			<div>
				<h1>Redux Training</h1>
				<Route exact path="/" render={ () => <Dashboard users={ this.props.users } /> } />
			</div>
			);
	}
	
}

export default Main;