import React, { useState } from "react";

const Todoadd = (props) => {
  const [inputValue, setInputValue] = useState("");
  const onHandleSumit = (e) => {
    e.preventDefault();
    props.onAdd(inputValue);
  };
  const onHandleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      {inputValue}
      <form action="" onSubmit={onHandleSumit}>
        <input type="text" onChange={onHandleChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Todoadd;
