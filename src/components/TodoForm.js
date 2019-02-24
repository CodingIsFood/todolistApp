import React, { useState } from 'react';

const TodoForm = (props) => {
  const [value, setValue] = useState('')

  const handleSubmit= e => {
    e.preventDefault();
    if (!value){return}
    props.addTodo(value)
    setValue('');
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="add todo"
        />
    </form>
    </div>
  )
}

export default TodoForm;
