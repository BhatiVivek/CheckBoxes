import React, { useState } from "react";
import Checkbox from "./checkbox";
import "./styles.css";

let App = () => {
  return (
    <div className="App">
      <Checkbox id="unchecked" label="Unchecked" />
      <Checkbox id="checked" label="Checked" checked />
      <Checkbox id="indeterminate" label="Indeterminate" indeterminate />
      <Checkbox id="disabled" label="Disabled" disabled />
    </div>
  );
};

export default App;
