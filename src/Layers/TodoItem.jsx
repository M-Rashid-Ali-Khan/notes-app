import React from 'react'

const TodoItem = (props) => {
    return (
        <div className='flex flex-row'>
            <p className='text-justify bg-white px-4 py-2 flex-grow inline-block'>{props.todoItem.text }</p>
            <button onClick={()=> props.deleteCallback(props.todoItem)} className='bg-blue-500 px-4 py-2 rounded w-[2.5em] text-white'>
            -
            </button>
        </div>
    )
}

export default TodoItem;