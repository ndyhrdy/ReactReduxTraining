import React from 'react'
import UserForm from './UserForm'

class Users extends React.Component {

	componentDidMount() {
		return this.props.onInit();
	}

	render() {
		return (
			<div>
				<h2>Users List</h2>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
						</tr>
					</thead>
					<tbody>
						{
							this.props.users.map((user, i) => {
								return (
									<tr key={ i }>
										<td>{ user.name }</td>
										<td>{ user.email }</td>
									</tr>
									);
							})
						}
					</tbody>
				</table>
				<UserForm onSave={ this.props.onAdd } />
			</div>
			);
	}

}

export default Users;