import React from 'react'

export default class RoleForm extends React.Component {

	constructor(props) {
		super(props);
		this.defaultValues = {
			slug: '',
			name: ''
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
			slug: this.state.slug,
			name: this.state.name
		});
		this.setState(Object.assign({}, this.defaultValues));
	}

	render() {
		return (
			<div>
				<label>Slug</label>
				<input name="slug" value={ this.state.slug } onChange={ e => this.handleChange('slug', e.target.value) } />
				<br />

				<label>Name</label>
				<input name="name" value={ this.state.name } onChange={ e => this.handleChange('name', e.target.value) } />
				<br />

				<button type="button" onClick={ this.handleSave.bind(this) }>Add Role</button>
			</div>
			);
	}

}