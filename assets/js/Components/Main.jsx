import React from 'react'
import { Route } from 'react-router-dom'

import Users from './Users'
import Dashboard from './Dashboard'

class Main extends React.Component {

	render() {
		return (
			<div>
				<h1>Redux Training</h1>
				<Route exact path="/" render={ () => <Dashboard /> } />
				<Route path="/users" render={ () => {
					return (
						<Users 
							users={ this.props.users } 
							roles={ this.props.roles } 
							onInit={ this.props.loadUsers } 
							onAdd={ this.props.addUser } 
							onAddRole={ this.props.addRole } />
						); 
				}} />
			</div>
			);
	}
	
}

export default Main;