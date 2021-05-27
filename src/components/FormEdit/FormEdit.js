import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Link, navigate} from '@reach/router'
import {getTodo, saveTodo, editTodo, setTodoCurrent} from '../../redux/actions/todoActions'
import {SaveIcon} from '@heroicons/react/solid'
const FormEdit = (props) => {
	const {getTodo, id, editTodo, setTodoCurrent} = props
	const {todoCurrent} = props.todos
	const idInt = parseInt(id)
	useEffect(()=>{
		getTodo(idInt)
	}, [] )

	const handleChange = (e) =>{
		const {name, value} = e.target
		if(name === 'completed'){
			const valueBool = (value ==='true')
			setTodoCurrent({...todoCurrent, [name]:valueBool})
		}else{
			setTodoCurrent({...todoCurrent, [name]:value})
		}
	}
	const handleSubmit = (e) =>{
		e.preventDefault()
		editTodo(todoCurrent)
		navigate("/todo")
	}
	return(
		<>
			 <div className='flex flex-col items-center justify-center'>
				<form onSubmit={handleSubmit} className='flex flex-col px-5 py-2 border border-blue-100 rounded-md'>
					<div className='flex flex-col items-center'>
						<label className='w-full text-gray-400'>Actividad:</label>
						<input 
							onChange={handleChange} 
							name='text' style={{textDecoration: todoCurrent.completed?'line-through':'none'}} 
							className='w-full border-b border-black focus:outline-none' 
							type="text" 
							value={todoCurrent.text} 
						/>
					</div>
					<div className='flex flex-col items-center mt-4'>
						<label className='w-full text-gray-400'>Descripcion:</label>
						<textarea 
							onChange={handleChange} 
							name='description' 
							className='border-b border-black focus:outline-none' 
							value={todoCurrent.description} 
						/>
					</div>
					<div className='flex flex-col items-center mt-4'>
						<label className='w-full text-gray-400'>Status:</label>
						<select 
							onChange={handleChange} 
							name='completed' 
							className='inline-block w-full py-3 pl-3 pr-8 leading-tight text-gray-400 bg-gray-200 border-none rounded appearance-none focus:outline-none' 
							value={todoCurrent.completed}
						>
							<option className='focus:outline-none' value={false}>Incompleted</option>
							<option className='focus:outline-none' value={true}>Completed</option>
						</select>
					</div>
					<button type="submit" className='flex flex-row px-2 mx-auto mt-3 font-bold border border-green-300 outline-none rounded-md bg-green-50 hover:shadow-md transform hover:scale-110 hover: opacity-70 focus:'>
						<SaveIcon className='w-5 mr-2 text-blue-400'/>
						Guardar
					</button>
				</form>
				<Link to='/todo' className='px-3 py-1 mt-5 border border-red-300 rounded-md focus:outline-none hover:bg-red-100 transform hover:scale-110 hover:shadow-md'>Atras</Link>
			</div>
		</>
	)
}

const mapStateToProp = (state) => ({...state})
const mapDispatchToProp = (dispatch) => ({
	getTodo: (payload) => dispatch(getTodo(payload)),
	saveTodo: (payload) => dispatch(saveTodo(payload)),
	editTodo: (payload) => dispatch(editTodo(payload)),
	setTodoCurrent: (payload) => dispatch(setTodoCurrent(payload))
})

export default connect(mapStateToProp, mapDispatchToProp)(FormEdit)
