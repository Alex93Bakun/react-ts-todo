import React from 'react';

import TodoItem from './TodoItem';

import { ITodo } from '../types/data';

interface ITodoListProps {
    items: ITodo[];
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = ({ items, removeTodo, toggleTodo }) => {
    return (
        <div>
            {items.map((item) => (
                <TodoItem key={item.id} toggleTodo={toggleTodo} removeTodo={removeTodo} {...item} />
            ))}
        </div>
    );
};

export default TodoList;
