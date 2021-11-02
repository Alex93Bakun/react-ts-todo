import React from 'react';

import { ITodo } from '../types/data';

interface ITodoItem extends ITodo {
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = ({
    id,
    title,
    complete,
    toggleTodo,
    removeTodo,
}) => {
    return (
        <div>
            <input
                type="checkbox"
                checked={complete}
                onChange={() => toggleTodo(id)}
            />
            <span style={{ display: 'inline-block', margin: '0 10px' }}>
                {title}
            </span>
            <button
                onClick={() => removeTodo(id)}
                style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: 'red',
                    cursor: 'pointer',
                }}
            >
                x
            </button>
        </div>
    );
};

export default TodoItem;
