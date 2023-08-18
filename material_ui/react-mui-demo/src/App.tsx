import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MuiTypography } from "./components/MuiTypography";
import { MuiButton } from "./components/MuiButton";
import { MuiTextFields } from "./components/MuiTextFields";
import { MuiSelect } from "./components/MuiSelect";
import { MuiRadioButton } from "./components/MuiRadioButton";
import { MuiCheckbox } from "./components/MuiCheckbox";

function App() {
  return (
    <div className="App">
      <MuiTypography />
      <MuiButton />
      <MuiTextFields />
      <MuiSelect />
      <MuiRadioButton />
      <MuiCheckbox />
    </div>
  );
}

export default App;
