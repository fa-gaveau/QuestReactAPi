import React from "react";

const GenerateEmployee = ({ selectEmployee }) => {
  return (
    <div className="GenerateEmployee">
      <button onClick={selectEmployee}>Selection Simpson</button>
    </div>
  );
};

export default GenerateEmployee;
