import React, { useState } from 'react';
import { useTodoContext } from './TodoContext';

export const TodoApp: React.FC = () => {
  const { state, dispatch } = useTodoContext();
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch({ type: 'ADD_TODO', payload: { text: newTodo, content: newTodo } });
      setNewTodo('');
    }
  };

  const handleEditTodo = (id: number, newText: string) => {
    dispatch({ type: 'EDIT_TODO', payload: { id, text: newText, content: newText } });
  };

  const handleDeleteTodo = (id: number) => {
    dispatch({ type: 'DELETE_TODO', payload: { id } });
  };

  const handleToggleTodo = (id: number) => {
    dispatch({ type: 'TOGGLE_TODO', payload: { id } });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="text"
              value={todo.text}
              onChange={(e) => handleEditTodo(todo.id, e.target.value)}
            />
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            <button onClick={() => handleToggleTodo(todo.id)}>
              {/* {todo.completed ? 'Undo' : 'Complete'} */}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
