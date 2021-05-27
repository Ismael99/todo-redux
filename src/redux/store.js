import {createStore, combineReducers} from 'redux'
import {todoReducers} from './reducers/todoReducers'

const reducers = combineReducers({
	todos: todoReducers
})

export const configureStore = (state) => {
	return createStore(reducers, state)
}
