import React from 'react'
import {XIcon} from '@heroicons/react/solid'
import {deleteTodo} from '../../redux/actions/todoActions'
import {connect} from 'react-redux'
const Modal = (props) =>{
	const {deleteTodo, showModal, show}= props  
	const closeModal = () =>{
		showModal(false)
	}
	if(!show){
		return null
	}
	const handleDelete = () =>{
		showModal(false)
		deleteTodo()
	}
	return(
		<div className='fixed flex items-center justify-center w-screen h-screen m-0 bg-black shadow-lg bg-opacity-20'>
			<div className='flex flex-col w-1/2 bg-white rounded-lg'>
				<div className='flex flex-row items-center justify-between px-3 bg-red-200 rounded-t-lg'>
					<p className='w-full font-bold text-center text-red-600'> Test Modal {show}</p>
					<button onClick={closeModal} className='my-3 bg-red-300 border border-red-400 rounded rounded-lg hover:opacity-70 hover:shadow-md focus:outline-none transform hover:scale-125'><XIcon className='w-4'/>
					</button>
				</div>
				<div className='px-3 mt-2'>
					<p> In odio. Duis lobortis, metus eu laoreet tristique, pede mi congue
						mi, quis posuere augue nulla a augue. Pellentesque sed est.
					</p>
				</div>
				<div className='flex flex-row items-center justify-between px-3 my-3'>
					<button onClick={closeModal} className='px-3 bg-blue-300 border border-blue-400 rounded-md hover:opacity-60 transform hover:scale-110 focus:outline-none hover:shadow-md'>Cancelar</button>
					<button 
						className='px-3 bg-red-300 border border-red-400 rounded-md hover:opacity-60 transform hover:scale-110 focus:outline-none hover:shadow-md'
						onClick={()=>handleDelete()}
						>
						Eliminar
					</button>
				</div>
			</div>
		</div>
	)
}

const mapStateToProp = (state) =>({...state})
const mapDispatchToProp = (dispatch) => ({
	deleteTodo: ()=>dispatch(deleteTodo())
})

export default connect(mapStateToProp, mapDispatchToProp)(Modal)
