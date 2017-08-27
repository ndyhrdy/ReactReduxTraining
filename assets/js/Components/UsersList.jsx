import React from 'react'

export default (props) => {

	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Email</th>
					<th>Role</th>
				</tr>
			</thead>
			<tbody>
				{
					props.users.map((user, i) => {
						return (
							<tr key={ i }>
								<td>{ user.name }</td>
								<td>{ user.email }</td>
								<td>{ user.role }</td>
							</tr>
							);
					})
				}
			</tbody>
		</table>
		);

}