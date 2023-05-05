import React from "react";
import "./Team.css";
import { team } from "../../data/team";
const Team = () => {
  return (
    <div className="teams__container">
      <h1>Team</h1>
      <div className="teams__cards_container">
        {team.map((person) => {
          return (
            <div className="teams__card">
              <img src={person.image} alt="" />
              <p>{person.name}</p>
              <p>Role: Developer</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
