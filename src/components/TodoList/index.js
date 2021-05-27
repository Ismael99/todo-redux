import React from 'react'
import Todo from '../Todo'
import PropTypes from 'prop-types'

export const TodoList = ({todos}) =>{
	return(
		<>
			<table className='divide-y divide-gray-200'>
				<thead className='bg-gray-50'>
					<tr>
						<th scope='col' className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'>Title</th>
						<th scope='col' className='px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase'>Description</th>
						<th scope='col' className='px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase'>Actions</th>
					</tr>
				</thead>
				<tbody className='bg-white divide-y divide-gray-200'>
					{
						todos.map(todo => (
							<Todo
								key={todo.id}	
								{...todo}
							/>
						))
					}
				</tbody>
			</table>
		</>
	)
}

TodoList.prototype = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		completed: PropTypes.bool.isRequired,
		text: PropTypes.string.isRequired
	}).isRequired).isRequired
}
