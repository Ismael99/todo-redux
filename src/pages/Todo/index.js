import React from 'react'
import {TodoPresentational} from './TodoPresentational'
import {connect} from 'react-redux'
import {AddTodo, getTodos, showModal} from '../../redux/actions/todoActions'

const TodoComponent = (props) => {
	const {objects, show} = props.todos
	const {showModal} = props
	return(
		<>
			<TodoPresentational
				todos={objects}
				show={show}
				showModal={showModal}
			/>
		</>
	)
}

const mapStateToProp = (state) => (
	{...state}
)

const mapDispatchToProp = (dispatch) => (
	{
		AddTodo: () => dispatch(AddTodo),
		getTodos: ()=> dispatch(getTodos),
		showModal: (payload)=> dispatch(showModal(payload))
	}
)

export default connect(mapStateToProp, mapDispatchToProp)(TodoComponent)
