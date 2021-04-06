import React from 'react';

const initialTodos = [
  { id: 1, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: false },
  { id: 3, content: 'JS', completed: false },
  { id: 4, content: 'React', completed: false },
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return [...state, action.todo];
    case 'TOGGLE':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const TodoStateContext = React.createContext();
const TodoDispatchContext = React.createContext();
const TodoNextIdContext = React.createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = React.useReducer(todoReducer, initialTodos);
  const nextId = React.useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = React.useContext(TodoStateContext);

  // TodoProvider로 감싸지 않고, 커스텀 훅을 사용했을 경우 에러처리
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useTodoDispatch() {
  const context = React.useContext(TodoDispatchContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useTodoNextId() {
  const context = React.useContext(TodoNextIdContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}
