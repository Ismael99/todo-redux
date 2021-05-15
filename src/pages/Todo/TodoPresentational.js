import React from 'react'
import {Todo} from '../../components/Todo'
import PropTypes from 'prop-types'

export const TodoPresentational = ({onClick, completed, text}) =>{
	return(
		<>
			<p className='w-auto mx-auto text-xl font-bold' >
				Todo
			</p>
			<Todo onClick={onClick} completed={completed} text={text} />
		</>
	)
}

TodoPresentational.prototype = {
	onClick : PropTypes.func.isRequired,
	completed : PropTypes.bool.isRequired,
	text : PropTypes.string.isRequired,
}
