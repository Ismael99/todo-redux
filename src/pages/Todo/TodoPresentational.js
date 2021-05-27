import React from 'react'
import {Router, Link} from '@reach/router'
import PropTypes from 'prop-types'
import {TodoList} from '../../components/TodoList'
import Details from '../../components/Details/Details'
import FormTodoSave from '../../components/FormTodoSave/FormTodoSave'
import FormEdit from '../../components/FormEdit/FormEdit'
import {PlusIcon} from '@heroicons/react/solid'
import Modal from '../../components/Modal'

export const TodoPresentational = ({todos, show, showModal}) =>{
	return(
		<div className='flex flex-col items-center w-screen h-screen'>
			<div className='flex items-center justify-end w-full px-5 py-3 mt-3'>
				<Link to='add' className='flex flex-row px-2 bg-white border border-blue-300 border-solid hover:bg-blue-50 hover:shadow-md transform hover:scale-110 focus:outline-none max-w-min rounded-md'>
					<span className='flex flex-row'>
						<PlusIcon className='w-5 '/>
						Add
					</span>		
				</Link>
			</div>
			<p className='w-auto mx-auto text-xl font-bold' >
				Todo
			</p>
			<Router>
				<TodoList
					path ='/'
					todos = {todos}
				/>
				<Details
					path='details/:id'
				/>
				<FormTodoSave path='/add'/>
				<FormEdit path='edit/:id' />
			</Router>
			<Modal show={show} showModal={showModal}  />
		</div>
	)
}

TodoPresentational.prototype = {
	onClick : PropTypes.func.isRequired,
	completed : PropTypes.bool.isRequired,
	text : PropTypes.string.isRequired,
}
