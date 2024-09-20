import React, { createContext, useReducer, useContext, ReactNode } from 'react';

type Todo = {
  id: number;
  text: string;
  content: string;
  isImportant: boolean;
  creatAt: Date;
  isComplete: boolean
};

type StateType = {
  todos: Todo[];
};

type ActionType =
  | { type: 'ADD_TODO'; payload: { text: string, content: string } }
  | { type: 'EDIT_TODO'; payload: { id: number; text: string, content: string } }
  | { type: 'DELETE_TODO'; payload: { id: number } }
  | { type: 'TOGGLE_TODO'; payload: { id: number } };

const initialState: StateType = {
  todos: [],
};

function todoReducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.payload.text, content: action.payload.content , isComplete: false, isImportant: false, creatAt: new Date() },
        ],
      };
    case 'EDIT_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    default:
      return state;
  }
}

const TodoContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};
