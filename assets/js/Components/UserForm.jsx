import React from 'react'

export default class UserForm extends React.Component {

	constructor(props) {
		super(props);
		this.defaultValues = {
			email: '',
			name: '',
			role: 'sysadmin'
		};
		this.state = Object.assign({}, this.defaultValues);
	}

	handleChange(field, value) {
		let state = this.state;
		state[field] = value;
		this.setState({ state });
	}

	handleSave() { 
		this.props.onSave({ 
			email: this.state.email, 
			name: this.state.name,
			role: this.state.role 
		});
		this.setState(Object.assign({}, this.defaultValues));
	}

	render() {
		return (
			<div>
				<label>Email</label>
				<input name="email" type="email" value={ this.state.email } onChange={ (e) => this.handleChange('email', e.target.value) } />
				<br />

				<label>Name</label>
				<input name="name" type="text" value={ this.state.name } onChange={ (e) => this.handleChange('name', e.target.value) } />
				<br />

				<label>Role</label>
				<select name="role" onChange={ e => this.handleChange('role', e.target.value) } value={ this.state.role }>
					{
						this.props.roles.map((role, i) => {
							return <option key={ i } value={ role.slug }>{ role.name }</option>;
						})
					}
				</select>
				<br />

				<button type="button" onClick={ this.handleSave.bind(this) }>Add User</button>

			</div>
			);
	}

}