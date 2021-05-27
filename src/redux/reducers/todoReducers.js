import {ADD_TODO, GET_TODOS, GET_TODO, SAVE_TODO, SET_COMPLETED, EDIT_TODO, SHOW_MODAL, SET_ID_TODO_DELETE, DELETE_TODO, SET_TODO_CURRENT} from '../actions/todoActions'
const stateInitial = {
	objects:[
		{id:1, completed:false, text:'Test1', description: 'test'},
		{id:2, completed:false, text:'Test2', description: 'test'},
		{id:3, completed:false, text:'Test3', description: 'test'}
	],
	todoCurrent: {id: 0, completed: false, text:'', description: ''}, 
	newTodo: {text: '', description: '', completed: false},
	show: false,
	id_todo_delete:''
}
export const todoReducers = (state=stateInitial, action) =>{
	switch(action.type){
		case ADD_TODO:
			return(
				{
					...state, 
					objects: [
						...state.objects,
						action.payload
					]
				}
			)
		case GET_TODOS: 
			return state
		case GET_TODO:{
			const index = state.objects.findIndex(todo => todo.id === action.payload)
			console.log('get todo: ', state.objects[index])
			return{
				...state,
				todoCurrent:state.objects[index], 
			}
		}
		case SAVE_TODO:{
			return({
				...state, 
				newTodo: action.payload
			})
		} 
		case SET_COMPLETED:{
			const position = state.objects.findIndex(todo =>	todo.id === action.payload)
			const newTodo = state.objects
			newTodo[position].completed = !state.objects[position].completed
			return({
				...state,
				objects: newTodo

			})
		}
		
		case EDIT_TODO:{
			const index = state.objects.findIndex(todo => todo.id ===action.payload.id)
			const newTodo = state.objects
			newTodo[index] = action.payload
			return({
				...state,
				objects: newTodo
			})                                                                         
		}
		case SHOW_MODAL:{
			return({
				...state, 
				show: action.payload
			})
		}
		case SET_ID_TODO_DELETE:{
			return({
				...state,
				id_todo_delete:action.payload
			})
		}
		case DELETE_TODO:{
			const newTodo = state.objects.filter(todo => todo.id !== state.id_todo_delete)
			return({
				...state,
				objects: newTodo
			})
		}
		case SET_TODO_CURRENT:{
			return({
				...state,
				todoCurrent: action.payload
			})
		}
		default: 
			return state
	}
}
