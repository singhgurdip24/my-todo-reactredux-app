import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import todos from '../reducers/todos'

const TodoList = ({todo, toggleTodo}) => (
    <ul>
        {todos.map( todo => (
            <Todo key={todo.id} {...todo} onClick={()=>toggleTodo(todo.id)} />
        ))}
    </ul>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        })
    )
}

export default TodoList