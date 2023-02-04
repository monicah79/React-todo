/* eslint-disable */
import React, { useState } from 'react';

const InputTodo = (props) => {
  const [text, setText] = useState();
  const onChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodoProps(text);
    setText('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input style={{ justifyContent: 'center' }} type="text" placeholder="Add Todo..." value={text} onChange={onChange} />
      <button>Submit</button>
    </form>
  );
};
export default InputTodo;
