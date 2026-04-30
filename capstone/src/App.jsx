import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Taskinput from "./components/Taskinput";
import Tasklist from "./components/Tasklist";
import Stats from "./components/Stats";
import ProgressBar from "./components/ProgressBar";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [xp, setXp] = useState(0);
  const [darkMode, setDarkMode] = useState(true); 

  const addTask = (text) => {
    setTasks([...tasks, { text, done: false }]);
  };

  const completeTask = (index) => {
    const updated = [...tasks];
    if (!updated[index].done) {
      updated[index].done = true;
      setXp(xp + 10);
    }
    setTasks(updated);
  };

  const level = Math.floor(xp / 50);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="container">
        <Stats xp={xp} level={level} />
        <ProgressBar xp={xp} />

        <Taskinput addTask={addTask} />
        <Tasklist tasks={tasks} completeTask={completeTask} />
      </div>
    </div>
  );
};

export default App;