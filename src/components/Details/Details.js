import React, {useEffect} from 'react'
import {Link} from '@reach/router'
import {connect} from 'react-redux'
import {getTodo} from '../../redux/actions/todoActions'

const Details = (props) => {
	const {getTodo, id} = props
	const {todoCurrent} = props.todos
	let idInt = parseInt(id)
	useEffect(()=>{
		getTodo(idInt)
	}, [getTodo, idInt])
	return(
		<div className='flex flex-col items-center'>
			<form className='px-5 py-2 border border-blue-100 rounded-md'>
				<div className='flex flex-col items-center'>
					<label className='w-full text-gray-400'>Actividad:</label>
					<input readOnly={true} style={{textDecoration: todoCurrent?.completed?'line-through':'none'}} className='w-full border-b border-black focus:outline-none' type="text" value={todoCurrent.text} />
				</div>
				<div className='flex flex-col items-center mt-4'>
					<label className='w-full text-gray-400'>Descripcion:</label>
					<textarea readOnly={true} className='border-b border-black focus:outline-none' value={todoCurrent.description} />
				</div>
				<div className='flex flex-col items-center mt-4'>
					<label className='w-full text-gray-400'>Status:</label>
					<input readOnly={true} className={`border focus:outline-none rounded-md text-center ${todoCurrent.completed?'bg-blue-200 border-blue-400':'bg-red-200 border-red-400'}`} value={todoCurrent.completed?'Completed':'Incompleted'} />
				</div>
			</form>
			<Link to='/todo' className='px-3 py-1 mt-5 border border-red-300 rounded-md focus:outline-none hover:bg-red-100 transform hover:scale-110 hover:shadow-md'>Atras</Link>
		</div>
	)
}
const mapDispatchToProp = (dispatch)=>({
	getTodo: (payload)=> dispatch(getTodo(payload))
})
const mapStateToProp = (state) => ({...state})
export default connect(mapStateToProp, mapDispatchToProp)(Details)
