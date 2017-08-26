import React from 'react'

export default class UserForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			name: ''
		};
	}

	handleChange(field, value) {
		let state = this.state;
		state[field] = value;
		this.setState({ state });
	}

	handleSave() { 
		this.props.onSave({ email: this.state.email, name: this.state.name });
		this.setState({ email: '', name: '' });
	}

	render() {
		return (
			<div>
				<label>Email</label>
				<input name="email" type="email" value={ this.state.email } onChange={ (e) => this.handleChange('email', e.target.value) } />

				<label>Name</label>
				<input name="name" type="text" value={ this.state.name } onChange={ (e) => this.handleChange('name', e.target.value) } />

				<button type="button" onClick={ this.handleSave.bind(this) }>Add User</button>

			</div>
			);
	}

}