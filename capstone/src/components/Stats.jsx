import React from "react";

const Stats = ({ xp, level }) => {
  return (
    <div className="stats">
      <h4>XP: {xp}</h4>
      <h4>Level: {level}</h4>
    </div>
  );
};

export default Stats;