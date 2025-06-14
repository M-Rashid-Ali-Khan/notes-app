import React, { useState, Fragment } from 'react'
import TodoItem from './TodoItem'
import {v4 as uuidv4} from 'uuid'
import InputForm from './InputForm.jsx';
import FlexColumnPadding from './FlexColumnPadding.jsx';

const TodoListComponent = () => {
    const [todoList, setTodoList] = useState([])
    const addTodo = (todoText) => {
        setTodoList([
            ...todoList,
            {id: uuidv4(), text: todoText}
        ])
    }
    const deleteTodo = (todo) => {
        setTodoList(
            todoList.filter((item) => item.id !== todo.id)
        )
    }
    return (
        <div className='flex flex-row'>
            <div className="flex-grow"></div>
            <div className='min-w-[300px] sm:min-w-[400px] md:min-w-[600px] lg:min-w-[800px]'>
                <InputForm
                submitCallbackinputData={addTodo}
                />
                {
                    todoList.map((todo) => (
                        <TodoItem key={todo.id} deleteCallback={deleteTodo} todoItem={todo} />
                    ))
                }
            </div>
            <div className="flex-grow"></div>
        </div>
    )
}

export default TodoListComponent;
