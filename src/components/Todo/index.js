import React from 'react'
import {Link} from '@reach/router'
import {connect} from 'react-redux'
import {getTodo, setCompleted, showModal, setIdTodoDelete} from '../../redux/actions/todoActions'
import {Eye, PencilAlt, Trash} from 'react-hero-icon/solid'
const Todo = ({completed, text, description ,id, getTodo, setCompleted, showModal, todos, setIdTodoDelete}) => {
	const handleDelete = ()=>{
		setIdTodoDelete(id)
		showModal(true)
	}
	return(
		<>
			<tr>
				<td className='flex flex-row items-center h-full text-sm text-left whitespace-nowrap to-gray-900' style={{textDecoration: completed? 'line-through': 'none'}}><input  defaultChecked ={completed} onChange={()=> setCompleted(id)}  type="checkbox" className='mr-2 focus:outline-none'/>{text}</td>
				<td className='px-5 text-sm text-center to-gray-900'>{description}</td>
				<td className='flex flex-row items-center justify-center w-full px-2'> 
					<Link className='hover:text-blue-200 hover:shadow-sm' to={`details/${id}`}>
						<Eye/>
					</Link>
					<Link className='mx-1 hover:text-green-200 hover:shadow-sm' to={`edit/${id}`}>
						<PencilAlt/>
					</Link>
					<button className='hover:text-red-200 hover:shadow-sm' onClick={handleDelete}>
						<Trash/>
					</button>
				</td>
			</tr>
		</>
	)
}

const mapStateToProp = (state) => ({...state})

const mapDispatchToProp = (dispatch) => ({
	getTodo: (payload) => dispatch(getTodo(payload)),
	setCompleted: (payload) => dispatch(setCompleted(payload)),
	showModal: (payload) => dispatch(showModal(payload)),
	setIdTodoDelete: (payload)=> dispatch(setIdTodoDelete(payload))
})

export default connect(mapStateToProp, mapDispatchToProp)(Todo)

