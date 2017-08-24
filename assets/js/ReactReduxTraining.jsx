import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Store from './Store'

import App from './Components/App'

render(
	<Provider store={ Store }>
		<Router>
			<Route path="/" component={ App }>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app'));