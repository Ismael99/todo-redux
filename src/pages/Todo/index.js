import React from 'react'
import {TodoPresentational} from './TodoPresentational'

export const TodoComponent = () => {
	const handleClick = () => {
		console.log('has hecho click')
	}
	return(
		<>
			<TodoPresentational
				onClick={handleClick}
				text='Example task'
				completed = {true}
			/>
		</>
	)
}
