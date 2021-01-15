import React, { useState } from "react";

const Rows = () => {
  const [name, setName] = useState({ firstName: "", lastname: "" });
  return (
    <div>
      <form action="">
        <input
          type="text"
          value={name.firstName}
          placeholder="fName"
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastname}
          placeholder="Lname"
          onChange={(e) => setName({ ...name, lastname: e.target.value })}
        />
        <h1>Your First name is : => {name.firstName}</h1>
        <h1>Your First name is : => {name.lastname}</h1>
      </form>
    </div>
  );
};

export default Rows;
