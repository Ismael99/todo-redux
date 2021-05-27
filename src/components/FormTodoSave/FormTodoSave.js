import React, {useEffect} from 'react'
import {Link, navigate} from '@reach/router'
import {connect} from 'react-redux'
import {saveTodo, AddTodo} from '../../redux/actions/todoActions'

const FormTodoSave = (props) =>{
	useEffect(()=>{
		props.todos.newTodo = {id: '', completed: false, text: '', description: ''}
	})
	const {newTodo} = props.todos
	const {saveTodo, AddTodo} = props
	const handleChange = (e) =>{
		const {value, name} = e.target	
		saveTodo({...newTodo, [name]: value})
	}
	const handleSubmit=(e)=>{
		e.preventDefault()
		AddTodo( Object.assign({completed: false, id:4}, newTodo))
		saveTodo({})
		navigate("/todo")
	}
	return(
		<div className='flex flex-col justify-center'>
			<form className="px-5 py-3 border border-blue-300 rounded-md" onSubmit={handleSubmit}>
					<div className='flex flex-col'>
						<label>Title</label>
						<input
							className='border border-gray-500 rounded-md focus:outline-none'
							type="text"
							placeholder="Title"
							name='text'
							onChange={handleChange}
							value = {newTodo.text}
						/>
					</div>
					<div className='flex flex-col'>
						<label>Description</label>
						<textarea
							className='border border-gray-500 rounded-md focus:outline-none'
							type="text"
							placeholder="Description"
							name='description'
							onChange={handleChange}
							value = {newTodo.description}
						/>
					</div>
				<button className='w-full px-2 mt-2 border border-blue-300 transform hover:scale-110 rounded-md focus:outline-none hover:shadow-md hover:bg-gray-100' type='submit'>Save</button>
			</form>
			<Link className='px-2 mx-auto mt-3 border border-red-200 rounded-md hover:bg-red-100 transform hover:scale-110 hover:shadow-md' to='/todo'>Atras</Link>
		</div>
	)
}

const mapStateToProp = (state) => ({...state})
const mapDispatchToProp = (dispatch) =>({
	saveTodo: (payload) => dispatch(saveTodo(payload)),
	AddTodo: (payload) => dispatch(AddTodo(payload))
})
export default connect(mapStateToProp, mapDispatchToProp)(FormTodoSave)
