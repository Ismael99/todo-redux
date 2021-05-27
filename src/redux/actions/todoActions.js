export const ADD_TODO = "ADD_TODO"
export const GET_TODOS = "GET_TODOS"
export const GET_TODO = "GET_TODO"
export const SAVE_TODO ="SAVE_TODO"
export const SET_COMPLETED ='SET_COMPLETED'
export const EDIT_TODO ='EDIT_TODO'
export const SHOW_MODAL ="SHOW_MODAL"
export const SET_ID_TODO_DELETE ="SET_ID_TODO_DELETE"
export const DELETE_TODO = 'DELETE_TODO'
export const SET_TODO_CURRENT ='SET_TODO_CURRENT'
export const AddTodo = (payload) => {
	return(
		{
			type:	ADD_TODO,
			payload 
		}
	)
}

export const getTodos = (payload) => {
	return({
		type: GET_TODOS, 
		payload
	})
}

export const getTodo = (payload) =>{
	return({
		type: GET_TODO,
		payload
	})
}

export const saveTodo = (payload)=>{
	return({
			type: SAVE_TODO,
			payload
		}
	)
}

export const setCompleted = (payload)=>{
	return({
		type: SET_COMPLETED,
		payload
	})
}

export const editTodo = (payload) =>{
	return({
		type: EDIT_TODO,
		payload
	})
}

export const showModal = (payload) =>{
	return({
		type: SHOW_MODAL,
		payload
	})
}

export const setIdTodoDelete = (payload)=>{
	return({
		type: SET_ID_TODO_DELETE,
		payload
	})
}

export const deleteTodo = () => {
	return({
		type: DELETE_TODO
	})
}

export const setTodoCurrent = (payload) => {
	return({
		type: SET_TODO_CURRENT,
		payload
	})
}
