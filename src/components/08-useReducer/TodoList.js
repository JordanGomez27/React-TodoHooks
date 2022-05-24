import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, handleDelete, handleToggle }) => {

    return (
        <ul className="list-group list-group-flush">
            {
                todos.map((todo, i) => (
                    <TodoListItem
                        key={todo.id}
                        indice={i}
                        todo={todo}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                    />
                ))
            }
        </ul>
    )
}

export default TodoList
