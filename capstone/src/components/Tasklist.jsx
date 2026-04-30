import React from "react";

const Tasklist = ({ tasks, completeTask }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <div key={index} className={`task ${task.done ? "done" : ""}`}>
          <span>{task.text}</span>

          <button onClick={() => completeTask(index)}>
            Done
          </button>
        </div>
      ))}
    </div>
  );
};

export default Tasklist;