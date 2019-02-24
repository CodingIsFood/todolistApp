import React, { useState } from 'react';

const Todo = (props) => {
  return (
    <div style={{textDecoration: props.todo.isCompleted ? 'line-through' : ''}}>
      {props.todo.text}
      <div>
        <button onClick={()=>props.completeTodo(props.index)}>complete</button>
        <button onClick={()=>props.deleteTodo(props.index)}>delete</button>
      </div>
    </div>
  )
}

export default Todo;
