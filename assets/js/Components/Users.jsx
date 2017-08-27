import React from 'react'
import UserForm from './UserForm'
import RoleForm from './RoleForm'
import UsersList from './UsersList'

class Users extends React.Component {

	componentDidMount() {
		return this.props.onInit();
	}

	render() {
		return (
			<div>
				<h2>Users List</h2>
				<UsersList users={ this.props.users } />
				<br />
				<h2>Add User</h2>
				<UserForm onSave={ this.props.onAdd } roles={ this.props.roles } />
				<br />
				<h2>Add Role</h2>
				<RoleForm onSave={ this.props.onAddRole } />
			</div>
			);
	}

}

export default Users;