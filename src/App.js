import React, { useState } from 'react';
import Todo from './components/Todo.js';
import TodoForm from './components/TodoForm.js';


const App = () => {
  const [todos, setTodos] = useState([
    {
      text: "learn about react hooks",
      isCompleted: false
    },
    {
      text: "learn about redux",
      isCompleted: false
    },
    {
      text: "learn about context api",
      isCompleted: false
    }
  ]);

const addTodo = text => {
  const newTodos = [...todos, {text}];
  setTodos(newTodos);
}

const completeTodo=(index)=>{
  const newTodos = [...todos];
  newTodos[index].isCompleted=true;
  setTodos(newTodos);
}

const deleteTodo=(index)=>{
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  //newTodos[index]=''; works but not as i want it
  setTodos(newTodos);
}

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App;
