import React, { useState } from "react";

const Taskinput = ({ addTask }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;
    addTask(text);
    setText("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Taskinput;