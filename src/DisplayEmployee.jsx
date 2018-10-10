import React from "react";

const DisplayEmployee = ({ employee }) => {
  return (
    <div className="DisplayEmployee">
      <img src={employee.image} alt="simpsoncharacter" />
      <ul>
        <li>Quote : {employee.quote}</li>
        <li>Character : {employee.character}</li>
      </ul>
    </div>
  );
};

export default DisplayEmployee;
