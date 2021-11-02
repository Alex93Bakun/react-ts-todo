import React, { useEffect, useRef, useState } from 'react';

import TodoList from './TodoList';

import { ITodo } from '../types/data';

const App: React.FC = () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<ITodo[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const addTodo = () => {
        if (value) {
            setTodos([
                ...todos,
                { id: Date.now(), title: value, complete: false },
            ]);
            setValue('');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        e.keyCode === 13 && addTodo();
    };

    const removeTodo = (id: number): void => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleTodo = (id: number): void => {
        setTodos(
            todos.map((todo) => {
                if (todo.id !== id) {
                    return todo;
                }
                return {
                    ...todo,
                    complete: !todo.complete,
                };
            })
        );
    };

    useEffect(() => {
        inputRef.current && inputRef.current.focus();
    }, []);

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => handleChange(e)}
                    onKeyDown={(e) => handleKeyDown(e)}
                    ref={inputRef}
                />
                <button onClick={addTodo}>Add</button>
            </div>
            <TodoList
                items={todos}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
            />
        </div>
    );
};

export default App;
