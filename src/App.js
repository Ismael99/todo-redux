import React from 'react'
import {Router} from '@reach/router'
import TodoComponent from './pages/Todo'
import {Provider} from 'react-redux'
import {configureStore} from './redux/store'
export const App = () => {
	return(
		<Provider store={configureStore()}>
			<Router>
				<TodoComponent  path='todo/*'/>
			</Router>
		</Provider>
	)
}
