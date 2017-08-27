import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as ActionCreators from '../Actions/Index'
import Main from './Main'

function mapStateToProps(state) {
	return {
		users: state.users,
		roles: state.roles
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default App;