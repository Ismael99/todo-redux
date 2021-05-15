import React from 'react'
import {Router} from '@reach/router'
import {TodoComponent} from './pages/Todo'

export const App = () => {
	return(
		<Router>
			<TodoComponent  path='/todo'/>
		</Router>
	)
}
