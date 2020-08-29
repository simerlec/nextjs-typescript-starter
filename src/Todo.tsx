import React, { FunctionComponent, useState } from 'react';

export const TodoList: FunctionComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState<string[]>(['one', 'two', 'three']);

  const addTodo = (inputValue: string) => {
    if (inputValue) {
      setInputValue('');
      setTodos([...todos, inputValue]);
    }
  };

  const removeTodo = (index: number) => {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  };

  return (
    <div className="todolist">
      <h2>Todo List</h2>
      <div className="todolist__input">
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={e => (e.keyCode === 13 ? addTodo(inputValue) : null)}
        />
        <button onClick={() => addTodo(inputValue)}>Add Todo</button>
      </div>
      <ol>
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => removeTodo(index)}
            className="todolist__item"
          >
            {todo}
          </li>
        ))}
      </ol>
    </div>
  );
};
